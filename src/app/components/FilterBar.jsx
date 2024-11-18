import React from 'react';
const supportedLanguages = [
  { code: 'ar', name: 'Arabic' },
  { code: 'de', name: 'German' },
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'he', name: 'Hebrew' },
  { code: 'it', name: 'Italian' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'nl', name: 'Dutch' },
  { code: 'no', name: 'Norwegian' },
  { code: 'pl', name: 'Polish' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'ro', name: 'Romanian' },
  { code: 'ru', name: 'Russian' },
  { code: 'sv', name: 'Swedish' },
  { code: 'tr', name: 'Turkish' },
  { code: 'zh', name: 'Chinese' },
];

const supportedSources = [
  { code: 'bbc-news', name: 'BBC News' },
  { code: 'cnn', name: 'CNN' },
  { code: 'google-news', name: 'Google News' },
  { code: 'reuters', name: 'Reuters' },
  { code: 'the-new-york-times', name: 'The New York Times' },
  { code: 'the-washington-post', name: 'The Washington Post' },
];

const FilterBar = ({ setFilters, setSource }) => (
  <div className="mb-12 flex flex-wrap justify-center gap-8">
    <div className="flex flex-col items-center">
      <label className="font-serif text-lg mb-2">Seleccionar Idioma</label>
      <select
        onChange={(e) => setFilters((prev) => ({ ...prev, language: e.target.value }))}
        className="p-2 bg-newspaper-bg border border-gray-500 rounded-md shadow-inner font-serif text-newspaper-text"
      >
        {supportedLanguages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
    <div className="flex flex-col items-center">
      <label className="font-serif text-lg mb-2">Seleccionar Fuente</label>
      <select
        onChange={(e) => setSource(e.target.value)}
        className="p-2 bg-newspaper-bg border border-gray-500 rounded-md shadow-inner font-serif text-newspaper-text"
      >
        <option value="">Todas las Fuentes</option>
        {supportedSources.map((source) => (
          <option key={source.code} value={source.code}>
            {source.name}
          </option>
        ))}
      </select>
    </div>
  </div>
);

export default FilterBar;
