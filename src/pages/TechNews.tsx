import { useFetchArticles } from '../hooks/useFetchArticles';
import { ArticleCard } from '../components/ArticleCard';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { SavedSummary } from '../types/savedSummary';
import { useEffect, useRef } from 'react';
import '../index.css'

export const TechNews = () => {
  const { articles, fetchMore, loading, hasMore } = useFetchArticles('https://api.spaceflightnewsapi.net/v4/articles/?format=json&title_contains=tech');  
  const [, setSavedSummaries] = useLocalStorage<SavedSummary[]>('saved_summaries', []);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting && !loading && hasMore) {
        fetchMore();
      }
    },
    { threshold: 1 }
  );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, [fetchMore]);

  const handleSave = (summary: SavedSummary) => {
    setSavedSummaries(prev => [...prev, summary]);
  };

  return (
       <main className="container">
        <h1>Science News Summarizer</h1>
        {loading ? <p>Loading...</p> : (
          <div className='article-list'>
            {articles.map(article => (
              <ArticleCard key={`article-${article.id}`} article={article} onSave={handleSave} />
            ))}
            <div ref={sentinelRef}> </div>
          </div>
        )}
      </main>
  );
};