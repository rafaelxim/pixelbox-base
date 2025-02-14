/* eslint-disable @next/next/no-img-element */

import Button from "@/app/components/Button";
import Title from "@/app/components/Typography/Title";
import { useRef, useState } from "react";
import styles from "./styles.module.scss";

type Props = {
  title: string;
  subtitle: string;
};

const HeroWithVideo = ({ subtitle, title }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current?.play();
  };

  return (
    <section className={styles.container}>
      <h2 data-aos="fade-up" className={styles.preTitle}>
        {subtitle}
      </h2>
      <Title>{title}</Title>

      <div className={styles.videoSection}>
        <div className={styles.videoContainer}>
          {!isPlaying ? (
            <img
              src="/images/hero-cover.png"
              alt="Thumbnail do vídeo"
              className={styles.thumbnail}
              onClick={handlePlay}
            />
          ) : (
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/lUhyByZ48pI?autoplay=1&mute=1&rel=0"
              title="Vídeo do YouTube"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          )}
        </div>
      </div>
      <div className={styles.action}>
        <Button> Solcitar um Orçamento</Button>
      </div>
    </section>
  );
};

export default HeroWithVideo;
