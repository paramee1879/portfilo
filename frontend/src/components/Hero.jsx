import { useEffect, useState } from "react";
import { API_URL } from "../config/api";

const Hero = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/users/public/693f861e9506da0b8941eec9`)
      .then(res => res.json())
      .then(data => setUserData(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-black text-white overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl">
          <div className="space-y-6">
            

            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              <span className="text-gray-500">I'm </span>
              <br />
              <span className="text-white">{userData?.name || "PARAMEE"}</span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                WEB DEVELOPER
              </span>
              <span className="text-orange-500 text-8xl">.</span>
            </h1>

            {/* Buttons */}
            <div className="flex gap-6 pt-8">
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition transform hover:scale-105"
              >
                HIRE ME
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold rounded-lg transition"
              >
                MY WORKS
              </button>
            </div>

            {/* ⭐ Horizontal Social Icons — REMOVED */}
          </div>
        </div>
      </div>

      {/* ⭐ Vertical Social Icons — GitHub + LinkedIn Removed */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 space-y-6 z-50 hidden lg:block">
        <a
          href="#contact"
          className="block w-10 h-10 flex items-center justify-center border border-gray-700 hover:border-orange-500 rounded-full transition"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
