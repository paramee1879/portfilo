import { useState, useEffect } from 'react';
import { API_URL } from '../config/api';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/blogs`)
      .then(res => res.json())
      .then(data => setBlogs(data.slice(0, 3)))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="blog" className="py-20 bg-gray-900 text-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map(blog => (
            <div key={blog._id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition">
              {blog.coverImage && (
                <img 
                  src={blog.coverImage} 
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <span className="text-purple-400 text-sm">{blog.category}</span>
                <h3 className="text-xl font-bold my-2">{blog.title}</h3>
                <p className="text-gray-400 mb-4">{blog.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{blog.readTime} min read</span>
                  <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;