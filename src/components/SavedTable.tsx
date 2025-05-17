import type { SavedSummary } from '../types/savedSummary';
import '../index.css'

interface Props {
  summaries: SavedSummary[];
}

export const SavedTable = ({ summaries }: Props) => {
  const exportAsJSON = () => {
    const blob = new Blob([JSON.stringify(summaries, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    downloadFile(url, 'summaries.json');
  };

  const exportAsCSV = () => {
    const headers = ['Title', 'Summary', 'URL', 'Notes'];
    const rows = summaries.map(s =>
      [s.title, s.summary, s.url, s.notes].map(cell => `"${cell.replace(/"/g, '""')}"`).join(',')
    );
    const csvContent = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    downloadFile(url, 'summaries.csv');
  };

  const downloadFile = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ marginTop: '2rem' }}>
    
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Summary</th>
            <th>URL</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {summaries.map((s) => (
            <tr key={s.id}>
              <td>{s.title}</td>
              <td>{s.summary}</td>
              <td>
                <a href={s.url} target="_blank" rel="noreferrer">{s.url}</a>
              </td>
              <td>{s.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
