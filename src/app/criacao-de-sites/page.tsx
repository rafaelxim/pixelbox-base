import Advantages from "../sections/Advantages";
import Benefits from "../sections/Benefits";
import Facilities from "../sections/Facilities";
import FrequentQuestions from "../sections/FrequentQuestions";
import Header from "../sections/Header";
import Pains from "../sections/Pains";
import Pillars from "../sections/Pillars";
import Portfolio from "../sections/Portfolio";
import Strategy from "../sections/Strategy";
import Testimonials from "../sections/Testimonials";

const Home = () => {
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
    </div>
  );
};

export default Home;
