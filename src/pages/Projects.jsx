import './Projects.css'
import { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'

const projectData = [
  {
    title: "Lucho Store Oficial",
    description: "Página web en donde se pueden realizar ordenes de compra mediante bases de datos externas.",
    image: "../src/assets/ecommerce.PNG",
    github: "https://github.com/Luchito1999/EcommerceReactJS",
    live: "https://luchito1999.github.io/EcommerceReactJS/",
    tags: ["#React", "#Tailwind", "#JavaScript"],
    colors: ["#00f5d4", "#f72585", "#3a86ff"]
  },
  {
    title: "Happy Cook",
    description: "Página web realizada para utilizar funciones de JavaScript, consultar datos, productos, etc.",
    image: "../src/assets/happycook.PNG",
    github: "https://github.com/Luchito1999/HappyCook",
    live: "https://luchito1999.github.io/HappyCook/",
    tags: ["#JavaScript", "#Css"],
    colors: ["#ffd60a", "#48cae4", "#ff6d00"]
  },
  {
    title: "Portfolio Luciano",
    description: "Este portfolio personal donde se enseña el trabajo front-end realizado con Tailwind y React",
    image: "../src/assets/portfolio.PNG",
    github: "https://github.com/otro-repo",
    live: "https://otro-proyecto.com",
    tags: ["#React", "#Tailwind", "#JavaScript"],
    colors: ["#f72585", "#06b6d4", "#3178c6"]
  }
]


function Projects() {
  const tiltRef = useRef([])

  useEffect(() => {
    tiltRef.current.forEach(el => {
      if (el) {
        VanillaTilt.init(el, {
          max: 16,
          speed: 1000,
          glare: true,
          "max-glare": 0.3,
        })
      }
    })
  }, [])

  return (
    <section id="projects" className="h-screen flex flex-col items-center justify-center">
      <div className="max-w-3xl text-center proj">
      <h3 className='dosis'>MIS PROYECTOS</h3>
      <h1 className="text-3xl md:text-4xl font-semibold text-white mb-6 alfa-slab-one-regular">Proyectos</h1>
      <p className="text-lg md:text-xl text-gray-300 dosis">
      Los proyectos que se presentan a continuación muestran mis habilidades y experiencia a través de ejemplos reales de mi trabajo. Cada proyecyo está descrito brevemente e incluye enlaces a los repositorios de código y a las demostraciones en vivo correspondientes, donde se puede ver su funcionamiento, como asi también la manera que fui avanzando en el uso de determinadas tecnologías. Estos proyectos destacan mi capacidad para resolver problemas complejos, trabajar con diversas tecnologías y gestionar proyectos de manera simple y efectiva.
      </p>
      </div>
      <div className="cards-container">
      {projectData.map((project, i) => (
  <div className="card" ref={el => tiltRef.current[i] = el} key={i}>
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="github-popup"
    >
      <img src="../src/assets/github.svg" alt="GitHub" />
    </a>
    <a href={project.live} target="_blank">
      <img src={project.image} alt={project.title} />
    </a>
    <h4>{project.title}</h4>
    <p>{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.tags.map((tag, j) => (
        <span key={j} className="text-sm" style={{ color: project.colors[j] }}>
          {tag}
        </span>
      ))}
    </div>
  </div>
))}


      </div>
    </section>
  )
}

export default Projects
