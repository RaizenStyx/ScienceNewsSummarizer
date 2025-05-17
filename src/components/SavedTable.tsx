import type { SavedSummary } from '../types/savedSummary';
import '../index.css'

interface Props {
  summaries: SavedSummary[];
}

export const SavedTable = ({ summaries }: Props) => {
 
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
