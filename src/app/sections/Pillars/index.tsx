import Content from "@/app/components/Content";
import Title from "@/app/components/Typography/Title";
import Image from "next/image";
import styles from "./styles.module.scss";

const Pillars = () => {
  return (
    <div className={styles.pillars}>
      <Content>
        <h2 className={styles.pillars__preTitle}>Atuamos</h2>
        <Title>em 3 pilares</Title>
        <div className={styles.pillars__cardsContainer}>
          <div className={styles.pillars__card}>
            <div className={styles.pillars__cardImg}>
              <Image alt="criaçao de sites" src="/icons/website.svg" fill />
            </div>
            <h3 className={styles.pillars__cardTitle}>Criação de Sites</h3>
            <p className={styles.pillars__cardText}>
              Desenvolvemos sites personalizados, prontos e totalmente
              configurados. Um site estratégico, otimizado com técnicas de SEO
              (para buscadores) e conteúdo voltado para alta conversão.
            </p>
          </div>

          <div className={styles.pillars__card}>
            <div className={styles.pillars__cardImg}>
              <Image alt="estratégia" src="/icons/strategy.svg" fill />
            </div>
            <h3 className={styles.pillars__cardTitle}>Estratégia Digital</h3>
            <p className={styles.pillars__cardText}>
              Tudo começa com uma boa estratégia. Criamos funis de vendas
              alinhados à jornada do cliente, garantindo um marketing eficiente
              que gera resultados reais e vendas consistentes.
            </p>
          </div>

          <div className={styles.pillars__card}>
            <div className={styles.pillars__cardImg}>
              <Image alt="trafego" src="/icons/chart.svg" fill />
            </div>
            <h3 className={styles.pillars__cardTitle}>Tráfego</h3>
            <p className={styles.pillars__cardText}>
              Trabalhamos com Google Meu Negócio e redes sociais de forma
              orgânica, além de potencializar os resultados com Google Ads e
              Meta Ads, sempre com estratégias adaptadas à sua empresa.
            </p>
          </div>
        </div>
      </Content>
    </div>
  );
};

export default Pillars;
