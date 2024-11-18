import React from 'react';

const NewsCard = ({ article, onCardClick }) => {
  return (
    <div
      onClick={() => onCardClick(article)}
      className="cursor-pointer border border-gray-200 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
    >
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{article.title}</h3>
        <p className="text-sm text-gray-600 mt-2">{article.description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
