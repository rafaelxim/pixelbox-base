import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import Title from "@/app/components/Typography/Title";
import Image from "next/image";
import "./styles.swipper.css";

const PortfolioSlider = () => {
  return (
    <section className={styles.portfolioSlider}>
      <h2 data-aos="fade-up" className={styles.portfolioSlider__preTitle}>
        Confira aqui alguns exemplos do
      </h2>
      <Title>Nosso Trabalho</Title>
      <Swiper
        slidesPerView={3}
        navigation={true}
        spaceBetween={30}
        modules={[Navigation]}
        className="mySwiper"
        loop
        initialSlide={2}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <Image
            width={400}
            height={711}
            alt="art"
            src="/images/cafe-art.webP"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            width={400}
            height={711}
            alt="art"
            src="/images/autox_art.webP"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image width={400} height={711} alt="art" src="/images/barber.webP" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={400} height={711} alt="art" src="/images/cidade.webP" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default PortfolioSlider;
