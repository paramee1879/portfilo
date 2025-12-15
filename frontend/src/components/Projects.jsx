import { useState, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { API_URL } from '../config/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/projects`)
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-800 text-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project._id} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition">
              <img 
                src={project.image || 'https://via.placeholder.com/400x250'} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-purple-600 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.links?.live && (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-1 text-purple-400 hover:text-purple-300">
                      <ExternalLink size={16} /> Live
                    </a>
                  )}
                  {project.links?.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-1 text-purple-400 hover:text-purple-300">
                      <Github size={16} /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;