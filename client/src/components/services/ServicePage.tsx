import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Services } from "./ServicesComponent";
import { getServiceById } from "../../utils/servicesRequest";
import anime from "animejs";
import Loader from "../Loaders/Loader";
import { Waypoint } from "react-waypoint";
import ServiceInfoNavbar from "../Navbar/ServiceInfoNavbar";
import BookingsButton from "../buttons/BookingsButton";
import WhatsappButton from "../buttons/WhatsappButton";
import FomrMail from "../fomr-mail/FomrMail";

const ServicePage = (): React.ReactElement => {
  const { id } = useParams();

  const [serviceInfo, setServiceInfo] = useState<Services>({
    _id: "",
    description: "",
    photo: "",
    title: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchService = async () => {
      const service = await getServiceById(`${id}`);
      setServiceInfo(service);
      setIsLoading(false);
    };
    fetchService();
  }, []);

  const handleWaypointToRight = (target: string, duration: number) => {
    anime({
      targets: target,
      left: 0,
      duration: duration,
      easing: "easeInOutExpo",
    });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="">
      <div className="relative z-10 right-[2000px] animation-navbar bg-[#F3F3F3]">
        <Waypoint
          onEnter={() => handleWaypointToRight(".animation-navbar", 1500)}
        />
        <ServiceInfoNavbar />
      </div>

      <div className="h-full w-full">
        <div className="h-full w-full flex flex-col items-center ">
          <h2 className="text-2xl w-full font-bold p-2 text-center bg-[#B9FF66] shadow relative right-[2000px] animation-window-title tablet:p-5 tablet:text-3xl">
            {serviceInfo.title}.
          </h2>
          <Waypoint
            onEnter={() =>
              handleWaypointToRight(".animation-window-title", 2000)
            }
          />
          <p className="mt-10 p-5 relative right-[2000px] animation-window-p tablet:text-xl tablet-md:w-[80%] lg:w-[60%] lg:text-2xl">
            {serviceInfo?.description}
          </p>
          <Waypoint
            onEnter={() =>
              handleWaypointToRight(".animation-window-p", 2500)
            }
          />

          <div className="w-full p-5 flex flex-col items-center relative right-[2000px] animation-window-button mt-10">
            <Waypoint
              onEnter={() =>
                handleWaypointToRight(".animation-window-button", 3000)
              }
            />
            <BookingsButton />
          </div>
        </div>
      </div>
      <div className="fixed bottom-[15px] right-[15px] z-10 lg:bottom-[20px] lg:right-[20px] flex items-center gap-5">
        <WhatsappButton />
      </div>
      <Waypoint onEnter={() => handleWaypointToRight('.animation-window-footer', 3500)} />
      <div className="animation-window-footer relative right-[2000px]">
        <FomrMail />
      </div>
    </div>
  );
};

export default ServicePage;
