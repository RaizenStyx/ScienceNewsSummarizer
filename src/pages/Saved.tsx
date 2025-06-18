import { useEffect, useState } from 'react';
import { SavedTable } from '../components/SavedTable';
import type { SavedSummary } from '../types/savedSummary';
import { motion } from 'framer-motion';

export const Saved = () => {
  const [summaries, setSummaries] = useState<SavedSummary[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('saved_summaries');
    if (stored) {
      setSummaries(JSON.parse(stored));
    }
  }, []);

  const exportAsJSON = () => {
    const blob = new Blob([JSON.stringify(summaries, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    downloadFile(url, 'summaries.json');
  };

  const exportAsCSV = () => {
    const csv = [
      ['Title', 'Summary', 'URL', 'Notes'],
      ...summaries.map(s => [s.title, s.summary, s.url, s.notes])
    ]
      .map(row => row.map(field => `"${field.replace(/"/g, '""')}"`).join(','))
      .join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    downloadFile(url, 'summaries.csv');
  };

  const downloadFile = (url: string, filename: string) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };
  const clearAll = () => {
    () => setSummaries([]);
    localStorage.removeItem('saved_summaries');
    window.location.reload();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
    <main className="container">
      <h1>Saved Summaries</h1>

      {summaries.length > 0 && (
        <div className="export-buttons">
          <button onClick={exportAsJSON}>Export as JSON</button>
          <button onClick={exportAsCSV}>Export as CSV</button>
          <button style={{background: "red"}} onClick={clearAll}>Clear All</button>
        </div>
      )}

      {summaries.length === 0 ? (
        <p>No summaries saved yet.</p>
      ) : (
        <SavedTable summaries={summaries} />
      )}
    </main>
    </motion.div>
  );
};
