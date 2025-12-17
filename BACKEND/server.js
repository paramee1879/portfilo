import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import userRoutes from './routes/userRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import skillRoutes from './routes/skillRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

const app = express();

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/contact', contactRoutes);

// Serve uploaded images
app.use('/uploads', express.static('uploads'));

// Serve frontend (Vite build)
const frontendPath = path.join(__dirname, 'frontend', 'dist');
app.use(express.static(frontendPath));

// Root route (optional)
app.get('/', (req, res) => {
  res.send('Portfolio backend is running...');
});

// Catch-all route for React Router (Express 5 safe)
app.use((req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// Error handler
app.use((err, req, res, next) => {
  console.error('=== ERROR CAUGHT ===');
  console.error('Message:', err.message);
  console.error('Stack:', err.stack);
  console.error('===================');

  res.status(500).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

// MongoDB + Server start
mongoose.set('bufferCommands', false);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('MongoDB Atlas connected');

    const PORT = process.env.PORT || 8070;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  }
};

startServer();
