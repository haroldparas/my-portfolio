// src/components/Contact/Contact.jsx
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaRegCommentDots } from "react-icons/fa";
import { FiUpload, FiSend } from "react-icons/fi";
import { createClient } from "@supabase/supabase-js";

// --- Feedback image URL helper ---
const SUPABASE_FEEDBACK_BUCKET_URL = `${supabaseUrl}/storage/v1/object/public/feedback-images/`;
const getFeedbackImageUrl = (fileName) => `${SUPABASE_FEEDBACK_BUCKET_URL}${fileName}`;

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

  // Fetch feedbacks on mount
  useEffect(() => {
    const fetchFeedbacks = async () => {
      const { data, error } = await supabase
        .from("feedbacks")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) console.error("Error fetching feedbacks:", error.message);
      else setFeedbacks(data);
    };
    fetchFeedbacks();
  }, []);

  // Send contact email
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_6tnfibi",
        "template_4ptgthx",
        form.current,
        "ebEg0vLujeJH1at2j"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          setTimeout(() => setIsSent(false), 3000);
        },
        () => {
          setIsError(true);
          setTimeout(() => setIsError(false), 3000);
        }
      );
  };

  // Handle feedback submit
  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    if (!feedbackName || !feedbackMessage) return;

    let imageUrl = null;

    if (feedbackImage) {
      const fileExt = feedbackImage.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("feedback-images")
        .upload(fileName, feedbackImage);

      if (uploadError) console.error("Image upload error:", uploadError.message);
      else imageUrl = getFeedbackImageUrl(fileName);
    }

    const { data, error } = await supabase
      .from("feedbacks")
      .insert([{ name: feedbackName, message: feedbackMessage, image_url: imageUrl }])
      .select();

    if (error) {
      console.error("Error saving feedback:", error.message);
      return;
    }

    // Add new feedback to state
    setFeedbacks([{ id: data[0].id, name: feedbackName, message: feedbackMessage, image_url: imageUrl }, ...feedbacks]);

    // Reset form
    setFeedbackName("");
    setFeedbackMessage("");
    setFeedbackImage(null);
    setPreviewImage(null);
  };

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
    <section id="contact" className="relative py-32 px-[10vw] md:px-[7vw] lg:px-[15vw] font-sans bg-gradient-to-b from-[#0b0a14] to-[#1a172d]">
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wide animate-fadeInUp">
          Get in Touch & Feedback
        </h2>
        <p className="text-gray-400 mt-4 text-lg sm:text-xl max-w-2xl mx-auto animate-fadeInUp delay-100">
          Reach out for collaborations, freelance work, or share your feedback! 🚀
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-gradient-to-tr from-[#1a172d] to-[#0f0d21] p-8 rounded-3xl shadow-2xl border border-gray-700 hover:scale-105 transform transition duration-500">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-5">
            <input type="text" name="user_name" placeholder="Your Name" required className="w-full p-4 rounded-xl bg-gray-900 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition" />
            <input type="email" name="user_email" placeholder="Your Email" required className="w-full p-4 rounded-xl bg-gray-900 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition" />
            <input type="text" name="subject" placeholder="Subject" required className="w-full p-4 rounded-xl bg-gray-900 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition" />
            <textarea name="message" placeholder="Message" rows="5" required className="w-full p-4 rounded-xl bg-gray-900 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none" />
            <button type="submit" className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-3 rounded-xl hover:scale-105 transition transform">
              <FiSend className="text-lg" />
              Send Message
            </button>
          </form>
        </div>

        {/* Feedback Form */}
        <div className="bg-gradient-to-tr from-[#1a172d] to-[#0f0d21] p-8 rounded-3xl shadow-2xl border border-gray-700 hover:scale-105 transform transition duration-500">
          <form onSubmit={handleFeedbackSubmit} className="flex flex-col space-y-5">
            <input type="text" placeholder="Enter Your Name" value={feedbackName} onChange={(e) => setFeedbackName(e.target.value)} required className="w-full p-4 rounded-xl bg-gray-900 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 transition" />
            <textarea placeholder="Your Feedback" rows="4" value={feedbackMessage} onChange={(e) => setFeedbackMessage(e.target.value)} required className="w-full p-4 rounded-xl bg-gray-900 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 transition resize-none" />

            <div>
              <input type="file" accept="image/*" id="fileInput" onChange={handleImageChange} className="hidden" />
              <button type="button" onClick={() => document.getElementById("fileInput").click()} className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 to-purple-500 text-white font-semibold py-3 rounded-xl hover:scale-105 transition transform shadow-md">
                <FiUpload className="text-lg" />
                Choose Profile Photo
              </button>
            </div>

            {previewImage && (
              <img src={previewImage} alt="preview" className="w-20 h-20 object-cover rounded-full mt-3 border-2 border-purple-500 shadow-lg" />
            )}

            <button type="submit" className="bg-gradient-to-r from-pink-600 to-purple-500 text-white font-bold py-3 rounded-xl hover:scale-105 transition transform flex items-center justify-center gap-2">
              <FaRegCommentDots className="text-lg" />
              Post Feedback
            </button>
          </form>

          <div className="mt-8 max-h-64 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gradient scrollbar-track-transparent rounded-2xl bg-black/30 backdrop-blur-md shadow-inner p-2 space-y-4">
            {feedbacks.length === 0 ? (
              <p className="text-gray-400 text-center">No feedback yet. Be the first!</p>
            ) : (
              feedbacks.map((fb) => (
                <div key={fb.id} className="flex items-start space-x-4 bg-gray-900/70 p-4 rounded-xl border border-gray-700 hover:border-purple-500 hover:shadow-lg transition transform hover:scale-[1.02]">
                  {fb.image_url ? (
                    <img src={fb.image_url} alt={fb.name} className="w-12 h-12 rounded-full object-cover border-2 border-purple-500 shadow-md" />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-purple-700 flex items-center justify-center text-white font-bold shadow-md">{fb.name.charAt(0)}</div>
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

      {/* Popups */}
      {isSent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-purple-900 text-white p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
            <p>Your email has been successfully sent. I’ll get back to you soon. 😊</p>
          </div>
        </div>
      )}

      {isError && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-red-700 text-white p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-2">Oops!</h3>
            <p>Failed to send your message. Please try again later.</p>
          </div>
        </div>
      )}

      <style jsx>{`
        .animate-fadeInUp { animation: fadeInUp 0.6s forwards; }
        .delay-100 { animation-delay: 0.1s; }
        @keyframes fadeInUp { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }

        .scrollbar-thin::-webkit-scrollbar { width: 6px; }
        .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background: linear-gradient(to bottom, #ec4899, #8b5cf6); border-radius: 9999px; }
      `}</style>
    </section>
  );
};

export default Contact;
