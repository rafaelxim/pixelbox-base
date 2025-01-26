import Button from "@/app/components/Button";
import Content from "@/app/components/Content";
import Title from "@/app/components/Typography/Title";
import styles from "./styles.module.scss";

const Strategy = () => {
  return (
    <div className={styles.strategy}>
      <Content>
        <h2 data-aos="fade-up" className={styles.strategy__preTitle}>
          Só um site não basta
        </h2>
        <Title>É preciso estratégia para vender mais</Title>

        <p data-aos="fade-up" className={styles.strategy__paragraph}>
          Ter um site bonito e profissional não é o suficiente. Você precisa de
          um site estratégico, que atue como uma máquina de atração e conversão
          de clientes.
        </p>

        <p data-aos="fade-up" className={styles.strategy__paragraph}>
          Fale conosco e descubra como transformar seu site em uma ferramenta
          poderosa de vendas com uma estratégia eficaz e resultados reais!
        </p>
        <Button>Solicite um orçamento</Button>
      </Content>
    </div>
  );
};

export default Strategy;
