import React from "react";
import Header from "./components/header/Header";
import Need from "./components/needs/Need";

import "./App.css"
import Services from "./components/services/Services";
import Offers from "./components/offers/Offers";
import Safety from "./components/safety/Safety";
import Faqs from "./components/faqs/Faqs";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";



function App() {
  return (
    <div className= "App">
      <Header />
      <Services />
      <Need />
      <Offers />
      <Safety />
      <Faqs />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
