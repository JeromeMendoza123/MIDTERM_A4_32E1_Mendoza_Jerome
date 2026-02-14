using Microsoft.EntityFrameworkCore;
using RandomQuoteApi.Data;

var builder = WebApplication.CreateBuilder(args);

// 1. Add Services to the DI Container
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure Entity Framework with SQLite
// It reads "DefaultConnection" from appsettings.json
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

// Configure CORS (Cross-Origin Resource Sharing)
// This allows our React App (running on a different port) to talk to this API.
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy => policy.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader());
});

var app = builder.Build();

// 2. Configure the HTTP Request Pipeline (Middleware)
if (app.Environment.IsDevelopment())
{
    // Enable Swagger UI in Development mode
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Enable the CORS policy we defined above
app.UseCors("AllowReactApp");

app.MapControllers();

app.Run();
