import { useEffect, useState } from 'react';
import type { Article } from '../types/article';
import { ArticleCard } from './ArticleCard';

interface Props {
  onSave: (summary: any) => void;
}

export const ArticleList = ({ onSave }: Props) => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await fetch('https://api.spaceflightnewsapi.net/v4/articles');
      const json = await res.json();
      setArticles(json.results);
    };

    fetchArticles();
  }, []);

  return (
    <div>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} onSave={onSave} />
      ))}
    </div>
  );
};
