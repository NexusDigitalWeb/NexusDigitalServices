import React from "react";
// import GetProposalButton from "../buttons/GetProposalButton";
import anime from "animejs";
import { Waypoint } from "react-waypoint";
import GoToFormButton from "../buttons/GoToFormButton";

const GetProposal = (): React.ReactElement => {
  const handleWaypointToLeft = (target: string) => {
    anime({
      targets: target,
      left: 0,
      duration: 1500,
      easing: "easeInOutExpo",
    });
  };
  return (
    <div className="h-full w-full p-[15px] tablet:p-8 flex justify-center">
      <div className="hidden lg:flex">
        <Waypoint onEnter={() => handleWaypointToLeft(".animation-button")} />
      </div>
      <div className="bg-[#F3F3F3] max-w-[1300px] shadow w-full h-full rounded-[30px] flex flex-col justify-center items-center xl:grid xl:grid-cols-2 xl:justify-items-end p-5 relative left-[1000px] lg:left-[2000px] animation-button tablet:p-6 xl:pl-[60px]">
        <div className="xl:order-2">
          <div className="hidden xl:flex justify-end items-end h-[348px] w-[494px]">
            <img
              src={
                "https://res.cloudinary.com/dcvvyhf8p/image/upload/v1705396943/Principal%20web%20Nexus/Frame_19_jb9u9t.png"
              }
              width={100}
              height={100}
              className="w-[494px] h-[394.98px]"
              alt="lets-make-it"
            />
          </div>
        </div>
        <div className="xl:order-1">
          <h2 className="font-medium text-[26px] tablet:text-center tablet:text-[28px] xl:text-[30px] xl:text-left">
            Dejemos que las cosas pasen.
          </h2>
          <p className="text-left mt-5 tablet:text-lg">
            ¡Contáctanos hoy mismo para descubrir cómo nuestra agencia puede
            ayudarte en tu negocio!
          </p>
          <div className="mt-8 xl:mt-[3rem] flex justify-center">
            <GoToFormButton />
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default GetProposal;
