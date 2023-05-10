import React from "react";
import Header from "../../components/navigacija/Header";
import Hero from "../../components/pradzia-hero/Hero";
import Services from "../../components/teikiamos-paslaugos/Services";
import Pricing from "../../components/kainynas/Pricing";
import Footer from "../../components/footer/Footer";

const Pradzia = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <Footer/>
    </>
  );
};

export default Pradzia;
