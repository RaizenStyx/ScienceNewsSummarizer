import { Link } from 'react-router-dom';
import '../index.css'

export const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-brand">🧠 Science Summarizer</div>
    <ul className="navbar-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/tech">Tech News</Link></li>
      <li><Link to="/space">Space News</Link></li>
      <li><Link to="/ai">AI Playground</Link></li>
      <li><Link to="/saved">Saved Summaries</Link></li>
    </ul>
  </nav>
);