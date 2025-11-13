import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  const [stats, setStats] = useState({
    locations: 0,
    slots: 0,
    bookings: 0
  });

  const [testimonials] = useState([
    { id: 1, name: "Alex Johnson", text: "Saved me so much time! Found parking in seconds." },
    { id: 2, name: "Maria Garcia", text: "The easiest parking system I've ever used!" },
    { id: 3, name: "David Smith", text: "QR code entry makes everything seamless." }
  ]);

  useEffect(() => {
    // Simulate loading stats
    setTimeout(() => {
      setStats({
        locations: 15,
        slots: 240,
        bookings: 1280
      });
    }, 1000);
  }, []);

  return (
    <div className="home-page">
      <header className="home-header">
        <h1>🚗 Smart Parking Management System</h1>
        <nav className="home-nav">
          <Link to="/login" className="nav-button">Login</Link>
          <Link to="/signup" className="nav-button">Sign Up</Link>
        </nav>
      </header>

      <main className="home-main">
        <section className="hero-section">
          <div className="hero-content">
            <h2>Find & Book Parking Slots in Seconds ⏱️</h2>
            <p>Your smart solution for hassle-free parking</p>
            <div className="hero-buttons">
              <Link to="/signup" className="cta-button primary">Get Started 🚀</Link>
              <Link to="/login" className="cta-button secondary">Learn More ℹ️</Link>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="stats-container">
            <div className="stat-item">
              <h3>{stats.locations}+</h3>
              <p>Locations</p>
            </div>
            <div className="stat-item">
              <h3>{stats.slots}+</h3>
              <p>Parking Slots</p>
            </div>
            <div className="stat-item">
              <h3>{stats.bookings}+</h3>
              <p>Happy Customers</p>
            </div>
          </div>
        </section>

        <section className="info-section">
          <h2>How It Works 🤔</h2>
          <div className="steps">
            <div className="step">
              <div className="step-icon">1️⃣</div>
              <h3>Sign Up</h3>
              <p>Create your account to get started</p>
            </div>
            <div className="step">
              <div className="step-icon">2️⃣</div>
              <h3>Choose Location</h3>
              <p>Select from available parking locations</p>
            </div>
            <div className="step">
              <div className="step-icon">3️⃣</div>
              <h3>Book Slot</h3>
              <p>Pick an available slot and time</p>
            </div>
            <div className="step">
              <div className="step-icon">4️⃣</div>
              <h3>Pay & Park</h3>
              <p>Complete payment and get your QR code</p>
            </div>
          </div>
        </section>

        <section className="features-section">
          <h2>Amazing Features ✨</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⏱️</div>
              <h3>Real-time Availability</h3>
              <p>See live updates of available parking spots</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💳</div>
              <h3>Secure Payments</h3>
              <p>Multiple payment options with top security</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile Friendly</h3>
              <p>Access from any device, anywhere</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🅿️</div>
              <h3>Multiple Locations</h3>
              <p>Park at various convenient locations</p>
            </div>
          </div>
        </section>

        <section className="testimonials-section">
          <h2>What Our Users Say 💬</h2>
          <div className="testimonials-container">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <p>"{testimonial.text}"</p>
                <h4>- {testimonial.name}</h4>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to Simplify Your Parking? 🎯</h2>
          <p>Join thousands of satisfied users today!</p>
          <Link to="/signup" className="cta-button large">Start Parking Now 🚗</Link>
        </section>
      </main>

      <footer className="home-footer">
        <p>&copy; 2025 Smart Parking Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;