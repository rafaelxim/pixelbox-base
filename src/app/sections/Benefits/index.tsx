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
            <h2 className={styles.benefits__preTitle}>
              Imagine sua empresa com uma presença forte na internet
            </h2>
            <Title>Com certeza ela teria...</Title>
            <div className={styles.benefits__list}>
              <p className={styles.benefits__item}>+ Mais Visibilidade</p>
              <p className={styles.benefits__item}>+ Mais leads(clientes)</p>
              <p className={styles.benefits__item}>+ Mais vendas</p>
            </div>
            <p className={styles.benefits__description}>
              Fazemos isso atráves de um site estratégico, aplicando um método
              próprio para que sua empresa domine a estratégia de atração de
              clientes pelo meio digital e obtenha resultados imediatos.
            </p>
            <Button>Solicite um orçamento</Button>
          </div>
          <div className={styles.benefits__examples}>
            <Image
              alt="examples"
              src="/images/topranking.png"
              width={1902}
              height={621}
            />
          </div>
        </div>
      </Content>
    </section>
  );
};

export default Benefits;
