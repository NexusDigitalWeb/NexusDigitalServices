import { getServices } from "../../utils/servicesRequest";
import anime from "animejs";
import React, { useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";
import CardsLoader from "../Loaders/CardsLoader";

export interface Services {
  _id: string;
  title: string;
  description: string;
  photo: string;
}

const handleWaypointToRight = (target: string) => {
  anime({
    targets: target,
    left: 0,
    duration: 1500,
    easing: "easeInOutExpo",
  });
};

const handleWaypointToLeft = (target: string) => {
  anime({
    targets: target,
    right: 8,
    duration: 1500,
    easing: "easeInOutExpo",
  });
};

const ServicesComponent = (): React.ReactElement => {
  const [services, setServices] = useState<Services[]>([
    { _id: "", description: "", photo: "", title: "" },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getAllServices = async () => {
      const servicesRequest = await getServices();
      setServices(servicesRequest);
      setIsLoading(false);
    };
    getAllServices();
  }, []);

  return (
    <div className="h-full w-full p-2 tablet:flex tablet:flex-col tablet:justify-center tablet:items-center">
      <div className="hidden lg:flex">
        <Waypoint
          onEnter={() => handleWaypointToLeft(".window-animation-button")}
        />
      </div>
      <div className="flex flex-col xl:flex-row justify-center items-center xl:grid xl:grid-cols-2 xl:grid-rows-2 xl:gap-x-20 xl:justify-items-center gap-5 lg:p-4">
        {isLoading
          ? services.map((_, index = 5) => <CardsLoader key={index} />)
          : services?.map((item) => (
              <div
                key={item._id}
                className={`flex flex-col justify-center tablet:justify-evenly items-start tablet:items-center p-7 tablet:p-6 h-[322px] w-full mb-10 border-[#191A23] border-b-4 border rounded-[40px] relative right-[1000px] lg:right-[2000px] tablet:h-[330px] tablet:w-[90%] lg:w-[600px] lg:h-full lg:items-start 2xl:w-[750px] window-animation-${item.title.replace(
                  /\s/g,
                  ""
                )}`}
              >
                <div className="hidden lg:flex">
                  <Waypoint
                    onEnter={() =>
                      handleWaypointToRight(
                        `.window-animation-${item.title.replace(/\s/g, "")}`
                      )
                    }
                  />
                </div>
                <h3 className="font-bold text-[26px] text-center bg-[#B9FF66] rounded-[20px] border-[#191A23] border-b-2 tablet-md:border-b-[3px] tablet-md:border-l-[1px] mb-5 tablet:mb-10 tablet:p-2 xl:p-4 xl:text-left">
                  {item.title}
                </h3>
                <div className="flex justify-between items-end w-full tablet:w-[90%] h-[129px] tablet:h-[170px]">
                  <div className="flex items-center gap-3 xl:flex-row tablet:mb-4 lg:mb-2 lg:ml-3">
                    <a href={`/services/${item._id}`}>
                      <img
                        src={
                          "https://res.cloudinary.com/dcvvyhf8p/image/upload/v1702912190/Principal%20web%20Nexus/zy49eamfjbcelqqvchqr.png"
                        }
                        alt="arrow-learn-more"
                        width={250}
                        height={250}
                        className="w-[41px] h-[41px]"
                      />
                    </a>
                    <p className="hidden tablet:flex tablet-md:text-lg">
                      Más info.
                    </p>
                  </div>
                  <div className="mt-4 w-[125px] h-[120px] tablet:w-[180px] tablet:h-[160px] xl:w-[200px] xl:h-[192px]">
                    <img
                      src={item.photo}
                      width={100}
                      height={100}
                      alt={item.photo}
                      className="w-[200px] h-[113px] tablet:w-[210px] tablet:h-[110px] lg:w-[190px] lg:h-[150px]"
                    />
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ServicesComponent;
