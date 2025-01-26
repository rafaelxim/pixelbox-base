import Button from "@/app/components/Button";
import Content from "@/app/components/Content";
import Title from "@/app/components/Typography/Title";
import Image from "next/image";
import styles from "./styles.module.scss";

const Benefits = () => {
  return (
    <section className={styles.benefits}>
      <Content>
        <div className={styles.benefits__row}>
          <div className={styles.benefits__heading}>
            <h2 data-aos="fade-up" className={styles.benefits__preTitle}>
              Imagine sua empresa com uma presença forte na internet
            </h2>
            <Title>Com certeza ela teria...</Title>
            <div data-aos="fade-up" className={styles.benefits__list}>
              <p className={styles.benefits__item}>+ Mais Visibilidade</p>
              <p className={styles.benefits__item}>+ Mais leads(clientes)</p>
              <p className={styles.benefits__item}>+ Mais vendas</p>
            </div>
            <p data-aos="fade-up" className={styles.benefits__description}>
              Fazemos isso por meio de um site estratégico, utilizando um método
              exclusivo que permite à sua empresa dominar a atração de clientes
              no meio digital e alcançar resultados imediatos.
            </p>
            <Button>Solicite um orçamento</Button>
          </div>
          <div data-aos="fade-up" className={styles.benefits__examples}>
            <Image alt="examples" src="/images/topranking.png" fill />
          </div>
        </div>
      </Content>
    </section>
  );
};

export default Benefits;
