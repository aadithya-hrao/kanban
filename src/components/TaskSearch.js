import React, { useState } from 'react';

const TaskSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="task-search">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search tasks"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default TaskSearch;
