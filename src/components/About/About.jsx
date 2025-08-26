import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImage from '../../assets/profile2.png';

const About = () => {
  // Shared typing effect settings for greetings
  const typingSettings = {
    speed: 100,
    eraseSpeed: 50,
    typingDelay: 500,
    eraseDelay: 2000,
  };

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans mt-16 md:mt-24 lg:mt-13"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        
        {/* === LEFT SIDE === */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          
          {/* Greeting Typing Effect */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            <ReactTypingEffect
              text={['Ni Hao,', 'Hello,', 'Hi,', 'Hola,', 'Bonjour,', 'Konnichiwa,']}
              {...typingSettings}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
              displayTextRenderer={(text) => (
                <span className="text-[#8245ec] italic">{text}</span>
              )}
            /> I am
          </h1>
          
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white mb-4 leading-tight tracking-wide">
            Harold Paras
          </h2>

          {/* About Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-6 mt-4 leading-relaxed">
            an aspiring Full Stack Developer and a Bachelor of Science In Computer Science graduate from Tarlac State University. 
            I’m currently working as an IT Staff at Royce Hotel and Casino. 
            I have a solid foundation in both front-end and back-end development, 
            and I’m passionate about creating efficient, user-friendly web applications.
          </p>

          {/* Download CV Button + Social Icons */}
          <div className="flex items-center space-x-4 mt-5">
            <a
              href="https://drive.google.com/file/d/1jdMr23dkteeXHXmTC8zqJLTYsEQwF0d3/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-2xl text-lg font-bold transition duration-300 transform hover:scale-105"
              style={{
                background: 'linear-gradient(90deg, #8245ec, #3e3942ff)',
              }}
            >
              Download CV
            </a>

            {/* Social Icons */}
            <a
              href="https://github.com/haroldparas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#8245ec] transition"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/harold-florence-paras/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#8245ec] transition"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>

        {/* === RIGHT SIDE === */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[28rem] md:h-[28rem] rounded-full"
            tiltMaxAngleX={0}
            tiltMaxAngleY={0}
            perspective={0}
            scale={1.05}
            transitionSpeed={2000}
            gyroscope={false}
          >
            <img
              src={profileImage}
              alt="Harold Paras"
              className="w-full h-full rounded-full object-cover 
              p-[4px] bg-gradient-to-tr from-[#8245ec] to-[#3e3942] 
              shadow-[0_0_30px_rgba(130,69,236,0.85)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
