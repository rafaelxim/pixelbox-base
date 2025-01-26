import Content from "@/app/components/Content";
import Title from "@/app/components/Typography/Title";
import styles from "./styles.module.scss";

const Pains = () => {
  return (
    <section className={styles.wrapper}>
      <Content>
        <Title data-aos="fade-in"> Sua empresa...</Title>
        <div className={styles.box}>
          <h2 data-aos="fade-in" className={styles.subtitle}>
            <span className={styles.subtitle__icon}>×</span>
            Não é encontrada no Google e perde oportunidades de venda
          </h2>
          <h2 data-aos="fade-in" className={styles.subtitle}>
            <span className={styles.subtitle__icon}>×</span>
            Não tem site ou está parado e desatualizado
          </h2>
          <h2 data-aos="fade-in" className={styles.subtitle}>
            <span className={styles.subtitle__icon}>×</span>
            Não consegue atrair novos clientes todos os dias
          </h2>
        </div>
      </Content>
    </section>
  );
};

export default Pains;
