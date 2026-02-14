import React, { useState } from 'react';

const AddQuoteForm = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('sweet');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !author) return;

    onAdd({ text, author, category });
    setText('');
    setAuthor('');
    setCategory('sweet');
  };

  return (
    <form className="add-quote-form" onSubmit={handleSubmit}>
      <h3>Add a New Quote</h3>
      <div className="form-group">
        <textarea
          placeholder="Enter quote..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="sweet">Sweet</option>
          <option value="funny">Funny</option>
          <option value="dark">Dark</option>
          <option value="sarcastic">Sarcastic</option>
        </select>
      </div>
      <button type="submit">Add Quote</button>
    </form>
  );
};

export default AddQuoteForm;
