const mongoose = require('mongoose');

const slotSchema = new mongoose.Schema({
  locationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location',
    required: [true, 'Location ID is required']
  },
  slotNumber: {
    type: String,
    required: [true, 'Slot number is required'],
    trim: true
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
  vehicleType: {
    type: String,
    required: [true, 'Vehicle type is required'],
    enum: ['car', 'bike']
  },
  pricePerHour: {
    type: Number,
    required: [true, 'Price per hour is required'],
    min: 0
  },
  floor: {
    type: String,
    default: 'Ground'
  },
  isPremium: {
    type: Boolean,
    default: false
  },
  isHandicapped: {
    type: Boolean,
    default: false
  },
  isNearEntrance: {
    type: Boolean,
    default: false
  },
  isNearExit: {
    type: Boolean,
    default: false
  },
  isNearLift: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Compound index to ensure unique slot numbers per location
slotSchema.index({ locationId: 1, slotNumber: 1 }, { unique: true });

module.exports = mongoose.model('Slot', slotSchema);