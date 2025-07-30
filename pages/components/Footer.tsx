import React, { useState } from 'react'

const termsText = (
  <>
    <h2 className="text-[#e84624] text-lg font-bold mb-2">Términos y Condiciones</h2>
    <p className="text-sm text-gray-300 mb-2">
      Este portafolio tiene fines informativos y promocionales sobre los servicios de diseño, desarrollo frontend y aplicaciones web ofrecidos por MonsterUser. No se realizan transacciones, pagos ni contrataciones directas a través de este sitio. Para solicitar información detallada, presupuestos o contratar un servicio, deberás ponerte en contacto directamente mediante los canales indicados en la sección de contacto.
    </p>
    <p className="text-xs text-gray-400">
      El contenido mostrado es propiedad de MonsterUser. El uso de la información aquí publicada no implica relación contractual directa, salvo acuerdo posterior por escrito.
    </p>
  </>
);

const privacyText = (
  <>
    <h2 className="text-[#e84624] text-lg font-bold mb-2">Política de Privacidad</h2>
    <p className="text-sm text-gray-300 mb-2">
      Este sitio web no recopila datos personales de los visitantes de forma automática, no utiliza cookies ni mecanismos de seguimiento. La única información que puedes proporcionar es a través del formulario de contacto, y será utilizada exclusivamente para responder a tus consultas o solicitudes de información sobre los servicios ofrecidos. No se comparte tu información con terceros.
    </p>
    <p className="text-xs text-gray-400">
      Si tienes dudas sobre cómo se gestionan tus datos, puedes contactarme a través del correo publicado en la sección de contacto.
    </p>
  </>
);

const Footer = () => {
  const [popup, setPopup] = useState<null | 'terms' | 'privacy'>(null);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setPopup(null);
  };

  return (
    <div className='bg-[#000] w-full py-[2rem] relative'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-[2rem]'>
        {/* Left section */}
        <div className='text-start w-[75%] mx-auto text-gray-300'>
          <p className='text-md'>© 2025 MonsterUser. Todos los derechos reservados.</p>
          <p className='text-md mt-2'>Desarrollado con ❤️ por MonsterUser</p>
        </div>
        {/* Right section */}
        <div className='w-[75%] mx-auto text-end text-gray-300 mt-4 flex flex-col items-end gap-2'>
          <button
            onClick={() => setPopup('terms')}
            className="text-sm hover:text-[#e84624] transition-colors duration-200"
            type="button"
          >
            Términos y Condiciones
          </button>
          <button
            onClick={() => setPopup('privacy')}
            className="text-sm hover:text-[#e84624] transition-colors duration-200"
            type="button"
          >
            Política de Privacidad
          </button>
        </div>
      </div>
      {/* Popup modal */}
      {popup && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center"
          onClick={handleBackdropClick}
        >
          <div className="bg-zinc-900 border border-zin-300 rounded-lg shadow-lg p-6 w-[90%] max-w-[370px] relative animate-fade-in">
            <button
              onClick={() => setPopup(null)}
              className="absolute top-2 right-2 text-gray-400 hover:text-[#e84624] text-xl font-bold"
              aria-label="Cerrar"
              type="button"
            >
              ×
            </button>
            {popup === 'terms' ? termsText : privacyText}
          </div>
        </div>
      )}
    </div>
  )
}

export default Footer