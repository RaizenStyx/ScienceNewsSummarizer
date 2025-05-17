import { useState } from 'react';
import { summarizeText } from '../utils/summarize';
import { motion, AnimatePresence } from 'framer-motion';
import "../index.css";

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
    <main className="ai-playground-container">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="ai-title"
      >
        AI Playground
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="ai-input-group"
      >
      <textarea
      className='ai-textarea'
        rows={8}
        placeholder="Paste your article or text here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <motion.button
        className='ai-button'
        onClick={handleSummarize} 
        disabled={loading}
        whileTap={{ scale: 0.95 }}
        >
        {loading ? 'Summarizing...' : 'Generate Summary'}
      </motion.button>
      </motion.div>

      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="ai-loading"
          >
            ⏳ Summarizing with AI...
          </motion.div>
        )}

        {!loading && summary && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="ai-result"
          >
            {summary}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};
