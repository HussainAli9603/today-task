// frontend/src/features/home/HomePage.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/products')
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Cannot reach backend:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div>
      <h1>Welcome to the Shop</h1>

      <section>
        <h2>Top Brands</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {products.map((p) => (
            <li key={p._id} style={{ margin: '0.6rem 0' }}>
              {p.name} – {p.brand} – ${p.price}
            </li>
          ))}
        </ul>
      </section>

      {/* Task 1: copy/reuse same products list */}
      <section style={{ marginTop: '3rem' }}>
        <h2>Best Sellers</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {products.map((p) => (
            <li key={p._id} style={{ margin: '0.6rem 0' }}>
              {p.name} – {p.brand} – ${p.price}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default HomePage;