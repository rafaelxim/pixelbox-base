import Button from "@/app/components/Button";
import Content from "@/app/components/Content";
import Title from "@/app/components/Typography/Title";
import styles from "./styles.module.scss";

type Props = {
  subtitle: string;
  title: string;
  text1: string;
  text2: string;
};

const Strategy: React.FC<Props> = ({ subtitle, text1, text2, title }) => {
  return (
    <div className={styles.strategy}>
      <Content>
        <h2 data-aos="fade-up" className={styles.strategy__preTitle}>
          {subtitle}
        </h2>
        <Title>{title}</Title>

        <p data-aos="fade-up" className={styles.strategy__paragraph}>
          {text1}
        </p>

        <p data-aos="fade-up" className={styles.strategy__paragraph}>
          {text2}
        </p>
        <Button>Solicite um orçamento</Button>
      </Content>
    </div>
  );
};

export default Strategy;
