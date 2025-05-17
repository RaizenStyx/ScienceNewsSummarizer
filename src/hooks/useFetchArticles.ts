import { useEffect, useState } from 'react';
import type { Article } from '../types/article';

export const useFetchArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch('https://api.spaceflightnewsapi.net/v4/articles');
        const data = await res.json();
        const formatted = data.results.map((item: any) => ({
          id: item.id.toString(),
          title: item.title,
          summary: item.summary,
          publishedAt: item.publishedAt,
          url: item.url,
          imageUrl: item.imageUrl,
          source: 'Spaceflight News',
        }));
        setArticles(formatted);
      } catch (err) {
        console.error('Failed to fetch articles:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return { articles, loading };
};
