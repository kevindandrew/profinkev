import React from 'react';

const Navbar = ({ categories, setCategory }) => {
  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <nav className="bg-newspaper-bg py-4 border-b border-gray-700">
      <div className="container mx-auto flex justify-center space-x-8">
        {categories.map((category, index) => (
          <button
            key={index}
            className="font-serif text-lg uppercase hover:underline"
            onClick={() => setCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
