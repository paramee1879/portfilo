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

  const defaultSkills = [
    { name: 'Adobe Photoshop', level: 95 },
    { name: 'Adobe Illustrator', level: 90 },
    { name: 'Figma', level: 88 },
    { name: 'UI/UX Design', level: 92 }
  ];

  const displaySkills = skills.length > 0 ? skills : defaultSkills;

  return (
    <section id="skills" className="py-32 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-orange-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My technical expertise and creative skills that drive exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {displaySkills.map((skill, index) => (
            <div key={index} className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white font-semibold text-lg">{skill.name}</span>
                <span className="text-orange-500 font-bold text-lg">{skill.level}%</span>
              </div>
              <div className="relative w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">I Am Available For Freelancer!</p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {['Photoshop', 'Illustrator', 'InDesign', 'After Effects', 'Premiere Pro', 'Figma', 'Sketch', 'XD'].map(skill => (
              <span key={skill} className="px-6 py-3 bg-gray-800 hover:bg-orange-500 border border-gray-700 hover:border-orange-500 rounded-lg text-sm font-semibold transition cursor-pointer">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;