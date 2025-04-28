import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, selectedType, setSelectedType }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Pokémon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="">All Types</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
        <option value="psychic">Psychic</option>
        <option value="normal">Normal</option>
        <option value="bug">Bug</option>
        <option value="poison">Poison</option>
        <option value="ground">Ground</option>
        <option value="fairy">Fairy</option>
        <option value="fighting">Fighting</option>
        <option value="rock">Rock</option>
        <option value="ghost">Ghost</option>
        <option value="dragon">Dragon</option>
        <option value="ice">Ice</option>
        <option value="dark">Dark</option>
        <option value="steel">Steel</option>
        <option value="flying">Flying</option>
      </select>
    </div>
  );
};

export default SearchBar;
