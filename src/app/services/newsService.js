export const fetchNews = async (category, query, filters, source) => {
  const apiKey = '99829a3178d44a0194b9489ae9b536c0';
  const { language } = filters;

  let url = `https://newsapi.org/v2/top-headlines?language=${language}&apiKey=${apiKey}`;

  if (source) {
    url += `&sources=${source}`;
  } else {
    url += `&category=${category}`;
  }

  if (query) {
    url += `&q=${query}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    return data.articles || [];
  } catch (error) {
    console.error('Error en la solicitud a la API:', error);
    return [];
  }
};


export const fetchCategories = async () => {
  return ['general', 'technology', 'sports', 'entertainment', 'health', 'science', 'business'];
};
