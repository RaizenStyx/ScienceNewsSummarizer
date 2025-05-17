import {  useState } from 'react';
import type { Article } from '../types/article';

const PAGE_SIZE = 12;

export const useFetchArticles = (endpoint: string) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);


  const fetchMore = async () => {

    if (loading || !hasMore) return;
    setLoading(true);

    const offset = page * PAGE_SIZE;
    const url = `${endpoint}&limit=${PAGE_SIZE}&offset=${offset}`;
    console.log('Fetching from:', url);

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (!data.results || !Array.isArray(data.results)) {
        setHasMore(false);
        return;
      }

      if (data.results.length < PAGE_SIZE) setHasMore(false);

      setArticles(prev => [...prev, ...data.results]);
      setPage(prev => prev + 1);
    } catch (err) {
      console.error('Error fetching articles:', err);
    } finally {
      setLoading(false);
    }
  };

  return { articles, fetchMore, loading, hasMore };
};
