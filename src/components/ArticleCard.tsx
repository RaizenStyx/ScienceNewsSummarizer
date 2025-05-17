import { useState } from 'react';
import type { Article } from '../types/article';
import { summarizeText } from '../utils/summarize';

interface Props {
  article: Article;
}

export const ArticleCard = ({ article }: Props) => {
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    try {
      const shortSummary = await summarizeText(article.summary);
      setSummary(shortSummary);
    } catch (err) {
      setSummary('Error generating summary.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '1rem',
      width: '300px',
      borderRadius: '6px',
    }}>
      <h2>{article.title}</h2>
      <p><em>{new Date(article.publishedAt).toLocaleDateString()}</em></p>
      <p>{article.summary.slice(0, 150)}...</p>
      <a href={article.url} target="_blank" rel="noreferrer">Read more</a>
      <br />
      <button onClick={handleSummarize} disabled={loading}>
        {loading ? 'Summarizing...' : 'Generate Summary'}
      </button>
      {summary && (
        <div style={{ marginTop: '0.5rem', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '6px' }}>
          <strong>AI Summary:</strong>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
};
