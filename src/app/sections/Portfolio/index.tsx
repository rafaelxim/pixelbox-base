import Content from "@/app/components/Content";
import Title from "@/app/components/Typography/Title";
import Image from "next/image";
import styles from "./styles.module.scss";

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <Content>
        <h2 data-aos="fade-up" className={styles.portfolio__preTitle}>
          + de 10 anos de experiência
        </h2>
        <Title>Veja alguns sites desenvolvidos</Title>

        <div className={styles.portfolio__grid}>
          <div data-aos="fade-up" className={styles.portfolio__item}>
            <Image src="/images/site1.png" alt="example item" fill />
          </div>
          <div data-aos="fade-up" className={styles.portfolio__item}>
            <Image src="/images/site2.png" alt="example item" fill />
          </div>
          <div data-aos="fade-up" className={styles.portfolio__item}>
            <Image src="/images/site3.png" alt="example item" fill />
          </div>
          <div data-aos="fade-up" className={styles.portfolio__item}>
            <Image src="/images/site4.png" alt="example item" fill />
          </div>
          <div data-aos="fade-up" className={styles.portfolio__item}>
            <Image src="/images/site5.png" alt="example item" fill />
          </div>
          <div data-aos="fade-up" className={styles.portfolio__item}>
            <Image src="/images/site6.png" alt="example item" fill />
          </div>
          <div data-aos="fade-up" className={styles.portfolio__item}>
            <Image src="/images/site7.png" alt="example item" fill />
          </div>
          <div data-aos="fade-up" className={styles.portfolio__item}>
            <Image src="/images/site8.png" alt="example item" fill />
          </div>
        </div>
      </Content>
    </section>
  );
};

export default Portfolio;
