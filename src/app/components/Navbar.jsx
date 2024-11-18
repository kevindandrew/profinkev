import React, { useState } from 'react';

const Navbar = ({ categories, setCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <nav className="bg-newspaper-bg py-4 border-b border-gray-700">
      <div className="container mx-auto">
        <div className="flex justify-between items-center md:hidden px-4">
          <h2 className="text-2xl font-bold">Categories</h2>
          <button
            className="text-3xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:justify-center md:space-x-8 mt-4 md:mt-0`}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className="block md:inline-block font-serif text-lg uppercase hover:underline px-4 py-2 md:py-0"
              onClick={() => setCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
