# Random Quote API - MIDTERM_A4

This is a .NET Core Web API for the Random Quote application, built with ASP.NET Core 9.0, Entity Framework Core, and SQLite.

## Project Structure

```
val-api/
├── Controllers/
│   └── QuotesController.cs    # API Endpoints (GET, POST)
├── Data/
│   ├── AppDbContext.cs         # EF Core Database Context
│   ├── Category.cs             # Category Entity
│   └── Quote.cs                # Quote Entity
├── Models/
│   └── QuoteDtos.cs            # Data Transfer Objects
├── Migrations/                 # EF Core Migrations
├── appsettings.json            # Configuration (Connection String)
├── Program.cs                  # App Configuration & DI
└── RandomQuoteApi.csproj       # Project File
```

## Features

- **RESTful API** with two main endpoints:
  - `GET /Quotes` - Fetch all quotes (with optional category filter)
  - `POST /Quotes` - Create a new quote
- **SQLite Database** with Entity Framework Core
- **Seeded Categories**: sweet, funny, dark, sarcastic
- **CORS Enabled** for React frontend
- **Swagger UI** for API documentation and testing

## Prerequisites

- .NET 9.0 SDK
- PowerShell or Command Prompt

## How to Run

### 1. Navigate to the API folder
```powershell
cd val-api
```

### 2. Run the API
```powershell
dotnet run
```

The API will start on: **http://localhost:5281**

### 3. Access Swagger UI
Open your browser and navigate to:
- **http://localhost:5281/swagger**

You can test the API endpoints directly from Swagger UI.

## API Endpoints

### GET /Quotes
Fetch all quotes or filter by category.

**Examples:**
- Get all quotes: `http://localhost:5281/Quotes`
- Get quotes by category: `http://localhost:5281/Quotes?category=funny`

**Response:**
```json
[
  {
    "id": 1,
    "text": "Life is beautiful",
    "author": "Anonymous",
    "category": "sweet"
  }
]
```

### POST /Quotes
Create a new quote.

**Request Body:**
```json
{
  "text": "The only way to do great work is to love what you do.",
  "author": "Steve Jobs",
  "category": "sweet"
}
```

**Response:**
```json
{
  "id": 1,
  "text": "The only way to do great work is to love what you do.",
  "author": "Steve Jobs",
  "category": "sweet"
}
```

## Testing with Postman

### Test GET Request
1. Method: `GET`
2. URL: `http://localhost:5281/Quotes`
3. Click "Send"
4. You should see an empty array `[]` or seeded data

### Test POST Request
1. Method: `POST`
2. URL: `http://localhost:5281/Quotes`
3. Body: Select "raw" → "JSON"
4. Paste:
```json
{
  "text": "Success is not final, failure is not fatal.",
  "author": "Winston Churchill",
  "category": "sweet"
}
```
5. Click "Send"
6. You should get a `201 Created` status with the created quote

### Test Invalid Category
Try posting with an invalid category:
```json
{
  "text": "Test quote",
  "author": "Test Author",
  "category": "unknown"
}
```
You should get a `400 Bad Request` with error message:
```
Category 'unknown' does not exist. Please use: sweet, funny, dark, sarcastic.
```

## Database

The SQLite database (`quotes.db`) is created automatically when you run migrations.

**Location:** `val-api/quotes.db`

**Seeded Categories:**
- sweet
- funny
- dark
- sarcastic

## Integration with React Frontend

The React frontend is configured to use this API via the `.env` file:

```
VITE_API_URL=http://localhost:5281/Quotes
```

To run both together:

1. **Terminal 1 - Start the API:**
```powershell
cd val-api
dotnet run
```

2. **Terminal 2 - Start React (from project root):**
```powershell
npm run dev
```

3. Open the React app in your browser (typically `http://localhost:5173`)

The React app will now fetch and create quotes using the .NET API instead of json-server.

## Troubleshooting

### Port Already in Use
If port 5281 is already in use, edit `Properties/launchSettings.json` and change the port number in both the `.env` file and `launchSettings.json`.

### CORS Errors
Make sure the API is running and the CORS policy is enabled in `Program.cs`.

### Database Issues
If you need to recreate the database:
```powershell
# Delete the database file
Remove-Item quotes.db

# Reapply migrations
dotnet ef database update
```

## Technologies Used

- **ASP.NET Core 9.0** - Web API framework
- **Entity Framework Core 9.0** - ORM
- **SQLite** - Database
- **Swashbuckle** - Swagger/OpenAPI documentation
- **CORS** - Cross-Origin Resource Sharing

## Assignment Notes

- ✅ .NET Core Web API with controllers
- ✅ No authentication (as per requirements)
- ✅ No Docker (as per requirements)
- ✅ SQLite database with EF Core
- ✅ Proper project structure
- ✅ Quality commits (migrations tracked separately)
- ✅ CORS enabled for React frontend
- ✅ Swagger documentation

## Author

Jerome Mendoza - MIDTERM_A4_32E1_Mendoza_Jerome
