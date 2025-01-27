import Button from "@/app/components/Button";
import Content from "@/app/components/Content";
import Title from "@/app/components/Typography/Title";
import Image from "next/image";
import styles from "./styles.module.scss";

type Props = {
  subtitle: string;
  title: string;
  cards: {
    title: string;
    description: string;
    image: string;
  }[];
};

const Facilities: React.FC<Props> = ({ cards, subtitle, title }) => {
  return (
    <div className={styles.facilities}>
      <Content>
        <h2 data-aos="fade-up" className={styles.facilities__preTitle}>
          {subtitle}
        </h2>
        <Title>{title}</Title>
        <div className={styles.facilities__cardsContainer}>
          {cards.map((c) => (
            <div
              key={c.title}
              data-aos="fade-up"
              className={styles.facilities__card}
            >
              <div className={styles.facilities__cardImg}>
                <Image alt="criaçao de sites" src={c.image} fill />
              </div>
              <h3 className={styles.facilities__cardTitle}>{c.title}</h3>
              <p className={styles.facilities__cardText}>{c.description}</p>
            </div>
          ))}
        </div>
        <Button>Quero um orçamento</Button>
      </Content>
    </div>
  );
};

export default Facilities;
