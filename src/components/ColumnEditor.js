import React, { useState } from 'react';

const ColumnEditor = ({ addColumn }) => {
  const [columnTitle, setColumnTitle] = useState(''); // State for the new column title

  const handleAddColumn = () => {
    if (columnTitle.trim()) { // Ensure that an empty title isn't submitted
      addColumn(columnTitle); // Call the parent function to add a column
      setColumnTitle(''); // Clear the input after adding the column
    }
  };

  return (
    <div className="column-editor">
      <input
        value={columnTitle}
        onChange={(e) => setColumnTitle(e.target.value)} // Update the state with input value
        placeholder="New Column Title"
      />
      <button onClick={handleAddColumn}>Add Column</button>
    </div>
  );
};

export default ColumnEditor;
