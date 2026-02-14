import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddQuoteForm from '../components/AddQuoteForm';
import { addQuote } from '../api/quoteService';

const AddQuote = () => {
  const navigate = useNavigate();

  const handleAddQuote = async (newQuote) => {
    try {
      await addQuote(newQuote);
      alert('Quote added successfully!');
      navigate('/');
    } catch (error) {
      alert('Failed to add quote.');
    }
  };

  return (
    <div className="add-quote-page">
      <AddQuoteForm onAdd={handleAddQuote} />
    </div>
  );
};

export default AddQuote;
