// routes/userRoutes.js
import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import {
  register,
  login,
  getProfile,
  updateProfile,
  getPublicProfile
} from '../controllers/userController.js';

const router = express.Router();

// Public route for portfolio owner data
router.get('/public/:id', getPublicProfile);

router.post('/register', register);
router.post('/login', login);

router.route('/profile')
  .get(protect, getProfile)
  .put(protect, updateProfile);

export default router;
