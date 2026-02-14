# Random Quote Generator - React App

A modern React application that displays random quotes and allows users to add new quotes. The app uses JSON Server for the backend API in development.

## Features

- ✨ Display random quotes
- 🔍 Filter quotes by category (all, sweet, funny, dark, sarcastic)
- ➕ Add new quotes through a user-friendly form
- 🎨 Beautiful gradient UI with responsive design
- 🌐 Integrated with JSON Server for data persistence

## Tech Stack

- **React** 19.2.0 - UI Library
- **React Router DOM** 7.13.0 - Client-side routing
- **Vite** 5.4.1 - Build tool & dev server
- **JSON Server** 1.0.0-beta.5 - Mock backend API

## Project Structure

```
random-quote-app/
├── src/
│   ├── api/
│   │   └── quoteService.js      # API calls
│   ├── components/
│   │   ├── Navbar.jsx            # Navigation
│   │   ├── QuoteCard.jsx          # Quote display
│   │   ├── FilterBar.jsx          # Category filter
│   │   └── AddQuoteForm.jsx       # Form to add quotes
│   ├── pages/
│   │   ├── Home.jsx              # Main page
│   │   └── AddQuote.jsx           # Add quote page
│   ├── App.jsx                    # Root component
│   ├── App.css                    # Styling
│   ├── index.css                  # Global styles
│   └── main.jsx                   # React entry point
├── .env                           # Environment variables
├── db.json                        # Mock database
├── package.json                   # Dependencies
├── vite.config.js                 # Vite configuration
└── index.html                     # HTML entry point
```

## Installation

```bash
npm install
```

## Running the Application

You need to run **two terminals** simultaneously:

### Terminal 1: Start React Development Server

```bash
npm run dev
```

The React app will start on `http://localhost:5173`

### Terminal 2: Start JSON Server (Mock Backend)

```bash
npm run server
```

JSON Server will start on `http://localhost:3000`

## API Endpoints

The API uses the following endpoints (all use the `/quotes` base path):

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/quotes` | Get all quotes |
| GET | `/quotes?category=type` | Filter quotes by category |
| POST | `/quotes` | Add a new quote |

## Quote Object Structure

```json
{
  "id": "1",
  "text": "Quote text here",
  "author": "Author Name",
  "category": "sweet|funny|dark|sarcastic"
}
```

## Environment Variables

Create a `.env` file with:

```
VITE_API_URL=http://localhost:3000/quotes
```

## Available Scripts

- `npm run dev` - Start development server (Vite)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run server` - Start JSON Server

## Features Overview

### Home Page
- Display a random quote
- Filter quotes by category
- Get another random quote button
- Loading state while fetching data

### Add Quote Page
- Form to add new quotes
- Category selection dropdown
- Input validation
- Redirects to home after successful submission

### Categories
- **Sweet** - Inspirational and positive quotes
- **Funny** - Humorous quotes
- **Dark** - Serious and deep quotes
- **Sarcastic** - Sarcastic and witty quotes

## Styling

The app features:
- Gradient purple background
- Card-based UI for quotes
- Responsive design (mobile, tablet, desktop)
- Color-coded category tags
- Smooth transitions and hover effects

## Browser Compatibility

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Author

Created for MIDTERM_A3 assignment

## License

MIT
