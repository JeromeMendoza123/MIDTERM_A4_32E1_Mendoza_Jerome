namespace RandomQuoteApi.Models;

// DTO: Data Transfer Object
// This defines EXACTLY what the API sends back to the client.
// Notice we use 'Category' (string) instead of 'CategoryId' (int).
public class QuoteDto
{
    public int Id { get; set; }
    public string Text { get; set; } = string.Empty;
    public string Author { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
}

// DTO for creating a new quote.
// We don't need 'Id' because the database generates it.
public class CreateQuoteDto
{
    public string Text { get; set; } = string.Empty;
    public string Author { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
}
