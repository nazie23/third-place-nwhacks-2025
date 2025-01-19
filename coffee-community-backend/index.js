const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cafesRoutes = require('./routes/cafes');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Use cafes routes
app.use('/api/cafes', cafesRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));