using System.ComponentModel.DataAnnotations;

namespace RandomQuoteApi.Data;

public class Quote
{
    // Primary Key
    public int Id { get; set; }
    
    // The actual text of the quote
    [Required]
    public string Text { get; set; } = string.Empty;
    
    // The author of the quote
    [Required]
    public string Author { get; set; } = string.Empty;
    
    // Foreign Key:
    // This links this specific Quote to a specific Category ID.
    // It matches the 'Id' property of the 'Category' entity.
    public int CategoryId { get; set; }
    
    // Navigation Property:
    // This allows us to access the full Category object from a Quote.
    // e.g., quote.Category.Name
    public Category? Category { get; set; }
}
