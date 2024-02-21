import React from "react";
import ContactForm from "./ContactForm";
import { Link } from "react-router-dom";
import anime from "animejs";
import { Waypoint } from "react-waypoint";

const ContactUsForm = (): React.ReactElement => {
  const handleWaypointToLeft = (target: string) => {
    anime({
      targets: target,
      left: 0,
      duration: 1500,
      easing: "easeInOutExpo",
    });
  };
  return (
    <div className="w-full h-full flex flex-col xl:flex-row justify-center xl:mt-8 relative left-[2000px] animation-waypoint-contactForm">
      <div className="flex flex-col w-full xl:h-[350px] justify-center xl:gap-[30%]">
        <div className="xl:w-[80%]">
          <h2 className="mt-8 text-center text-xl font-semibold xl:text-left xl:mt-16 lg:text-2xl xl:text-3xl">
            Contanos sobre tu proyecto
          </h2>
          <p className="mt-2 mb-3 xl:mb-0 text-center xl:text-left xl:text-lg">
            ¿Listo para dar vida a tus proyectos? Completa este formulario y
            observa cómo tus ideas se convierten en una realidad.
          </p>
        </div>

        <div className="flex flex-col items-center w-full mt-7 mb-5 xl:mt-0 xl:mb-0 xl:items-start">
          <Link
            target="_blank"
            to="https://www.instagram.com/nexusdigital.ar/"
            className="flex items-center gap-3 mb-8 w-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              className="w-7 h-7 md:w-9 md:h-9"
              stroke="currentColor"
            >
              <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" />
            </svg>
            <span className="bg-[#b9ff66] rounded-md px-2 xl:text-lg">
              Instagram
            </span>
          </Link>

          <Link
            to="tel:+543329684724"
            className="flex items-center gap-3 mb-8 w-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7 md:w-9 md:h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <span className="bg-[#b9ff66] rounded-md px-2 xl:text-lg">
              +54 3329-684724
            </span>
          </Link>

          <Link
            to="mailto:nexusdigitalcontact@gmail.com"
            className="flex items-center gap-3 w-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7 md:w-9 md:h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <span className="bg-[#b9ff66] rounded-md px-2 xl:text-lg">
              nexusdigitalcontact@gmail.com
            </span>
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex">
        <Waypoint
          onEnter={() =>
            handleWaypointToLeft(".animation-waypoint-contactForm")
          }
        />
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactUsForm;
