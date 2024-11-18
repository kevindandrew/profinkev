import React from 'react';

const Header = () => (
  <header className="text-center py-8 border-b-4 border-newspaper-border mb-8">
    <h1 className="text-6xl font-bold uppercase tracking-wider">
      Daily Planet
    </h1>
    <p className="italic text-gray-700">Your Trusted Source for Daily News</p>
    <div className="text-gray-600 text-sm mt-2">
       {new Date().toLocaleDateString()}
    </div>
  </header>
);

export default Header;
