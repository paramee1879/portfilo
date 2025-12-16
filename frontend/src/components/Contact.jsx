import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { API_URL } from "../config/api";
import { toast } from "react-toastify";

const Contact = () => {
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
    company: ""
  });

  // -----------------------------
  // VALIDATION FUNCTION
  // -----------------------------
  const validate = () => {
    if (!formData.name.trim()) {
      toast.error("Name is required");
      return false;
    }

    if (!formData.email.trim()) {
      toast.error("Email is required");
      return false;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Enter a valid email address");
      return false;
    }

    if (formData.phone && !/^[0-9+\-() ]+$/.test(formData.phone)) {
      toast.error("Phone number is invalid");
      return false;
    }

    if (!formData.subject.trim()) {
      toast.error("Subject is required");
      return false;
    }

    if (!formData.message.trim()) {
      toast.error("Message is required");
      return false;
    }

    if (formData.message.length < 10) {
      toast.error("Message must be at least 10 characters");
      return false;
    }

    return true;
  };

  // -----------------------------
  // SUBMIT HANDLER
  // -----------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    toast.info("Sending message...");

    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          portfolioOwner: user?._id || "693f861e9506da0b8941eec9"
        })
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Message sent successfully");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          phone: "",
          company: ""
        });
      } else {
        toast.error(data.message || "Failed to send message");
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-black to-orange-900/20 text-white">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-orange-500">Contact</span> me
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl p-8 md:p-12">

            {/* Name + Email */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-orange-500 outline-none transition text-white placeholder-gray-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-orange-500 outline-none transition text-white placeholder-gray-500"
              />
            </div>

            {/* Phone + Company */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Phone (optional)"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-orange-500 outline-none transition text-white placeholder-gray-500"
              />

              <input
                type="text"
                placeholder="Company (optional)"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-orange-500 outline-none transition text-white placeholder-gray-500"
              />
            </div>

            {/* Subject */}
            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full p-4 mb-6 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-orange-500 outline-none transition text-white placeholder-gray-500"
            />

            {/* Message */}
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={6}
              className="w-full p-4 mb-6 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-orange-500 outline-none resize-none transition text-white placeholder-gray-500"
            />

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full md:w-auto px-12 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition transform hover:scale-105 flex items-center justify-center gap-2 mx-auto"
            >
              SEND MESSAGE
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
