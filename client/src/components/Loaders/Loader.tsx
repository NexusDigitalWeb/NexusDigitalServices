import React from "react";

const Loader = (): React.ReactElement => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <img
        src="https://res.cloudinary.com/dcvvyhf8p/image/upload/v1708574042/Principal%20web%20Nexus/xfgw8kzqag5dl5kqkvzc.png"
        width={300}
        height={300}
        alt="spinner"
        className="animate-pulse"
      />
    </div>
  );
};

export default Loader;
