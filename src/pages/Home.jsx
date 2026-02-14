import React, { useState, useEffect } from 'react';
import { getAllQuotes, getQuotesByCategory, getRandomQuote } from '../api/quoteService';
import QuoteCard from '../components/QuoteCard';
import FilterBar from '../components/FilterBar';

const Home = () => {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState(null);
  const [category, setCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Effect: Fetch data when 'category' changes
  useEffect(() => {
    const fetchQuotes = async () => {
      setLoading(true);
      setError(null);
      try {
        let data;
        if (category === 'all') {
          data = await getAllQuotes();
        } else {
          data = await getQuotesByCategory(category);
        }
        
        console.log('Fetched quotes:', data);
        
        // Ensure data is an array
        const quotesArray = Array.isArray(data) ? data : (data.quotes || []);
        console.log('Processed quotes array:', quotesArray);
        
        setQuotes(quotesArray);
        
        // Pick a random quote immediately
        if (quotesArray.length > 0) {
          const randomIndex = Math.floor(Math.random() * quotesArray.length);
          setRandomQuote(quotesArray[randomIndex]);
          console.log('Set random quote:', quotesArray[randomIndex]);
        } else {
          setRandomQuote(null);
        }
      } catch (error) {
        console.error("Failed to fetch quotes", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchQuotes();
  }, [category]);

  const pickRandomQuote = async () => {
    try {
      const quote = await getRandomQuote();
      setRandomQuote(quote);
    } catch (error) {
      console.error("Failed to fetch random quote:", error);
      setError("Failed to fetch random quote");
    }
  };

  return (
    <div className="home-page">
      <FilterBar currentCategory={category} onFilterChange={setCategory} />
      <div className="quote-display-container">
        {loading ? (
          <p>Loading quotes...</p>
        ) : error ? (
          <p className="no-quotes">Error: {error}</p>
        ) : randomQuote ? (
          <>
            <QuoteCard quote={randomQuote} />
            <button className="new-quote-btn" onClick={pickRandomQuote}>
              Get Another Quote
            </button>
          </>
        ) : (
          <p className="no-quotes">No quotes found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
