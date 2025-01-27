import Content from "@/app/components/Content";
import Title from "@/app/components/Typography/Title";
import Image from "next/image";
import styles from "./styles.module.scss";

type Props = {
  subtitle: string;
  title: string;
  cards: {
    title: string;
    image: string;
    description: string;
  }[];
};

const Pillars: React.FC<Props> = ({ cards, subtitle, title }) => {
  return (
    <div className={styles.pillars}>
      <Content>
        <h2 data-aos="fade-up" className={styles.pillars__preTitle}>
          {subtitle}
        </h2>
        <Title>{title}</Title>
        <div className={styles.pillars__cardsContainer}>
          {cards.map((c) => (
            <div
              key={c.title}
              data-aos="fade-up"
              className={styles.pillars__card}
            >
              <div className={styles.pillars__cardImg}>
                <Image alt="criaçao de sites" src={c.image} fill />
              </div>
              <h3 className={styles.pillars__cardTitle}>{c.title}</h3>
              <p className={styles.pillars__cardText}>{c.description}</p>
            </div>
          ))}
        </div>
      </Content>
    </div>
  );
};

export default Pillars;
