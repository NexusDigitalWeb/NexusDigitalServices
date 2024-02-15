import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getServices } from "./utils/servicesRequest";
import Loader from "./components/Loaders/Loader";
import ServicePage from "./components/services/ServicePage";
import { BrowserRouter } from "react-router-dom";
import AppStructure from "./components/home/AppStructure";

const App = (): React.ReactElement => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getAllServices = async () => {
      const allServices = await getServices();
      if (allServices) setIsLoading(false);
    };
    getAllServices();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<AppStructure />} />
          <Route path="/services/:id" element={<ServicePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
