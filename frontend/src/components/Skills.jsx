import { useState, useEffect } from 'react';
import { API_URL } from '../config/api';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/skills`)
      .then(res => res.json())
      .then(data => setSkills(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="skills" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-2">SKILL AREA</h2>
          <div className="h-1 w-20 bg-red-500 mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Lorem amet consectetur adipiscing elit. Et querat architecto iusto natrum dignissimos consectetur sit quasi officia nam et.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.length > 0 ? (
            skills.map(skill => (
              <div key={skill._id} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">{skill.name}</span>
                  <span className="text-red-500 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-red-600 to-pink-600 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))
          ) : (
            <>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">WordPress</span>
                  <span className="text-red-500 font-bold">90%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3">
                  <div className="bg-gradient-to-r from-red-600 to-pink-600 h-full rounded-full" style={{ width: '90%' }} />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">OpenCart</span>
                  <span className="text-red-500 font-bold">75%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3">
                  <div className="bg-gradient-to-r from-red-600 to-pink-600 h-full rounded-full" style={{ width: '75%' }} />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Skill Tags */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {['HTML', 'CSS', 'ADOBE PHOTOSHOP', 'BOOTSTRAP', 'JQUERY', 'JAVASCRIPT', 'WORDPRESS', 'META', 'CODEIGNITER', 'OPENCART', 'REACT.JS'].map(tag => (
            <span key={tag} className="px-5 py-2 bg-red-600 hover:bg-red-700 rounded-full text-sm font-semibold transition cursor-pointer">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;