/* eslint-disable @next/next/no-img-element */
"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AppContainer from "../components/AppContainer";
import BackgroundChanger from "../components/BgColorChanger";
import Advantages from "../sections/Advantages";
import Benefits from "../sections/Benefits";
import Facilities from "../sections/Facilities";
import Footer from "../sections/Footer";
import Form from "../sections/Form";
import FrequentQuestions from "../sections/FrequentQuestions";
import Header from "../sections/Header";
import Pains from "../sections/Pains";
import Pillars from "../sections/Pillars";
import PortfolioSlider from "../sections/PortfolioSlider";
import Strategy from "../sections/Strategy";
import Testimonials from "../sections/Testimonials";
import DATA from "./data";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <AppContainer>
      <BackgroundChanger color="#192b3f" />
      <Header {...DATA.header} />
      <Pains {...DATA.pains} />
      <BackgroundChanger color="#1A403C" />
      <Benefits {...DATA.benefits} />
      <PortfolioSlider />
      <BackgroundChanger color="#201A40" />
      <Advantages {...DATA.advantages} />
      <Testimonials {...DATA.testimonials} />
      <Strategy {...DATA.strategy} />
      <Pillars {...DATA.pillars} />
      <BackgroundChanger color="#192b3f" />
      <Facilities {...DATA.facilities} />
      <FrequentQuestions {...DATA.faq} />
      <Form />
      <Footer />
    </AppContainer>
  );
};

export default Home;
