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

  const [errors, setErrors] = useState({});

  // VALIDATION
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Enter a valid email address";
      }
    }

    if (formData.phone && !/^[0-9+\-() ]+$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid";
    }

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // SUBMIT
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
        setErrors({});
      } else {
        toast.error(data.message || "Failed to send message");
      }
    } catch {
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
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-orange-500 outline-none transition text-white placeholder-gray-500"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-orange-500 outline-none transition text-white placeholder-gray-500"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Phone + Company */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <input
                  type="text"
                  placeholder="Phone (optional)"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-orange-500 outline-none transition text-white placeholder-gray-500"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Company (optional)"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-orange-500 outline-none transition text-white placeholder-gray-500"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-orange-500 outline-none transition text-white placeholder-gray-500"
              />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
            </div>

            {/* Message */}
            <div className="mb-6">
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-orange-500 outline-none resize-none transition text-white placeholder-gray-500"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

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
