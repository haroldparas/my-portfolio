import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub, FaTiktok } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

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

  return (
    <section
      id="contact"
      className="relative py-32 px-[10vw] md:px-[7vw] lg:px-[15vw] font-sans bg-gradient-to-b from-[#0b0a14] to-[#1a172d]"
    >
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wide animate-fadeInUp">
          Get in Touch
        </h2>
        <p className="text-gray-400 mt-4 text-lg sm:text-xl max-w-2xl mx-auto animate-fadeInUp delay-100">
          Reach out for collaborations, freelance work, or just to say hi! I’m always open to connecting with new people.
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
        </div>
      </div>

      {/* Custom Popup */}
      {isSent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-purple-900 text-white p-8 rounded-2xl shadow-2xl animate-scaleUp">
            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
            <p>Your email has been successfully sent. I’ll get back to you soon. 😊</p>
          </div>
        </div>
      )}

      {isError && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-red-700 text-white p-8 rounded-2xl shadow-2xl animate-scaleUp">
            <h3 className="text-2xl font-bold mb-2">Oops!</h3>
            <p>Failed to send your message. Please try again later.</p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.6s forwards; }
        .delay-100 { animation-delay: 0.1s; }

        @keyframes scaleUp {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-scaleUp { animation: scaleUp 0.3s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default Contact;
