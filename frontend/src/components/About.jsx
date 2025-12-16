const About = ({ userData }) => {
  return (
    <section id="about" className="py-32 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-orange-500">About</span> Me
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-orange-500/20 rounded-lg transform rotate-3"></div>
            <div className="relative border-4 border-orange-500 rounded-lg overflow-hidden">
              <img 
                src={userData?.avatar || 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500'} 
                alt="About"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Hi, I'm <span className="text-orange-500 font-bold">{userData?.name || 'John Doe'}</span>, a passionate graphic designer with over 5 years of experience in creating stunning visual experiences.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I specialize in branding, UI/UX design, and digital illustrations. My goal is to bring your ideas to life through creative and innovative designs that leave a lasting impact.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <p className="text-gray-400 text-sm mb-2">Email</p>
                <p className="text-white font-semibold">{userData?.email || 'john@example.com'}</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <p className="text-gray-400 text-sm mb-2">Phone</p>
                <p className="text-white font-semibold">+1 234 567 890</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <p className="text-gray-400 text-sm mb-2">Location</p>
                <p className="text-white font-semibold">New York, USA</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <p className="text-gray-400 text-sm mb-2">Experience</p>
                <p className="text-white font-semibold">5+ Years</p>
              </div>
            </div>

            <button className="mt-8 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition transform hover:scale-105">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;