import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub, FaTiktok } from "react-icons/fa";
import { FiUpload, FiSend } from "react-icons/fi"; 
import { FaRegCommentDots } from "react-icons/fa";  

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

  // Feedback states
  const [feedbacks, setFeedbacks] = useState([]);
  const [feedbackName, setFeedbackName] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackImage, setFeedbackImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

@@ -30,6 +39,38 @@ const Contact = () => {
      );
  };

  // Handle Feedback Submit
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();

    if (!feedbackName || !feedbackMessage) return;

    const newFeedback = {
      id: Date.now(),
      name: feedbackName,
      message: feedbackMessage,
      image: previewImage, // base64 preview image
    };

    setFeedbacks([newFeedback, ...feedbacks]); // add new on top
    setFeedbackName("");
    setFeedbackMessage("");
    setFeedbackImage(null);
    setPreviewImage(null);
  };

  // Image Preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFeedbackImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreviewImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <section
      id="contact"
@@ -38,69 +79,166 @@ const Contact = () => {
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wide animate-fadeInUp">
          Get in Touch
          Get in Touch & Feedback
        </h2>
        <p className="text-gray-400 mt-4 text-lg sm:text-xl max-w-2xl mx-auto animate-fadeInUp delay-100">
          Reach out for collaborations, freelance work, or just to say hi! I’m always open to connecting with new people.
          Reach out for collaborations, freelance work, or share your feedback! 🚀
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-lg mx-auto bg-gradient-to-tr from-[#1a172d] to-[#0f0d21] p-8 rounded-3xl shadow-2xl border border-gray-700 transform transition duration-500 hover:scale-105">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-5">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-xl bg-gray-900 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-xl bg-gray-900 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-4 rounded-xl bg-gray-900 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            required
            className="w-full p-4 rounded-xl bg-gray-900 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-3 rounded-xl hover:scale-105 transition transform"
          >
            Send Message
          </button>
        </form>

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center space-x-6">
          <a href="https://www.facebook.com/h.aroldparas29/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition text-2xl">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/in/harold-florence-paras/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition text-2xl">
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com/rold.ig/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition text-2xl">
            <FaInstagram />
          </a>
          <a href="https://github.com/haroldparas" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition text-2xl">
            <FaGithub />
          </a>
          <a href="https://www.tiktok.com/@h_aroldparas" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition text-2xl">
            <FaTiktok />
          </a>
      {/* Forms Container */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-gradient-to-tr from-[#1a172d] to-[#0f0d21] p-8 rounded-3xl shadow-2xl border border-gray-700 transform transition duration-500 hover:scale-105">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-5">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-xl bg-gray-900 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-xl bg-gray-900 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-4 rounded-xl bg-gray-900 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              required
              className="w-full p-4 rounded-xl bg-gray-900 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 
                        text-white font-bold py-3 rounded-xl hover:scale-105 transition transform"
            >
              <FiSend className="text-lg group-hover:translate-x-1 transition-transform" />
              Send Message
            </button>
          </form>

          {/* Social Media Links */}
          <div className="mt-8 flex justify-center space-x-6">
            <a href="https://www.facebook.com/h.aroldparas29/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition text-2xl">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/in/harold-florence-paras/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition text-2xl">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/rold.ig/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition text-2xl">
              <FaInstagram />
            </a>
            <a href="https://github.com/haroldparas" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition text-2xl">
              <FaGithub />
            </a>
            <a href="https://www.tiktok.com/@h_aroldparas" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition text-2xl">
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="bg-gradient-to-tr from-[#1a172d] to-[#0f0d21] p-8 rounded-3xl shadow-2xl border border-gray-700 transform transition duration-500 hover:scale-105">
          <form onSubmit={handleFeedbackSubmit} className="flex flex-col space-y-5">
            <input
              type="text"
              placeholder="Enter Your Name"
              value={feedbackName}
              onChange={(e) => setFeedbackName(e.target.value)}
              required
              className="w-full p-4 rounded-xl bg-gray-900 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
            <textarea
              placeholder="Your Feedback"
              rows="4"
              value={feedbackMessage}
              onChange={(e) => setFeedbackMessage(e.target.value)}
              required
              className="w-full p-4 rounded-xl bg-gray-900 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 transition resize-none"
            />
            
            {/* Stylish File Upload Button */}
            <div>
              <input
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                id="fileInput"
                onChange={handleImageChange}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => document.getElementById("fileInput").click()}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 to-purple-500 
                          text-white font-sans font-semibold tracking-wide uppercase py-3 px-4 rounded-xl 
                          hover:scale-105 transition transform shadow-md"
              >
                <FiUpload className="text-lg" />
                Choose Profile Photo
              </button>
            </div>
            {previewImage && (
              <img
                src={previewImage}
                alt="preview"
                className="w-20 h-20 object-cover rounded-full mt-3 border-2 border-purple-500 shadow-lg"
              />
            )}

            <button
              type="submit"
              className="bg-gradient-to-r from-pink-600 to-purple-500 text-white font-bold py-3 rounded-xl hover:scale-105 transition transform flex items-center justify-center gap-2"
            >
              <FaRegCommentDots className="text-lg" />
              Post Feedback
            </button>
          </form>

          {/* Feedback List (Stylish Slider) */}
          <div className="mt-8 max-h-64 overflow-y-auto pr-2 scroll-smooth 
                          scrollbar-thin scrollbar-thumb-gradient scrollbar-track-transparent 
                          rounded-2xl bg-black/30 backdrop-blur-md shadow-inner p-2 space-y-4">
            {feedbacks.length === 0 ? (
              <p className="text-gray-400 text-center">No feedback yet. Be the first!</p>
            ) : (
              feedbacks.map((fb) => (
                <div
                  key={fb.id}
                  className="flex items-start space-x-4 bg-gray-900/70 p-4 rounded-xl border border-gray-700 
                             hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/30 
                             transition transform hover:scale-[1.02] animate-fadeInUp"
                >
                  {fb.image ? (
                    <img
                      src={fb.image}
                      alt={fb.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-purple-500 shadow-md"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-purple-700 flex items-center justify-center text-white font-bold shadow-md">
                      {fb.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="text-white font-bold">{fb.name}</h4>
                    <p className="text-gray-300">{fb.message}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

@@ -136,6 +274,14 @@ const Contact = () => {
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-scaleUp { animation: scaleUp 0.3s ease-out forwards; }

        /* Gradient Scrollbar */
        .scrollbar-thin::-webkit-scrollbar { width: 6px; }
        .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #ec4899, #8b5cf6);
          border-radius: 9999px;
        }
      `}</style>
    </section>
  );
