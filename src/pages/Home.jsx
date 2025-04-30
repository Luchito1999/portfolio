import { ReactTyped } from "react-typed";
import TechLogos from "../components/TechLogos";
import './Home.css'
import StarBackground from "../components/StarBackground";
import Logos from "../components/Logos/Logos";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub } from "react-icons/fa";
import Projects from "./Projects";
import Contact from "./Contact";
import dedos from '../../src/assets/dedos.png'


{/* Después del Typed */}
<div className="flex gap-6 mt-8 text-4xl text-white">
  <FaHtml5 className="text-orange-500" title="HTML5" />
  <FaCss3Alt className="text-blue-500" title="CSS3" />
  <FaJs className="text-yellow-400" title="JavaScript" />
  <FaReact className="text-cyan-400" title="React" />
  <FaGithub className="text-white" title="GitHub" />
</div>


const Home = () => {
  return (
    <main className="relative">
    <section
      className="h-screen w-full flex flex-col items-center justify-center text-center intro">
      <h1 className="text-6xl md:text-6xl font-bold text-white mb-4 flex items-center gap-2 titulo">
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-20">
</div>
        ¡Hola! soy Luciano <img src={dedos} alt=""/>
      </h1>
      
      <div className="text-xl md:text-2xl text-gray-300">
      <ReactTyped
  strings={["Frontend Developer", "React Developer", "JavaScript Lover"]}
  typeSpeed={40}
  backSpeed={50}
  loop
/>
<TechLogos />
      </div>
    </section>
    {/* Sección de descripción general */}
    <section id="biografia" className="min-h-screen flex items-center justify-center px-8 py-20 desc">
    <div className="max-w-3xl text-center">
      <h3 className="special-gothic-expanded-one-regular dosis">INTRODUCCIÓN</h3>
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 alfa-slab-one-regular">
        Descripción General
      </h2>
      <p className="text-lg md:text-xl text-gray-300 dosis">
      ¡Hola! Soy Gomez Luciano, un apasionado desarrollador web de 25 años. Mi fascinación por las tecnologías me ha llevado a especializarme en lenguajes y herramientas como React, Node.js, JavaScript, HTML y CSS. Me encanta estar en constante aprendizaje y explorar las infinitas posibilidades que ofrecen las nuevas tecnologías, tanto en el ámbito del desarrollo web como en el educativo. Estoy siempre listo para aplicar mis conocimientos en la creación de páginas web y aplicaciones útiles que hagan una diferencia. ¡Gracias por visitar mi portfolio y espero que encuentres algo que te inspire!
      </p>
      <Logos/>
      <StarBackground />
    </div>

  </section>
  <section className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white" id="projects">
    <Projects />
    <Contact/>
  </section>
  </main>
  );
};

export default Home;
