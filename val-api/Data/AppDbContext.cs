using Microsoft.EntityFrameworkCore;

namespace RandomQuoteApi.Data;

// This class IS the database connection.
public class AppDbContext : DbContext
{
    // Constructor: Passes configuration (like connection string) to the base DbContext
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    // DbSet: These represent the TABLES in our database.
    // We can query them like lists: _context.Quotes.ToList()
    public DbSet<Quote> Quotes { get; set; }
    public DbSet<Category> Categories { get; set; }

    // This method runs once when the app starts to configure the DB model.
    protected override void OnModelCreating(ModelBuilder mb)
    {
        base.OnModelCreating(mb);

        // Configuration: Make sure Category names are unique.
        // We don't want two "funny" categories.
        mb.Entity<Category>()
            .HasIndex(c => c.Name)
            .IsUnique();

        // Seeding: Add initial data so the DB isn't empty.
        // When we run Migration, these rows will be inserted.
        mb.Entity<Category>().HasData(
            new Category { Id = 1, Name = "sweet" },
            new Category { Id = 2, Name = "funny" },
            new Category { Id = 3, Name = "dark" },
            new Category { Id = 4, Name = "sarcastic" }
        );
    }
}
