// frontend/src/App.jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './features/home/HomePage';
import AboutPage from './features/about/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <header style={{ padding: '1rem', background: '#f8f9fa', borderBottom: '1px solid #ddd' }}>
        <nav>
          <Link to="/" style={{ marginRight: '2rem', textDecoration: 'none' }}>Home</Link>
          <Link to="/about" style={{ textDecoration: 'none' }}>About Us</Link> {/* Task 2 */}
        </nav>
      </header>

      <main style={{ padding: '1.5rem' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;