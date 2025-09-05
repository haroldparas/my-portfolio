// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
//import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import pythonLogo from './assets/tech_logo/python.png';
import postgreLogo from './assets/tech_logo/postgre.png';
//import csharpLogo from './assets/tech_logo/csharp.png';
import phpLogo from './assets/tech_logo/php.png';
import laravelLogo from './assets/tech_logo/laravel.png';
//import visualbasicLogo from './assets/tech_logo/visualbasic.png';


// Project Section Logo's
const SUPABASE_BUCKET_URL = "https://hgxuczfammhhiigsvavf.supabase.co/storage/v1/object/public/portfolio-assets/";
export const getProjectImageUrl = (fileName) => `${SUPABASE_BUCKET_URL}${fileName}`;

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      //{ name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Python', logo: pythonLogo },
      //{ name: 'C-Sharp', logo: csharpLogo },
      { name: 'Php', logo: phpLogo },
      { name: 'Laravel', logo: laravelLogo },
      //{ name: 'Visual Basic', logo: visualbasicLogo },
     
    ],
  },
  {
    title: 'Tools',
    skills: [
      //{ name: 'Git', logo: gitLogo },
    ],
  },
];
const bucketName = "portfolio-assets";

const getPublicUrl = (fileName) => {
  if (!fileName) return "";
  return supabase.storage.from(bucketName).getPublicUrl(fileName).publicUrl;
};

export const projects = [
  {
    id: 0,
    title: "Campus Parking Management System",
    description:
      "Developed an automated parking system using YOLOv3 for real-time license plate detection and recognition, Implemented entry/exit monitoring with CCTV, a custom PH license plate dataset, and a web-based interface (Flask, Python, HTML/CSS, PHP) integrated with MySQL for vehicle and system management.",
    image: getProjectImageUrl("parking.png"),
    tags: ["HTML","CSS", "PHP", "Python", "Flask", "MySql"],
    github: "https://github.com/haroldparas/Campus-Parking-Management-System",
    webapp: "",
  },
  {
    id: 1,
    title: "Simple Portfolio",
    description:
      "A personal portfolio website built with HTML, CSS, and JavaScript, featuring a clean design and responsive layout to showcase projects and skills",
    image: getProjectImageUrl("simple_port.png"),
    tags: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/haroldparas/simple-portfolio",
    webapp: "https://haroldparas.github.io/simple-portfolio/",
  },
  {
    id: 2,
    title: "ReactJs Portfolio",
    description:
      "A modern and responsive portfolio website built with React and Vite, styled using Tailwind CSS. It features smooth animations with Framer Motion, typing effects, interactive toast notifications via React-Toastify, and EmailJS integration for seamless contact form functionality. The website is designed with a clean UI, responsive layouts, optimized performance, and integrated Supabase for dynamic content and feedback management, making it an effective platform to showcase projects and skills.",
    image: getProjectImageUrl("react_port.png"),
    tags: ["HTML", "Tailwind/CSS", "Javascript", "ReactJs", "ViteJs"],
    github: "https://github.com/haroldparas/my-portfolio",
    webapp: "https://haroldparas.vercel.app/",
  },
  {
    id: 3,
    title: "LumiCalc",
    description:
      "LumiCalc is a stylish and interactive web calculator built with HTML, CSS, and JavaScript. Designed with a glassmorphic interface and neon accents, it combines functionality with a futuristic aesthetic.",
    image: getProjectImageUrl("lumicalc.png"),
    tags: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/haroldparas/LumiCalc",
    webapp: "https://haroldparas.github.io/LumiCalc/",
    
  },
  {
    id: 4,
    title: "DoneRight",
    description: "DoneRight is a minimalist to-do list app that helps users stay organized with a clean retro-inspired design. It allows you to add, complete, and delete tasks, as well as clear all tasks with a single click. The app features smooth animations, a scrollable task list, and works seamlessly on both desktop and mobile. Built with HTML, CSS, and JavaScript, DoneRight combines simplicity and functionality in one neat package.",
    image: getProjectImageUrl("doneright.png"), // no image
    tags: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/haroldparas/doneright",
    webapp: "https://haroldparas.github.io/doneright/",
  },
  {
    id: 5,
    title: "Coming Soon",
    description: "I’m currently working on exciting projects. Stay tuned!",
    image: getProjectImageUrl("comingsoon.png"), // no image
    tags: [""],
    github: "",
    webapp: "",
  }
  
];
