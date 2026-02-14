using System.ComponentModel.DataAnnotations;

namespace RandomQuoteApi.Data;

public class Category
{
    // Primary Key: Unique ID for the database
    public int Id { get; set; }
    
    // The name of the category (e.g., "funny", "dark")
    // [Required] ensures this cannot be null in the DB
    [Required]
    public string Name { get; set; } = string.Empty;
    
    // Navigation Property:
    // This defines the "One-to-Many" relationship.
    // One Category can have a List of many Quotes.
    public List<Quote> Quotes { get; set; } = new();
}
