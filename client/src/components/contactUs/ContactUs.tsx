import anime from "animejs";
import React from "react";
import { Waypoint } from "react-waypoint";
import ContactUsForm from "./ContactUsForm";

const ContactUs = (): React.ReactElement => {
  const handleWaypointToLeft = (target: string) => {
    anime({
      targets: target,
      left: 0,
      duration: 1000,
      easing: "easeInOutExpo",
    });
  };
  return (
    <div id="contactUs" className="w-full h-full xl:h-screen flex justify-center items-center ">
      <div className="hidden lg:flex">
        <Waypoint
          onEnter={() => handleWaypointToLeft(".animation-waypoint-contact")}
        />
      </div>
      <div className="w-[90%] flex flex-col justify-center items-center xl:items-start">
        <h2 className="bg-[#B9FF66] rounded-[10px] text-[36px] md:text-[40px] text-center mt-10 xl:mt-0 p-1 font-medium relative left-[1000px] lg:left-[2000px] animation-waypoint-contact md:p-3">
          Contactanos
        </h2>
        <ContactUsForm/>
      </div>
    </div>
  );
};

export default ContactUs;
