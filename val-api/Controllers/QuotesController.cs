using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RandomQuoteApi.Data;
using RandomQuoteApi.Models;

namespace RandomQuoteApi.Controllers;

[ApiController]
[Route("[controller]")] // Maps to /Quotes
public class QuotesController : ControllerBase
{
    private readonly AppDbContext _context;

    // Dependency Injection: The AppDbContext is injected here automatically.
    public QuotesController(AppDbContext context)
    {
        _context = context;
    }

    // GET: /quotes
    // Optional Query Param: /quotes?category=funny
    [HttpGet]
    public async Task<ActionResult<IEnumerable<QuoteDto>>> GetQuotes([FromQuery] string? category)
    {
        // Start a query on the Quotes table
        // Include(q => q.Category) tells EF to JOIN the Categories table
        // effectively doing: SELECT * FROM Quotes JOIN Categories ON...
        var query = _context.Quotes.Include(q => q.Category).AsQueryable();

        // Apply Filter if param is present
        if (!string.IsNullOrEmpty(category) && category != "all")
        {
            query = query.Where(q => q.Category!.Name == category);
        }

        // Execute the Query against the database
        var quotes = await query.ToListAsync();

        // Map Entities (Quote) to DTOs (QuoteDto).
        // We do this to hide the internal DB structure and flatten the result.
        var dtos = quotes.Select(q => new QuoteDto
        {
            Id = q.Id,
            Text = q.Text,
            Author = q.Author,
            Category = q.Category!.Name // Flattening: Get Name from related object
        });

        return Ok(dtos);
    }

    // GET: /quotes/random
    // Returns a random quote
    [HttpGet("random")]
    public async Task<ActionResult<QuoteDto>> GetRandomQuote()
    {
        var quotes = await _context.Quotes.Include(q => q.Category).ToListAsync();
        
        if (quotes.Count == 0)
        {
            return NotFound("No quotes available.");
        }

        var random = new Random();
        var randomQuote = quotes[random.Next(quotes.Count)];

        var dto = new QuoteDto
        {
            Id = randomQuote.Id,
            Text = randomQuote.Text,
            Author = randomQuote.Author,
            Category = randomQuote.Category!.Name
        };

        return Ok(dto);
    }

    // POST: /quotes
    // Body: { "text": "...", "author": "...", "category": "funny" }
    [HttpPost]
    public async Task<ActionResult<QuoteDto>> CreateQuote(CreateQuoteDto dto)
    {
        // 1. Validation
        if (string.IsNullOrWhiteSpace(dto.Text) || string.IsNullOrWhiteSpace(dto.Category))
        {
            return BadRequest("Text and Category are required.");
        }

        var categoryName = dto.Category.Trim().ToLower();

        // 2. Check if Category exists in DB
        var category = await _context.Categories
            .FirstOrDefaultAsync(c => c.Name == categoryName);

        // 3. Fail if category doesn't exist (Enforcement)
        if (category == null)
        {
            return BadRequest($"Category '{dto.Category}' does not exist. Please use: sweet, funny, dark, sarcastic.");
        }

        // 4. Create the Quote Entity
        var quote = new Quote
        {
            Text = dto.Text,
            Author = dto.Author,
            CategoryId = category.Id // Link to the existing category
        };

        // 5. Save to Database
        _context.Quotes.Add(quote);
        await _context.SaveChangesAsync();

        // 6. Return the created DTO
        var responseDto = new QuoteDto
        {
            Id = quote.Id,
            Text = quote.Text,
            Author = quote.Author,
            Category = category.Name
        };

        return CreatedAtAction(nameof(GetQuotes), new { id = quote.Id }, responseDto);
    }
}
