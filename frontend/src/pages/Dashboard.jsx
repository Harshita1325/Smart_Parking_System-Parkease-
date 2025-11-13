import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
import '../App.css';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Get user from localStorage
        const userData = JSON.parse(localStorage.getItem('user'));
        if (!userData) {
          navigate('/login');
          return;
        }
        setUser(userData);
        
        // Fetch locations
        const response = await api.get('/locations');
        setLocations(response.data.data);
      } catch (err) {
        setError('Failed to load data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleLocationSelect = (locationId) => {
    navigate(`/book-slot?locationId=${locationId}`);
  };

  if (loading) {
    return <div className="loading">Loading dashboard...</div>;
  }

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <h1>Smart Parking Dashboard</h1>
        <div className="user-info">
          <span>Welcome, {user?.name}!</span>
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      </header>

      <main className="dashboard-main">
        <section className="locations-section">
          <h2>Available Parking Locations</h2>
          
          {error && <div className="error-message">{error}</div>}
          
          <div className="locations-grid">
            {locations.map((location) => (
              <div key={location._id} className="location-card">
                <h3>{location.name}</h3>
                <p>{location.address}</p>
                <p>Type: {location.type}</p>
                <p>Available Slots: {location.availableSlots}/{location.totalSlots}</p>
                <p>
                  Price: ₹{location.pricePerHour.car}/hr (Car) | 
                  ₹{location.pricePerHour.bike}/hr (Bike)
                </p>
                <button 
                  onClick={() => handleLocationSelect(location._id)}
                  className="select-button"
                  disabled={location.availableSlots === 0}
                >
                  {location.availableSlots === 0 ? 'No Slots Available' : 'Select Location'}
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;