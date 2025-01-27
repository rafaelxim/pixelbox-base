import Content from "@/app/components/Content";
import Title from "@/app/components/Typography/Title";
import Image from "next/image";
import styles from "./styles.module.scss";

type Props = {
  title: string;
  subtitle: string;
  items: string[];
};

const Portfolio: React.FC<Props> = ({ items, subtitle, title }) => {
  return (
    <section className={styles.portfolio}>
      <Content>
        <h2 data-aos="fade-up" className={styles.portfolio__preTitle}>
          {subtitle}
        </h2>
        <Title>{title}</Title>

        <div className={styles.portfolio__grid}>
          {items.map((i) => (
            <div key={i} data-aos="fade-up" className={styles.portfolio__item}>
              <Image src={i} alt="example item" fill />
            </div>
          ))}
        </div>
      </Content>
    </section>
  );
};

export default Portfolio;
