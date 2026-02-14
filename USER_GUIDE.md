# Random Quote Generator - User Guide

## Overview
The Random Quote Generator is a full-stack web application that displays random quotes, categorized by type (sweet, funny, dark, sarcastic). You can browse quotes by category, add your own quotes, and get random quotes with the click of a button.

---

## Features

✨ **Browse Quotes** - View all quotes or filter by category (sweet, funny, dark, sarcastic)
🎲 **Random Quote** - Click "Get Another Quote" to fetch a random quote from the database
➕ **Add Quotes** - Add your own quotes with an author and category
🎨 **Modern UI** - Beautiful gradient design with smooth animations

---

## Setup Instructions

### Prerequisites
- **Node.js** (v14+) - [Download here](https://nodejs.org/)
- **.NET 9 SDK** - [Download here](https://dotnet.microsoft.com/download)
- **Git** - [Download here](https://git-scm.com/)

### Step 1: Clone the Repository
```bash
git clone <your-repo-url>
cd MIDTERM_A3_32E1_Mendoza_Jerome-main
```

### Step 2: Install Frontend Dependencies
```bash
npm install
```

### Step 3: Start the Backend API
Open a **new terminal** and run:
```bash
cd val-api
dotnet run
```
✅ The API will start on `http://localhost:5281`

### Step 4: Start the Frontend App
In the original terminal, run:
```bash
npm run dev
```
✅ The React app will start on `http://localhost:5173`

---

## How to Use the App

### 1. **View All Quotes**
- Open `http://localhost:5173` in your browser
- You'll see a random quote displayed with its author and category
- All existing quotes are loaded when the page starts

### 2. **Filter by Category**
- Click the category buttons at the top: **Funny** | **Sweet** | **Dark** | **Sarcastic**
- The quote will update to show a random quote from that category
- Click **All** to see quotes from all categories

### 3. **Get a New Random Quote**
- Click the **"Get Another Quote"** button below the quote
- A new random quote will be generated and displayed
- This also respects the currently selected category

### 4. **Add a New Quote**
- Click the **"Add Quote"** link in the navigation
- Fill in:
  - **Quote Text**: The actual quote
  - **Author**: Who said it
  - **Category**: Choose from (sweet, funny, dark, sarcastic)
- Click **"Add Quote"** to submit
- You'll be redirected to the home page and can see your new quote!

---

## API Endpoints

If you want to test the API directly using Swagger or curl:

### 1. **Get All Quotes**
```
GET http://localhost:5281/Quotes
```
Returns all quotes in JSON format

### 2. **Get Quotes by Category**
```
GET http://localhost:5281/Quotes?category=funny
```
Replace `funny` with: `sweet`, `dark`, or `sarcastic`

### 3. **Get a Random Quote**
```
GET http://localhost:5281/Quotes/random
```
Returns a single random quote

### 4. **Add a New Quote**
```
POST http://localhost:5281/Quotes
Content-Type: application/json

{
  "text": "Your quote here",
  "author": "Author name",
  "category": "funny"
}
```

### 5. **View API Documentation**
Open `http://localhost:5281/swagger/index.html` in your browser to test API endpoints interactively.

---

## Troubleshooting

### Issue: "Port 5281 already in use"
**Solution**: Another app is using that port. Kill it with:
```bash
netstat -ano | findstr :5281
taskkill /PID <PID> /F
```

### Issue: "npm: command not found"
**Solution**: Install Node.js from https://nodejs.org/

### Issue: "dotnet: command not found"
**Solution**: Install .NET 9 SDK from https://dotnet.microsoft.com/download

### Issue: Quotes not loading in the app
**Solution**: 
1. Make sure the API is running (`http://localhost:5281/Quotes` should return quotes)
2. Check that both apps are running in separate terminals
3. Check the browser console (F12) for error messages

### Issue: Can't add quotes
**Solution**: 
1. Make sure the category is spelled correctly (lowercase: sweet, funny, dark, sarcastic)
2. Check that both API and React app are running
3. Look at the browser console for error messages

---

## Project Structure

```
MIDTERM_A3_32E1_Mendoza_Jerome-main/
├── src/                          # React Frontend
│   ├── pages/
│   │   ├── Home.jsx             # Main quote display page
│   │   └── AddQuote.jsx         # Add new quote form
│   ├── components/
│   │   ├── QuoteCard.jsx        # Quote display component
│   │   ├── FilterBar.jsx        # Category filter buttons
│   │   └── Navbar.jsx           # Navigation menu
│   ├── api/
│   │   └── quoteService.js      # API calls to backend
│   ├── App.jsx                  # Main app component
│   └── App.css                  # Styling
├── val-api/                      # C# .NET Backend API
│   ├── Controllers/
│   │   └── QuotesController.cs  # API endpoints
│   ├── Data/
│   │   ├── AppDbContext.cs      # Database context
│   │   ├── Quote.cs            # Quote model
│   │   └── Category.cs         # Category model
│   ├── Models/
│   │   └── QuoteDtos.cs        # Data transfer objects
│   └── Program.cs              # API configuration
├── db.json                      # Database (SQLite)
└── package.json                 # Frontend dependencies
```

---

## Technologies Used

**Frontend:**
- React 19 - UI framework
- Vite - Build tool and dev server
- React Router - Navigation

**Backend:**
- .NET 9 - Framework
- Entity Framework Core - ORM for database
- SQLite - Database
- Swashbuckle - Swagger UI for API docs

---

## Tips & Best Practices

📝 **When adding quotes:**
- Use meaningful, interesting quotes
- Always provide an author
- Choose the most fitting category
- Avoid duplicates

🔄 **Testing the API:**
- Use Swagger UI at `http://localhost:5281/swagger/index.html`
- Or use PowerShell: `Invoke-WebRequest -Uri "http://localhost:5281/Quotes" -Method Get`

🎨 **Customizing the app:**
- Edit `src/App.css` to change colors and styling
- Add new categories by modifying the database migrations
- Add new features in the respective React components

---

## Support

If something isn't working:
1. Check the browser console (F12) for JavaScript errors
2. Check the terminal running the API for errors
3. Make sure both frontend and backend are running
4. Restart both applications

Good luck! Enjoy the Random Quote Generator! 🚀
