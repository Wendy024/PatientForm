import React, { useState } from 'react';
import classes from "./Form.module.css"

function HospitalSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className={classes.number}>
      <label>Hospital No</label>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="button" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default HospitalSearch;