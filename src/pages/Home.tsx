import { useFetchArticles } from '../hooks/useFetchArticles';
import { ArticleCard } from '../components/ArticleCard';

export const Home = () => {
  const { articles, loading } = useFetchArticles();

  return (
    <main style={{ padding: '1rem' }}>
      <h1>Science News Summarizer</h1>
      {loading ? <p>Loading...</p> : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {articles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </main>
  );
};
