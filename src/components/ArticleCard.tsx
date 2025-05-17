import { useState } from 'react';
import type { Article } from '../types/article';
import { summarizeText } from '../utils/summarize';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  article: Article;
  onSave: (summary: any) => void;
}

export const ArticleCard = ({ article, onSave }: Props) => {
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [titleInput, setTitleInput] = useState('');
  const [notes, setNotes] = useState('');

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

  const handleSave = () => {
    onSave({
      id: uuidv4(),
      title: titleInput || article.title,
      summary,
      url: article.url,
      notes,
    });
    setTitleInput('');
    setNotes('');
  };

  return (
    <div className="article-card">
      <h2>{article.title}</h2>
      {/* <p><em>{new Date(article.publishedAt).toDateString()}</em></p> */}
      <p>{article.summary.slice(0, 150)}...</p>
      <a href={article.url} target="_blank" rel="noreferrer">Read full article</a>
      <br />
      <button onClick={handleSummarize} disabled={loading}>
        {loading ? 'Summarizing...' : 'Generate Summary'}
      </button>

      {summary && (
        <>
          <div className="summary-box">
            <strong>AI Summary:</strong>
            <p>{summary}</p>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <input
              type="text"
              placeholder="Custom title (optional)"
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
              style={{ width: '100%', marginBottom: '0.5rem' }}
            />
            <textarea
              placeholder="Add personal notes..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              style={{ width: '100%', height: '60px' }}
            />
            <button onClick={handleSave}>Save Summary</button>
          </div>
        </>
      )}
    </div>
  );
};
