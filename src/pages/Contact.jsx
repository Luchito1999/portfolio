import { Suspense, useRef } from "react";
import { motion } from "framer-motion"; // 🚀 agregamos esto
import emailjs from "@emailjs/browser";
import './Contact.css';
import {Canvas} from 'react-three-fiber'
import { Planet } from "../components/Planeta/Planet";
import {OrbitControls} from '@react-three/drei'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_1zbodxg",
        "template_jca3rru",
        form.current,
        "QWe_0glVohGUX8RFT"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("¡Mensaje enviado!");
        },
        (error) => {
          console.log(error.text);
          alert("Ups, hubo un error...");
        }
      );
  };

  return (
    <section id="contact">
      {/* Formulario completo */}
      <div className="contact-container">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="form"
        >
          {/* Animamos el p y h2 */}
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            ¡Hablemos!
          </motion.p>

          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Contactame.
          </motion.h2>

          {/* Inputs */}
          <p>Tu nombre.</p>
          <input
            type="text"
            name="user_name"
            placeholder="¿Cuál es tu nombre?"
            required
          />
          <p>Tu e-mail.</p>
          <input
            type="email"
            name="user_email"
            placeholder="¿Cuál es tu e-mail?"
            required
          />
          <p>Tu mensaje.</p>
          <textarea
            name="message"
            placeholder="Escribe aquí tu mensaje"
            rows="5"
            required
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div className="planeta" > 
      <Canvas camera={{ zoom: 1, position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[35, 35, 0]} intensity={0.4}/>
        <pointLight position={[-35, 35, 0]} intensity={0.4}/>
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
        <Planet/>
        </Suspense >
        <OrbitControls/>
      </Canvas>
      </div>
    </section>
    
  );
};

export default Contact;
