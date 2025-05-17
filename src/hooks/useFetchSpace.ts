import { useEffect, useState } from 'react';
import type { Article } from '../types/article';

export const useFetchSpace = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v4/articles?title_contains=space')
      .then(res => res.json())
      .then(data => setArticles(data.results))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return { articles, loading };
};
