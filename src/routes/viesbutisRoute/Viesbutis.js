import React from "react";
import Header from "../../components/navigacija/Header";
import ViesbutisComponent from "../../components/viesbutis/Viesbutis";
import Galerija from "../../components/galerija/Galerija";
import Footer from "../../components/footer/Footer";

const Viesbutis = () => {
  return (
    <>
      <Header />
      <ViesbutisComponent />
      <Galerija />
      <Footer />
    </>
  );
};

export default Viesbutis;
