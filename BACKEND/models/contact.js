import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  portfolioOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, "Portfolio owner is required"]
  },

  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: [2, "Name must be at least 2 characters"],
    maxlength: [50, "Name cannot exceed 50 characters"]
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
  },

  subject: {
    type: String,
    required: [true, "Subject is required"],
    trim: true,
    minlength: [3, "Subject must be at least 3 characters"],
    maxlength: [100, "Subject cannot exceed 100 characters"]
  },

  message: {
    type: String,
    required: [true, "Message is required"],
    minlength: [10, "Message must be at least 10 characters"],
    maxlength: [2000, "Message cannot exceed 2000 characters"]
  },

  phone: {
    type: String,
    default: '',
    match: [/^[0-9+\-() ]*$/, "Phone number contains invalid characters"],
    maxlength: [20, "Phone number cannot exceed 20 characters"]
  },

  company: {
    type: String,
    default: '',
    trim: true,
    maxlength: [100, "Company name cannot exceed 100 characters"]
  },

  status: {
    type: String,
    enum: ['new', 'read', 'replied', 'archived'],
    default: 'new'
  },

  replied: {
    type: Boolean,
    default: false
  },

  replyMessage: {
    type: String,
    default: '',
    maxlength: [2000, "Reply message cannot exceed 2000 characters"]
  },

  replyDate: {
    type: Date
  }

}, {
  timestamps: true
});

export default mongoose.model('Contact', contactSchema);
