import { useState, useEffect } from "react";
import { API_URL } from "../config/api";

// Remove /api from API_URL to get the base server URL
const BASE_URL = API_URL.replace("/api", "");

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    fetch(`${API_URL}/projects`)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch projects");
        return res.json();
      })
      .then(data => {
        console.log("Fetched projects:", data);
        setProjects(data);
      })
      .catch(err => console.error("Error fetching projects:", err));
  }, []);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-32 bg-black text-white">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-orange-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["all", "web", "mobile", "desktop", "other"].map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                activeFilter === category
                  ? "bg-orange-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map(project => (
            <div
              key={project._id}
              className="group relative bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden bg-gray-800">
                <img
                  src={`${BASE_URL}/uploads/${project.image}`}   // Load image from backend
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold mb-2 text-orange-500">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                {/* Removed View Project button */}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
