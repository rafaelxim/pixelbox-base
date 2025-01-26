"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Advantages from "../sections/Advantages";
import Benefits from "../sections/Benefits";
import Facilities from "../sections/Facilities";
import Footer from "../sections/Footer";
import Form from "../sections/Form";
import FrequentQuestions from "../sections/FrequentQuestions";
import Header from "../sections/Header";
import Pains from "../sections/Pains";
import Pillars from "../sections/Pillars";
import Portfolio from "../sections/Portfolio";
import Strategy from "../sections/Strategy";
import Testimonials from "../sections/Testimonials";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Header />
      <Pains />
      <Benefits />
      <Portfolio />
      <Advantages />
      <Testimonials />
      <Strategy />
      <Pillars />
      <Facilities />
      <FrequentQuestions />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
