const API_URL = import.meta.env.VITE_API_URL;

console.log('API URL:', API_URL);

// Fetch all quotes
export const getAllQuotes = async () => {
  try {
    console.log('Fetching all quotes from:', API_URL);
    const response = await fetch(API_URL);
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Raw response data:', data);
    
    // JSON Server returns the array directly when fetching /quotes
    return data;
  } catch (error) {
    console.error("Error fetching quotes:", error);
    throw error;
  }
};

// Fetch a random quote
export const getRandomQuote = async () => {
  try {
    console.log('Fetching random quote from:', `${API_URL}/random`);
    const response = await fetch(`${API_URL}/random`);
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Random quote:', data);
    
    return data;
  } catch (error) {
    console.error("Error fetching random quote:", error);
    throw error;
  }
};

// Fetch by category
export const getQuotesByCategory = async (category) => {
  try {
    // Supports json-server filtering via query param
    const url = category === 'all' ? API_URL : `${API_URL}?category=${category}`;
    console.log('Fetching quotes from:', url);
    
    const response = await fetch(url);
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Raw response data for category:', data);
    
    return data;
  } catch (error) {
    console.error("Error fetching quotes by category:", error);
    throw error;
  }
};

// Add new quote
export const addQuote = async (quote) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(quote),
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error("Error adding quote:", error);
    throw error;
  }
};
