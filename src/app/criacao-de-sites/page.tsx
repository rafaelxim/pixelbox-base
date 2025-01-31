"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import WhatsCTA from "../components/WhatsCTA";
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
import DATA from "./data";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Header {...DATA.header} />
      <Pains {...DATA.pains} />
      <Benefits {...DATA.benefits} />
      <Portfolio {...DATA.portfolio} />
      <Advantages {...DATA.advantages} />
      <Testimonials {...DATA.testimonials} />
      <Strategy {...DATA.strategy} />
      <Pillars {...DATA.pillars} />
      <Facilities {...DATA.facilities} />
      <FrequentQuestions {...DATA.faq} />
      <Form />
      <Footer />
      <WhatsCTA />
    </div>
  );
};

export default Home;
