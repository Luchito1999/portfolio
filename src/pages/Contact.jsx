import { Suspense, useRef } from "react";
import { motion } from "framer-motion"; 
import emailjs from "@emailjs/browser";
import './Contact.css';
import { Canvas } from '@react-three/fiber'
import { Planet } from "../components/Planeta/Planet";
import { OrbitControls } from '@react-three/drei'

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
      <div className="contact-3d" >
        <Canvas
          camera={{
            position: [0, 0, 4.5], // Estaba en 6 -> lo acercamos
            fov: 50,
          }}
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} />
          <Suspense fallback={null}>
            <Planet scale={2} />
          </Suspense>
          <OrbitControls enableZoom={false}/>
        </Canvas>


      </div>
    </section>

  );
};

export default Contact;
