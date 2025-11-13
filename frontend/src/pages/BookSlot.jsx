import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../api/axios';
import '../App.css';

const BookSlot = () => {
  const [locationData, setLocationData] = useState(null);
  const [slots, setSlots] = useState([]);
  const [vehicleType, setVehicleType] = useState('car');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('09:00');
  const [duration, setDuration] = useState(1);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Get locationId from URL query params
  const urlParams = new URLSearchParams(location.search);
  const locationId = urlParams.get('locationId');

  useEffect(() => {
    const fetchData = async () => {
      if (!locationId) {
        setError('No location selected');
        setLoading(false);
        return;
      }

      try {
        // Fetch location details
        const locationResponse = await api.get(`/locations/${locationId}`);
        setLocationData(locationResponse.data.data);

        // Fetch available slots
        const slotsResponse = await api.get(`/slots/location/${locationId}/available?vehicleType=${vehicleType}`);
        setSlots(slotsResponse.data.data);
      } catch (err) {
        setError('Failed to load data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [locationId, vehicleType]);

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
  };

  const handleBookSlot = () => {
    if (!selectedSlot) {
      alert('Please select a slot');
      return;
    }

    if (!vehicleNumber) {
      alert('Please enter your vehicle number');
      return;
    }

    // Navigate to payment page with booking details
    navigate('/payment', {
      state: {
        location: locationData,
        slot: selectedSlot,
        vehicleType,
        vehicleNumber,
        date: selectedDate,
        time: selectedTime,
        duration,
        amount: selectedSlot.pricePerHour * duration
      }
    });
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push(timeString);
      }
    }
    return slots;
  };

  if (loading) {
    return <div className="loading">Loading slots...</div>;
  }

  return (
    <div className="book-slot-page">
      <header className="book-slot-header">
        <h1>Book Parking Slot</h1>
        <button onClick={() => navigate('/dashboard')} className="back-button">
          Back to Dashboard
        </button>
      </header>

      <main className="book-slot-main">
        {error && <div className="error-message">{error}</div>}
        
        {locationData && (
          <div className="location-info">
            <h2>{locationData.name}</h2>
            <p>{locationData.address}</p>
          </div>
        )}

        <div className="booking-form">
          <div className="form-row">
            <div className="form-group">
              <label>Vehicle Type:</label>
              <select 
                value={vehicleType} 
                onChange={(e) => setVehicleType(e.target.value)}
              >
                <option value="car">Car</option>
                <option value="bike">Bike</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Vehicle Number:</label>
              <input
                type="text"
                value={vehicleNumber}
                onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
                placeholder="TN01AB1234"
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Date:</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            
            <div className="form-group">
              <label>Time:</label>
              <select 
                value={selectedTime} 
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                {generateTimeSlots().map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label>Duration (hours):</label>
              <select 
                value={duration} 
                onChange={(e) => setDuration(Number(e.target.value))}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((hrs) => (
                  <option key={hrs} value={hrs}>{hrs} hour{hrs > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="slots-section">
          <h3>Available Slots</h3>
          {slots.length === 0 ? (
            <p>No available slots for the selected vehicle type.</p>
          ) : (
            <div className="slots-grid">
              {slots.map((slot) => (
                <div 
                  key={slot._id} 
                  className={`slot-card ${selectedSlot?._id === slot._id ? 'selected' : ''}`}
                  onClick={() => handleSlotSelect(slot)}
                >
                  <h4>{slot.slotNumber}</h4>
                  <p>Floor: {slot.floor}</p>
                  <p>Price: ₹{slot.pricePerHour}/hr</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {selectedSlot && (
          <div className="booking-summary">
            <h3>Booking Summary</h3>
            <p>Slot: {selectedSlot.slotNumber} ({selectedSlot.floor} Floor)</p>
            <p>Vehicle: {vehicleType} - {vehicleNumber}</p>
            <p>Date: {selectedDate || 'Not selected'}</p>
            <p>Time: {selectedTime}</p>
            <p>Duration: {duration} hour{duration > 1 ? 's' : ''}</p>
            <p className="total-amount">Total Amount: ₹{selectedSlot.pricePerHour * duration}</p>
            <button onClick={handleBookSlot} className="proceed-button">
              Proceed to Payment
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default BookSlot;