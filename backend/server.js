require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Environment variables
const MONGODB_URI = process.env.MONGODB_URI 
const PORT = process.env.PORT || 3000;

// MongoDB Connection
mongoose.connect(MONGODB_URI)
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Simple User Schema - no unique constraint, no validation
const userSchema = new mongoose.Schema({
  sjsuId: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);

// Simple Signup endpoint - just save everything
app.post('/api/signup', async (req, res) => {
  try {
    console.log('Received signup request:', req.body);
    
    const { sjsuId, password } = req.body;

    if (!sjsuId || !password) {
      console.log('Missing sjsuId or password');
      return res.status(400).json({ 
        success: false,
        message: 'SJSU ID and password are required' 
      });
    }

    console.log('Creating user with SJSU ID:', sjsuId);

    // Create and save new user
    const newUser = new User({
      sjsuId,
      password
    });

    await newUser.save();
    console.log('User saved successfully! ID:', newUser._id);

    // Return success response
    res.status(201).json({
      success: true,
      message: 'Account created successfully',
      data: {
        id: newUser._id,
        sjsuId: newUser.sjsuId,
        createdAt: newUser.createdAt
      }
    });

  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Server error during signup',
      error: error.message
    });
  }
});

// Get all users endpoint (for testing)
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    console.log('Total users in database:', users.length);
    res.json({ 
      success: true, 
      count: users.length,
      data: users 
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error fetching users' 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;