import { useState } from 'react';
import { summarizeText } from '../utils/summarize';

export const AISummary = () => {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    try {
      const result = await summarizeText(inputText);
      setSummary(result);
    } catch (err) {
      console.error(err);
      setSummary('Error generating summary.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container">
      <h1>AI Summary Playground</h1>
      <textarea
        rows={8}
        placeholder="Paste your article or text here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleSummarize} disabled={loading}>
        {loading ? 'Summarizing...' : 'Generate Summary'}
      </button>
      {summary && (
        <div className="summary-box">
          <strong>AI Summary:</strong>
          <p>{summary}</p>
        </div>
      )}
    </main>
  );
};
