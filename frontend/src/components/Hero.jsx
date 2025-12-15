import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = ({ userData }) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white px-4">
      <div className="max-w-4xl text-center space-y-6">
        {userData?.avatar && (
          <img 
            src={userData.avatar} 
            alt={userData.name}
            className="w-32 h-32 rounded-full mx-auto border-4 border-purple-500 object-cover"
          />
        )}
        <h1 className="text-5xl md:text-7xl font-bold">
          {userData?.name || 'Your Name'}
        </h1>
        <p className="text-xl md:text-2xl text-purple-300">
          {userData?.title || 'Full Stack Developer'}
        </p>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          {userData?.bio || 'Passionate about creating beautiful and functional web applications'}
        </p>
        <div className="flex gap-4 justify-center mt-8">
          {userData?.social?.github && (
            <a href={userData.social.github} target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-purple-600 rounded-full hover:bg-purple-700 transition">
              <Github size={24} />
            </a>
          )}
          {userData?.social?.linkedin && (
            <a href={userData.social.linkedin} target="_blank" rel="noopener noreferrer"
               className="p-3 bg-purple-600 rounded-full hover:bg-purple-700 transition">
              <Linkedin size={24} />
            </a>
          )}
          <a href="#contact" className="p-3 bg-purple-600 rounded-full hover:bg-purple-700 transition">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;