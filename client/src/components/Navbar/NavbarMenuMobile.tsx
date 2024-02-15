import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

const NavbarMenuMobile = ({ open, set }: { open: boolean, set: Dispatch<SetStateAction<boolean>> }): React.ReactElement => {
  
  // Agrega o remueve las propiedades al cuerpo al cambiar el estado de 'open'
  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      if (open) {
        body.style.position = 'fixed';
        body.style.width = '100%';
        body.style.height = '100%';
      } else {
        body.style.position = '';
        body.style.width = '';
        body.style.height = '';
      }
    }

    // Limpieza al desmontar el componente
    return () => {
      if (body) {
        body.style.position = '';
        body.style.width = '';
        body.style.height = '';
      }
    };
  }, [open]);

  return (
    <div className={`transition-all duration-300 ease-in fixed top-0 left-0 h-screen w-screen flex justify-center bg-[#f2efef] transform ${open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} z-10`}>
        <ul className='flex flex-col justify-center items-center gap-10 text-xl tablet:text-2xl'>
            <a href='#servicesPage' onClick={() => set(false)}>Servicios</a>
            <a href='#frequentQuestions' onClick={() => set(false)}>Preguntas frecuentes</a>
            <a href='#contactUs' onClick={() => set(false)}>Contáctanos</a>
        </ul>
    </div>
  );
}

export default NavbarMenuMobile;
