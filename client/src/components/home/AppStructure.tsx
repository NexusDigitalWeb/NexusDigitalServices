import React from "react";
import Navbar from "../Navbar/Navbar";
import HomeComponent from "./HomeComponent";
import ServicesPage from "../services/ServicesPage";
import Questions from "../questions/Questions";
import FomrMail from "../fomr-mail/FomrMail";
import ContactUs from "../contactUs/ContactUs";

const AppStructure = (): React.ReactElement => {
  return (
    <>
      <Navbar />
      <HomeComponent />
      <ServicesPage />
      <Questions />
      <ContactUs/>
      <FomrMail />
    </>
  );
};

export default AppStructure;
