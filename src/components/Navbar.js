import { Link } from "react-router-dom";
import "./Navbar.css"; // We'll create this CSS file

function Navbar({ darkMode, toggleTheme }) {
  return (
    <nav className={`navbar ${darkMode ? "navbar-dark" : "navbar-light"}`}>
      {/* Left - App title */}
      <div className="navbar-title">
        <h1>📝 To-Do App</h1>
      </div>

      {/* Center - Links */}
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/completed">Completed</Link>
      </div>

      {/* Right - Toggle button */}
      <div className="navbar-toggle">
        <button onClick={toggleTheme}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
