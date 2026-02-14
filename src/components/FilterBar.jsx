import React from 'react';

const categories = ['all', 'sweet', 'funny', 'dark', 'sarcastic'];

const FilterBar = ({ currentCategory, onFilterChange }) => {
  return (
    <div className="filter-bar">
      {categories.map((cat) => (
        <button
          key={cat}
          className={currentCategory === cat ? 'active' : ''}
          onClick={() => onFilterChange(cat)}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
