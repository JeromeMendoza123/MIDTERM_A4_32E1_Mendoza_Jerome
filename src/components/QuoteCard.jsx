import React from 'react';

const QuoteCard = ({ quote }) => {
  return (
    <div className="quote-card">
      <p className="quote-text">"{quote.text}"</p>
      <p className="quote-author">- {quote.author}</p>
      <span className={`category-tag ${quote.category}`}>
        {quote.category}
      </span>
    </div>
  );
};

export default QuoteCard;
