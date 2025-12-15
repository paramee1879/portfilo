import { useState } from 'react';
import { Send } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { API_URL } from '../config/api';

const Contact = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          ...formData, 
          portfolioOwner: user?._id || '6785d1234567890abcdef123' 
        })
      });
      
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-800 text-white px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              className="w-full p-3 bg-gray-900 rounded border border-gray-700 focus:border-purple-500 outline-none"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
              className="w-full p-3 bg-gray-900 rounded border border-gray-700 focus:border-purple-500 outline-none"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={e => setFormData({...formData, subject: e.target.value})}
              className="w-full p-3 bg-gray-900 rounded border border-gray-700 focus:border-purple-500 outline-none"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
              rows={5}
              className="w-full p-3 bg-gray-900 rounded border border-gray-700 focus:border-purple-500 outline-none resize-none"
            />
          </div>
          <button 
            onClick={handleSubmit}
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded font-semibold transition flex items-center justify-center gap-2"
          >
            <Send size={20} />
            Send Message
          </button>
          {status === 'success' && (
            <p className="text-green-400 text-center">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;