import './Projects.css'
import { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'

function Projects() {
  const tiltRef = useRef([])

  useEffect(() => {
    tiltRef.current.forEach(el => {
      if (el) {
        VanillaTilt.init(el, {
          max: 25,
          speed: 1000,
          glare: true,
          "max-glare": 0.8,
        })
      }
    })
  }, [])

  return (
    <section id="projects" className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-10">Proyectos</h1>
      <div className="cards-container">
        <div className="card" ref={el => tiltRef.current[0] = el}>
          <div className="bolita">JS</div>
          <h4>JavaScript</h4>
          <p>Lenguaje para la web, dinámico y popular.</p>
        </div>
        <div className="card" ref={el => tiltRef.current[1] = el}>
          <div className="bolita">PY</div>
          <h4>Python</h4>
          <p>Lenguaje versátil, ideal para datos e IA.</p>
        </div>
      </div>
      <div>
        
      </div>
    </section>
  )
}

export default Projects
