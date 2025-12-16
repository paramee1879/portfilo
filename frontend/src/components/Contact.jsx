import { useState } from 'react';
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
    <section id="contact" className="py-32 bg-gradient-to-b from-black to-orange-900/20 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-orange-500">Contact</span> me
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-orange-500 outline-none transition text-white placeholder-gray-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-orange-500 outline-none transition text-white placeholder-gray-500"
              />
            </div>
            
            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={e => setFormData({...formData, subject: e.target.value})}
              className="w-full p-4 mb-6 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-orange-500 outline-none transition text-white placeholder-gray-500"
            />
            
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
              rows={6}
              className="w-full p-4 mb-6 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-orange-500 outline-none resize-none transition text-white placeholder-gray-500"
            />
            
            <button 
              onClick={handleSubmit}
              className="w-full md:w-auto px-12 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition transform hover:scale-105 flex items-center justify-center gap-2 mx-auto"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
              SEND MESSAGE
            </button>
            
            {status === 'success' && (
              <p className="text-green-400 text-center mt-6 font-semibold">✓ Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-center mt-6 font-semibold">✗ Failed to send. Please try again.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;