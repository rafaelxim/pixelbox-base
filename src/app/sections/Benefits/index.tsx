"use client";
import Button from "@/app/components/Button";
import Content from "@/app/components/Content";
import Title from "@/app/components/Typography/Title";
import Image from "next/image";
import barberFull from "../../../../public/images/barberfull.webp";
import sectionImgMaps from "../../../../public/images/sectionimgMaps.webp";
import styles from "./styles.module.scss";

type Props = {
  subTitle: string;
  title: string;
  items: string[];
  description: string;
};

const Benefits: React.FC<Props> = ({ description, items, subTitle, title }) => {
  return (
    <section id="benefits" className={styles.benefits}>
      <Content>
        <div className={styles.benefits__row}>
          <div className={styles.benefits__heading}>
            <h2 data-aos="fade-up" className={styles.benefits__preTitle}>
              {subTitle}
            </h2>
            <Title>{title}</Title>
            <div data-aos="fade-up" className={styles.benefits__list}>
              {items.map((i) => (
                <p key={i} className={styles.benefits__item}>
                  {i}
                </p>
              ))}
            </div>
            <p data-aos="fade-up" className={styles.benefits__description}>
              {description}
            </p>
            <Button>Solicite um orçamento</Button>
          </div>
          <div data-aos="fade-up" className={styles.benefits__examples}>
            <div className={styles.benefits__backExemplo}>
              <Image src={barberFull} alt="back" />
            </div>

            <Image src={sectionImgMaps} alt="front" fill objectFit="contain" />
          </div>
        </div>
      </Content>
    </section>
  );
};

export default Benefits;
