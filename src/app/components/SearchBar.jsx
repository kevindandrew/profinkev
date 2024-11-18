import React from 'react';

const SearchBar = ({ setQuery }) => {
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Buscar noticias..."
      className="w-full p-3 mb-10 border border-gray-500 rounded-md bg-newspaper-bg text-newspaper-text placeholder:text-gray-600 font-serif shadow-inner focus:outline-none focus:border-black"
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
