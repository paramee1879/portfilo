import { useState, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import { API_URL } from './config/api';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/users/profile`)
      .then(res => (res.ok ? res.json() : null))
      .then(data => {
        console.log('User Data:', data);
        setUserData(data);
      })
      .catch(err => console.error('Failed to fetch user:', err));
  }, []);

  return (
    <AuthProvider>
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <Hero userData={userData} />
        <About userData={userData} />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
        <Footer userData={userData} />
      </div>
    </AuthProvider>
  );
}

export default App;
