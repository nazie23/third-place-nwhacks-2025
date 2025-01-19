import mongoose from 'mongoose';

const CafeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, min: 0, max: 5 }
});

export default mongoose.model('Cafe', CafeSchema);
