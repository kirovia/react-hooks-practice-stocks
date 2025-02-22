import React, { useState } from "react";

function SearchBar({ allStocks, displayedStocks, setDisplayedStocks }) {

  const [radioButtons, setRadioButtons] = useState('')
  const [filterByType, setFilterByType] = useState('Tech')

  function handleRadioFilter(e) {
    setRadioButtons(e.target.value)
    if (e.target.value === 'Price') {
      const filteredStocks = displayedStocks.sort((a, b) => a.price - b.price)
      setDisplayedStocks([...filteredStocks])
    } else {
      const filteredStocks = displayedStocks.sort((a, b) => {
        if (a.ticker < b.ticker) {
          return -1
        } else if (b.ticker < a.ticker) {
          return 1
        } else {
          return 0
        }
      })
      setDisplayedStocks([...filteredStocks])
    }
  }

  function handleFilterChange(e) {
    setFilterByType(e.target.value)
    const updatedDisplayedStocks = allStocks.filter(stock => stock.type === e.target.value)
    setDisplayedStocks(updatedDisplayedStocks)
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={radioButtons === 'Alphabetically'}
          onChange={handleRadioFilter}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={radioButtons === 'Price'}
          onChange={handleRadioFilter}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
