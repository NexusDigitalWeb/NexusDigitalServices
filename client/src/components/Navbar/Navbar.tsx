import React, { useState } from "react";
import NavbarMenuMobile from "./NavbarMenuMobile";
import { NavLink } from "react-router-dom";

const Navbar = (): React.ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="h-[100px] w-[100%] flex justify-center lg:mt-[15px] scroll-smooth" id="home">
      <div className="flex justify-between pr-4 pl-4 h-full w-[88%]">
        <NavLink to="/" className="h-full flex items-center">
          <p className="text-2xl font-extrabold tablet:text-3xl lg:text-4xl lg:hover:text-[41px] transition-all duration-200 ease-in ">Nexus.</p>
        </NavLink>

        <div className="hidden tablet-md:flex justify-center items-center lg:text-[20px]">
          <ul className="flex gap-5 lg:gap-7">
            <a href="#servicesPage" className="lg:hover:bg-[#B9FF66] lg:p-2 rounded hover:shadow-md transition-all ease-in duration-100">Servicios</a>
            <a href="#frequentQuestions" className="lg:hover:bg-[#B9FF66] lg:p-2 rounded hover:shadow-md transition-all ease-in duration-100">Preguntas frecuentes</a>
            <a href="#contactUs" className="lg:hover:bg-[#B9FF66] lg:p-2 rounded hover:shadow-md transition-all ease-in duration-100">Contáctanos</a>
          </ul>
        </div>

        <button className="w-[20px] tablet-md:hidden" onClick={handleClick}>
          <img
            src="https://res.cloudinary.com/dcvvyhf8p/image/upload/v1702579474/Principal%20web%20Nexus/hbzjkxegujijaeii7ely.png"
            alt="burger-menu-icon"
            width={100}
            height={100}
          />
        </button>
      </div>
      <div className="tablet-md:hidden">
        <NavbarMenuMobile open={isMenuOpen} set={setIsMenuOpen} />
      </div>
    </div>
  );
};

export default Navbar;
