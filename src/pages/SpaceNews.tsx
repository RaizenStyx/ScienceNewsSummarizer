import { ArticleCard } from '../components/ArticleCard';
import { useState } from 'react';
import type { SavedSummary } from '../types/savedSummary';
import { useFetchSpace } from '../hooks/useFetchSpace';

export const SpaceNews = () => {
  const { articles, loading } = useFetchSpace(); // modify hook to support topic if needed
  const [savedSummaries, setSavedSummaries] = useState<SavedSummary[]>([]);

  const handleSave = (summary: SavedSummary) => {
    const updated = [...savedSummaries, summary];
    setSavedSummaries(updated);
    localStorage.setItem('savedSummaries', JSON.stringify(updated));
  };

  return (
    <main className="container">
      <h1>Space News</h1>
      {loading ? <p>Loading...</p> : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {articles.map(article => (
            <ArticleCard key={article.id} article={article} onSave={handleSave} />
          ))}
        </div>
      )}
    </main>
  );
};
