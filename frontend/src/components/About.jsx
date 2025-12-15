const About = ({ userData }) => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img 
              src={userData?.avatar || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500'} 
              alt="About"
              className="rounded-2xl shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-5xl font-bold mb-2">ABOUT US</h2>
              <div className="h-1 w-20 bg-red-500" />
            </div>

            <p className="text-gray-400 leading-relaxed">
              I am <span className="text-red-500 font-semibold">{userData?.name || 'Web Designer'}</span> and web developer. Lorem ipsum dolor sit amet consectetur adipiscing elit. Et querat architecto iusto natrum dignissimos consectetur sit quasi officia nam et.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Sed ut perspiciatis unde omnis iste. Quisque actraqum nunc no dolor sit ametaugue. Sed ut perspiciatis unde omnis iste.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <p className="text-gray-500 text-sm">Birthday</p>
                <p className="text-white font-semibold">15 March 1990</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Age</p>
                <p className="text-white font-semibold">27 Years Old</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Website</p>
                <p className="text-white font-semibold">{userData?.social?.website || 'www.example.com'}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Email</p>
                <p className="text-white font-semibold">{userData?.email || 'example@mail.com'}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Degree</p>
                <p className="text-white font-semibold">Master</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Phone</p>
                <p className="text-white font-semibold">+123 456 7890</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">City</p>
                <p className="text-white font-semibold">Colombo, LK</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Language</p>
                <p className="text-white font-semibold">English, Sinhala</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;