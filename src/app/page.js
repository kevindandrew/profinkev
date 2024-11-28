"use client";
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import FilterBar from './components/FilterBar';
import SearchBar from './components/SearchBar';
import NewsCard from './components/NewsCard';
import NewsDetailModal from './components/NewsDetailModal';
import Footer from './components/Footer';
import { fetchNews, fetchCategories } from './services/newsService';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({ language: 'es' });
  const [category, setCategory] = useState('general');
  const [categories, setCategories] = useState([]);
  const [source, setSource] = useState('');

  useEffect(() => {
    const loadNews = async () => {
      setIsLoading(true); 
      try {
        const news = await fetchNews(category, query, filters, source);
        setArticles(news);
      } catch (error) {
        console.error('Error al cargar noticias:', error);
      } finally {
        setIsLoading(false); 
      }
    };
    loadNews();
  }, [query, filters, category, source]);

  useEffect(() => {
    const loadCategories = async () => {
      const categoriesList = await fetchCategories();
      setCategories(categoriesList);
    };
    loadCategories();
  }, []);

  const handleCardClick = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  return (
    <div className="bg-newspaper-bg min-h-screen font-serif text-newspaper-text">
      <Navbar categories={categories} setCategory={setCategory} />
      <Header />
      <div className="container mx-auto p-4 flex items-center">
        <SearchBar setQuery={setQuery} />
        <div className="container mx-auto p-4">
          <FilterBar setFilters={setFilters} setSource={setSource} />
        </div>
      </div>

      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          {category === 'general'
            ? 'Noticias Destacadas'
            : category.charAt(0).toUpperCase() + category.slice(1)}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array(6)
              .fill()
              .map((_, index) => (
                <div key={index} className="skeleton-card">
                  <div className="skeleton-image"></div>
                  <div className="skeleton-text"></div>
                  <div className="skeleton-text short"></div>
                </div>
              ))
          ) : articles.length > 0 ? (
            articles.map((article, index) => (
              <NewsCard
                key={index}
                article={article}
                onCardClick={handleCardClick}
              />
            ))
          ) : (
            <p className="text-center col-span-3">No se encontraron noticias.</p>
          )}
        </div>
      </main>
      <NewsDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        article={selectedArticle}
      />
      <Footer />
    </div>
  );
};

export default Home;
