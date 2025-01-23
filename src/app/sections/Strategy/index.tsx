import Button from "@/app/components/Button";
import Content from "@/app/components/Content";
import Title from "@/app/components/Typography/Title";
import styles from "./styles.module.scss";

const Strategy = () => {
  return (
    <div className={styles.strategy}>
      <Content>
        <h2 className={styles.strategy__preTitle}>Só um site não basta</h2>
        <Title>É preciso estratégia para vender mais</Title>

        <p className={styles.strategy__paragraph}>
          Não basta só ter um site bonito e profissional. Você precisa de um
          site estratégico que funcione como uma máquina de atração e conversão
          de clientes.
        </p>

        <p className={styles.strategy__paragraph}>
          Entre em contato conosco para descobrir como transformar seu site em
          uma poderosa ferramenta de vendas com uma estratégia eficaz.
        </p>
        <Button>Solicite um orçamento</Button>
      </Content>
    </div>
  );
};

export default Strategy;
