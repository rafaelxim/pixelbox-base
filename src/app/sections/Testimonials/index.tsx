import Content from "@/app/components/Content";
import Title from "@/app/components/Typography/Title";
import styles from "./styles.module.scss";

const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
      <Content>
        <h2 data-aos="fade-up" className={styles.testimonials__preTitle}>
          Valorizamos
        </h2>
        <Title>nossos clientes</Title>
        <p data-aos="fade-up" className={styles.testimonials__strongP}>
          A satisfação dos nossos clientes é a nossa maior conquista.
        </p>
        <p data-aos="fade-up" className={styles.testimonials__paragraph}>
          Por isso, valorizamos cada feedback que recebemos e estamos sempre
          buscando melhorar nosso atendimento e serviços.
        </p>
      </Content>
    </div>
  );
};

export default Testimonials;
