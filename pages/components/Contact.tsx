import React, { useRef, useState } from 'react'
import { LuMail } from 'react-icons/lu';
import { FaPhoneAlt, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { DiGithubBadge } from 'react-icons/di';
import emailjs from '@emailjs/browser';

// EmailJS config
const SERVICE_ID = 'service_vvupq7k';
const TEMPLATE_ID = 'template_q57ie89';
const PUBLIC_KEY = '3IjPlEd_ZGppW0NrS';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | 'success' | 'error'>(null);

  // EmailJS espera los campos exactamente como en la plantilla: name, message, time
  // user_email es opcional, pero se puede incluir en la template
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    if (!form.current) return;

    // Antes de enviar, actualizar el input hidden "time" para que tenga el valor correcto en cada envío
    const timeInput = form.current.querySelector('input[name="time"]') as HTMLInputElement | null;
    if (timeInput) {
      timeInput.value = new Date().toLocaleString('es-VE', {
        dateStyle: 'short',
        timeStyle: 'short',
        hour12: false
      });
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setResult('success');
        setLoading(false);
        form.current?.reset();
      }, () => {
        setResult('error');
        setLoading(false);
      });
  };

  return (
    <div id="contact" className="bg-zinc-900 md:bg-zinc-800 w-full pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <h1 className='heading'>Contac<span className='text-gray-100'>tame</span></h1>
      <div className='w-[75%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[4rem] mt-[4rem] text-gray-100 '>
        {/* Left section */}
        <div className='flex flex-col justify-center items-start'>
          <h2 className='text-3xl font-semibold mb-2 '>Ponte en contacto</h2>
          <p className='mb-1 text-gray-300 '>Siempre estoy interesado en nuevas oportunidades y proyectos interesantes. Si tienes alguna pregunta o simplemente quieres saludar, ¡no dudes en ponerte en contacto conmigo!</p>
          {/* Email, phone and  location */}
          <div className='flex flex-col justify-start items-start mt-[3rem] '>
            <div className='flex items-center mb-[3rem] '>
              <LuMail className='text-5xl text-[#e84624] '/>
              <div className='flex flex-col ml-2'>
                <h5 className='font-semibold '>Email</h5>
                <p className='text-gray-300'>monsteruser2021@gmail.com</p>
              </div>
            </div>
            <div className='flex items-center mb-[3rem] '>
              <FaPhoneAlt className='text-5xl text-[#e84624] '/>
              <div className='flex flex-col ml-2'>
                <h5 className='font-semibold '>Teléfono</h5>
                <p className='text-gray-300'>+58 0412 633 85 16</p>
              </div>
            </div>
            <div className='flex items-center mb-[3rem] '>
              <FaLocationDot className='text-5xl text-[#e84624] '/>
              <div className='flex flex-col ml-2'>
                <h5 className='font-semibold '>Ubicación</h5>
                <p className='text-gray-300'>Caracas, Venezuela</p>
              </div>
            </div>
          </div>
          {/* Social media links */}
          <h3 className='text-2xl font-semibold mb-2 '>Sígueme</h3>
          <div className='flex justify-start items-center gap-4 mt-4 '>
            <a href="https://github.com/monsteruser2021"
              className='text-[#e27231] hover:text-[#e84624] text-[3.5rem] '>
              <DiGithubBadge/>
            </a>
            <a href=""
              className='text-[#e27231] hover:text-[#e84624] text-[2.5rem] '>
              <FaLinkedin/>
            </a>
            <a href="https://www.instagram.com/monsteruser2021"
              className='text-[#e27231] hover:text-[#e84624] text-[2.5rem] '>
              <FaInstagram/>
            </a>
          </div>
        </div>
        {/* Right section: Contact Form */}
        <div className='flex flex-col justify-center items-start w-full '>
          <form ref={form} onSubmit={sendEmail} className="w-full flex flex-col gap-4 bg-neutral-900 p-6 rounded-lg shadow-md ">
            {/* Campo oculto para "time" que requiere la plantilla */}
            <input
              type="hidden"
              name="time"
              defaultValue={new Date().toLocaleString('es-VE', {
                dateStyle: 'short',
                timeStyle: 'short',
                hour12: false
              })}
            />
            <div className="flex flex-col w-full">
              <label htmlFor="name" className="mb-1 text-gray-200 font-medium">Nombre</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="p-2 rounded bg-zinc-900 border border-zinc-700 text-gray-100 focus:outline-none focus:border-[#e84624] transition-all duration-200"
                placeholder="Tu nombre"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="user_email" className="mb-1 text-gray-200 font-medium">Correo electrónico</label>
              <input
                id="user_email"
                name="user_email"
                type="email"
                required
                className="p-2 rounded bg-zinc-900 border border-zinc-700 text-gray-100 focus:outline-none focus:border-[#e84624] transition-all duration-200"
                placeholder="email@ejemplo.com"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="message" className="mb-1 text-gray-200 font-medium">Mensaje</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="p-2 rounded bg-zinc-900 border border-zinc-700 text-gray-100 focus:outline-none focus:border-[#e84624] transition-all duration-200 resize-none"
                placeholder="Tu mensaje..."
              />
            </div>
            <button
              type="submit"
              className="mt-2 bg-[#e84624] hover:bg-[#e27231] text-white font-semibold py-2 px-6 rounded transition-colors duration-200 disabled:opacity-60"
              disabled={loading}
            >
              {loading ? 'Enviando...' : 'Enviar mensaje'}
            </button>
            {result === 'success' && (
              <p className="text-green-400 mt-2">¡Mensaje enviado con éxito!</p>
            )}
            {result === 'error' && (
              <p className="text-red-400 mt-2">Hubo un error. Intenta de nuevo.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact