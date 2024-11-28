import React from 'react';

const Header = () => (
  <header className="text-newspaper-bg bg-newspaper-text text-center py-8 border-b-4 border-newspaper-border mb-8">
    <h1 className="text-6xl font-bold uppercase tracking-wider">
      Daily Planet
    </h1>
    <p className="italic text-newspaper-bg">Your Trusted Source for Daily News</p>
    <div className="text-newspaper-bg text-sm mt-2">
       {new Date().toLocaleDateString()}
    </div>
  </header>
);

export default Header;
