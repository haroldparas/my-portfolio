// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import pythonLogo from './assets/tech_logo/python.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import phpLogo from './assets/tech_logo/php.png';
import laravelLogo from './assets/tech_logo/laravel.png';
import visualbasicLogo from './assets/tech_logo/visualbasic.png';


// Project Section Logo's
import parkingLogo from './assets/work_logo/parking.png';
import simpleportLogo from './assets/work_logo/simple_port.png';
import reactportLogo from './assets/work_logo/react_port.png';
import calcLogo from './assets/work_logo/calc.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
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
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'Php', logo: phpLogo },
      { name: 'Laravel', logo: laravelLogo },
      { name: 'Visual Basic', logo: visualbasicLogo },
     
    ],
  },
  {
    title: 'Tools',
    skills: [
      //{ name: 'Git', logo: gitLogo },
    ],
  },
];

  export const projects = [
    {
      id: 0,
      title: "Campus Parking Management System with Integrated License Plate Recognition Using YOLO-Based Algorithm",
      description:
        "Developed an automated parking system using YOLOv3 for real-time license plate detection and recognition, Implemented entry/exit monitoring with CCTV, a custom PH license plate dataset, and a web-based interface (Flask, Python, HTML/CSS, PHP) integrated with MySQL for vehicle and system management.",
      image: parkingLogo,
      tags: ["HTM","CSS", "PHP", "Python", "PHP", "Flask"],
      github: "https://github.com/haroldparas/Campus-Parking-Management-System",
      webapp: "",
    },
    {
      id: 1,
      title: "Simple Portfolio",
      description:
        "A personal portfolio website built with HTML, CSS, and JavaScript, featuring a clean design and responsive layout to showcase projects and skills",
      image: simpleportLogo,
      tags: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/haroldparas/simple-portfolio",
      webapp: "https://haroldparas.github.io/simple-portfolio/",
    },
    {
      id: 2,
      title: "ReactJs Portfolio",
      description:
        "A modern and responsive portfolio website built with React and Vite, styled using Tailwind CSS. Features include smooth animations with Framer Motion, typing effects, interactive toast notifications via React-Toastify, and EmailJS integration for seamless contact form functionality. Designed with clean UI, responsive layouts, and optimized performance to showcase projects and skills",
      image: reactportLogo,
      tags: ["HTML", "Tailwind/CSS", "Javascript", "ReactJs", "ViteJs"],
      github: "https://github.com/haroldparas/my-portfolio",
      webapp: "https://haroldparas.vercel.app/",
    },
    {
      id: 3,
      title: "Simple Calcu",
      description:
        "Working digital calculator with a clean UI and all basic math operations, styled with CSS for the modern look and powered by JavaScript for interactivity",
      image: calcLogo,
      tags: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/haroldparas/Simple-Calculator-made-by-Javascript",
      webapp: "https://haroldparas.github.io/Simple-Calculator-made-by-Javascript/",
    },
    {
      id: 4,
      title: "Coming Soon",
      description:
        "I’m currently working on exciting projects. Stay tuned!",
      image: "",
      tags: [""],
      github: "",
      webapp: "",
    },
    {
      id: 5,
      title: "Coming Soon",
      description:
        "I’m currently working on exciting projects. Stay tuned!",
      image: "",
      tags: [""],
      github: "",
      webapp: "",
    },
    {
      id: 6,
      title: "Coming Soon",
      description:
        "I’m currently working on exciting projects. Stay tuned!",
      image: "",
      tags: [""],
      github: "",
      webapp: "",
    },
    {
      id: 7,
      title: "Coming Soon",
      description:
        "I’m currently working on exciting projects. Stay tuned!",
      image: "",
      tags: [""],
      github: "",
      webapp: "",
    },
    {
      iid: 8,
      title: "Coming Soon",
      description:
        "I’m currently working on exciting projects. Stay tuned!",
      image: "",
      tags: [""],
      github: "",
      webapp: "",
    },
  ];  
