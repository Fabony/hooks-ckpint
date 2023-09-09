import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleTitleFilterChange = (e) => {
    setTitleFilter(e.target.value);
  };

  const handleRatingFilterChange = (e) => {
    setRatingFilter(e.target.value);
  };

  const applyFilters = () => {
    onFilter({ title: titleFilter, rating: ratingFilter });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={titleFilter}
        onChange={handleTitleFilterChange}
      />
      <input
        type="text"
        placeholder="Filter by rating"
        value={ratingFilter}
        onChange={handleRatingFilterChange}
      />
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
};

export default Filter;
