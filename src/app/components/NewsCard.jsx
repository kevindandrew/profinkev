import React, { useState, useEffect } from 'react';

const NewsCard = ({ article, onCardClick }) => {
  const [isLoading, setIsLoading] = useState(!article); 

  useEffect(() => {
    if (article) {
      setIsLoading(false); 
    }
  }, [article]);

  if (isLoading) {
    return (
      <div className="skeleton-card">
        <div className="skeleton-image"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text short"></div>
      </div>
    );
  }

  return (
    <div
      onClick={() => onCardClick(article)}
      className="cursor-pointer border border-gray-200 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 p-3"
    >
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{article.title}</h3>
        <p className="text-sm text-gray-600 mt-2 description">
          {article.description}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
