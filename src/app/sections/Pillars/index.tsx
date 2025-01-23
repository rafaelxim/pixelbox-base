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
              <Image
                alt="criaçao de sites"
                src="/images/icones86.png"
                fill
                objectFit="contain"
              />
            </div>
            <h3 className={styles.pillars__cardTitle}>Criação de Sites</h3>
            <p className={styles.pillars__cardText}>
              Entregamos seu site pronto, personalizado e configurado. Um
              website estratégico e inteligente com técnicas de SEO (otimizado
              para buscadores) e conteúdo para ter uma alta conversão.
            </p>
          </div>

          <div className={styles.pillars__card}>
            <div className={styles.pillars__cardImg}>
              <Image
                alt="criaçao de sites"
                src="/images/icones86.png"
                fill
                objectFit="contain"
              />
            </div>
            <h3 className={styles.pillars__cardTitle}>Criação de Sites</h3>
            <p className={styles.pillars__cardText}>
              Entregamos seu site pronto, personalizado e configurado. Um
              website estratégico e inteligente com técnicas de SEO (otimizado
              para buscadores) e conteúdo para ter uma alta conversão.
            </p>
          </div>

          <div className={styles.pillars__card}>
            <div className={styles.pillars__cardImg}>
              <Image
                alt="criaçao de sites"
                src="/images/icones86.png"
                fill
                objectFit="contain"
              />
            </div>
            <h3 className={styles.pillars__cardTitle}>Criação de Sites</h3>
            <p className={styles.pillars__cardText}>
              Entregamos seu site pronto, personalizado e configurado. Um
              website estratégico e inteligente com técnicas de SEO (otimizado
              para buscadores) e conteúdo para ter uma alta conversão.
            </p>
          </div>
        </div>
      </Content>
    </div>
  );
};

export default Pillars;
