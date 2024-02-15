import React from "react";
import { NavLink } from "react-router-dom";

const ServiceInfoNavbar = (): React.ReactElement => {
  return (
    <div className="h-[100px] w-[100%]">
      <div className="flex justify-between items-center pr-4 pl-4 h-full">
        <NavLink to="/" className="h-full flex items-center">
            <img src='https://res.cloudinary.com/dcvvyhf8p/image/upload/v1702912190/Principal%20web%20Nexus/zy49eamfjbcelqqvchqr.png' alt="go-back-icon" width={30} height={30} className="rotate-[210deg]"/>
        </NavLink>

        <NavLink to='/' className="text-2xl font-extrabold">Nexus.</NavLink>
      </div>
    </div>
  );
};

export default ServiceInfoNavbar;
