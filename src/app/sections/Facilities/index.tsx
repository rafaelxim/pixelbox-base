import Button from "@/app/components/Button";
import Content from "@/app/components/Content";
import Title from "@/app/components/Typography/Title";
import Image from "next/image";
import styles from "./styles.module.scss";

const Facilities = () => {
  return (
    <div className={styles.facilities}>
      <Content>
        <h2 data-aos="fade-up" className={styles.facilities__preTitle}>
          Sites de alto desempenho
        </h2>
        <Title>e personalizados em 10 dias</Title>
        <div className={styles.facilities__cardsContainer}>
          <div data-aos="fade-up" className={styles.facilities__card}>
            <div className={styles.facilities__cardImg}>
              <Image alt="criaçao de sites" src="/icons/responsivo.svg" fill />
            </div>
            <h3 className={styles.facilities__cardTitle}>Site Responsivo</h3>
            <p className={styles.facilities__cardText}>
              Criamos sites que se ajustam perfeitamente a computadores, tablets
              e smartphones, garantindo a melhor experiência para o usuário.
            </p>
          </div>

          <div data-aos="fade-up" className={styles.facilities__card}>
            <div className={styles.facilities__cardImg}>
              <Image alt="criaçao de sites" src="/icons/google.svg" fill />
            </div>
            <h3 className={styles.facilities__cardTitle}>SEO otimizado</h3>
            <p className={styles.facilities__cardText}>
              Desenvolvemos sites com técnicas de SEO avançadas para assegurar
              um excelente posicionamento nos motores de busca.
            </p>
          </div>

          <div data-aos="fade-up" className={styles.facilities__card}>
            <div className={styles.facilities__cardImg}>
              <Image alt="criaçao de sites" src="/icons/layout.svg" fill />
            </div>
            <h3 className={styles.facilities__cardTitle}>Layout sob medida</h3>
            <p className={styles.facilities__cardText}>
              Elaboramos o design do site alinhado à identidade visual da sua
              marca, pensando em cada detalhe.
            </p>
          </div>

          <div data-aos="fade-up" className={styles.facilities__card}>
            <div className={styles.facilities__cardImg}>
              <Image alt="criaçao de sites" src="/icons/atendimento.svg" fill />
            </div>
            <h3 className={styles.facilities__cardTitle}>
              Atendimento próximo
            </h3>
            <p className={styles.facilities__cardText}>
              Disponibilizamos suporte dedicado via WhatsApp ou videochamada
              para esclarecer dúvidas e atender necessidades.
            </p>
          </div>

          <div data-aos="fade-up" className={styles.facilities__card}>
            <div className={styles.facilities__cardImg}>
              <Image alt="criaçao de sites" src="/icons/impulsao.svg" fill />
            </div>
            <h3 className={styles.facilities__cardTitle}>
              Impulsione seus acessos
            </h3>
            <p className={styles.facilities__cardText}>
              Integramos seu site às principais ferramentas de tráfego pago e
              orgânico para aumentar a visibilidade da sua empresa.
            </p>
          </div>

          <div data-aos="fade-up" className={styles.facilities__card}>
            <div className={styles.facilities__cardImg}>
              <Image alt="criaçao de sites" src="/icons/manutencao.svg" fill />
            </div>
            <h3 className={styles.facilities__cardTitle}>
              Manutenção contínua
            </h3>
            <p className={styles.facilities__cardText}>
              Garantimos que seu site esteja sempre atualizado e funcionando
              perfeitamente, com suporte técnico disponível para ajustes e
              melhorias quando necessário.
            </p>
          </div>
        </div>
        <Button>Quero um orçamento</Button>
      </Content>
    </div>
  );
};

export default Facilities;
