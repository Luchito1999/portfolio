import React from 'react';

const technologies = [
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "TailwindCSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
  }
  
];

const TechLogos = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 mt-10">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
        >
          <img src={tech.logo} alt={tech.name} className="w-14 h-14" />
          <span className="text-white text-sm mt-2">{tech.name}</span>
        </div>
      ))}
    </div>
  );
};

export default TechLogos;
