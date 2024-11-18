import React from 'react';

const NewsDetailModal = ({ isOpen, onClose, article }) => {
  if (!isOpen || !article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-lg shadow-2xl max-w-5xl w-full max-h-[100vh] overflow-y-auto p-10 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
          onClick={onClose}
        >
          ✖
        </button>
        <h2 className="text-4xl font-bold mb-6">{article.title}</h2>
        {article.urlToImage && (
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-[500px] object-cover rounded mb-8"
          />
        )}
        <p className="text-gray-700 mb-8">
          {article.content || 'No hay más detalles disponibles.'}
        </p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-blue-600 hover:underline text-lg mt-4"
        >
          Leer más en la fuente original
        </a>
      </div>
    </div>
  );
};

export default NewsDetailModal;

