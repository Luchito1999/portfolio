import { useRef } from "react";
import emailjs from "@emailjs/browser";
import './Contact.css'
import planeta from '../assets/planeta.png';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
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
    <section
      id="contact"
      className="min-h-screen bg-black text-white px-6 md:px-20 py-10 flex flex-col md:flex-row items-center justify-center gap-12"
    >
      {/* Formulario */}
      <div className="w-full md:w-1/2 flex justify-center">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full max-w-lg flex flex-col gap-6 bg-gray-900 p-8 rounded-lg shadow-md"
        >
          <h2 className="text-4xl font-bold mb-4 text-center">Contactame</h2>
          <input
            type="text"
            name="user_name"
            placeholder="Tu nombre"
            required
            className="p-4 rounded bg-gray-800 text-white text-lg"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Tu email"
            required
            className="p-4 rounded bg-gray-800 text-white text-lg"
          />
          <textarea
            name="message"
            placeholder="Tu mensaje"
            rows="5"
            required
            className="p-4 rounded bg-gray-800 text-white text-lg"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 p-4 rounded text-white font-bold text-lg transition-all"
          >
            Enviar
          </button>
        </form>
      </div>
      {/* Planeta */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="md:max-w-[500px] animate-spin-slow">
        <img
  src={planeta}
  alt="planeta"
  className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(0,123,255,0.6)]"
/>

        </div>
      </div>
    </section>
  );
};

export default Contact;
