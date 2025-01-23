import Content from "@/app/components/Content";
import Title from "@/app/components/Typography/Title";
import Image from "next/image";
import styles from "./styles.module.scss";

const Facilities = () => {
  return (
    <div className={styles.facilities}>
      <Content>
        <h2 className={styles.facilities__preTitle}>
          Sites de alto desempenho
        </h2>
        <Title>e personalizados em 10 dias</Title>
        <div className={styles.facilities__cardsContainer}>
          <div className={styles.facilities__card}>
            <div className={styles.facilities__cardImg}>
              <Image
                alt="criaçao de sites"
                src="/images/icones86.png"
                fill
                objectFit="contain"
              />
            </div>
            <h3 className={styles.facilities__cardTitle}>Criação de Sites</h3>
            <p className={styles.facilities__cardText}>
              Entregamos seu site pronto, personalizado e configurado. Um
              website estratégico e inteligente com técnicas de SEO (otimizado
              para buscadores) e conteúdo para ter uma alta conversão.
            </p>
          </div>

          <div className={styles.facilities__card}>
            <div className={styles.facilities__cardImg}>
              <Image
                alt="criaçao de sites"
                src="/images/icones86.png"
                fill
                objectFit="contain"
              />
            </div>
            <h3 className={styles.facilities__cardTitle}>Criação de Sites</h3>
            <p className={styles.facilities__cardText}>
              Entregamos seu site pronto, personalizado e configurado. Um
              website estratégico e inteligente com técnicas de SEO (otimizado
              para buscadores) e conteúdo para ter uma alta conversão.
            </p>
          </div>

          <div className={styles.facilities__card}>
            <div className={styles.facilities__cardImg}>
              <Image
                alt="criaçao de sites"
                src="/images/icones86.png"
                fill
                objectFit="contain"
              />
            </div>
            <h3 className={styles.facilities__cardTitle}>Criação de Sites</h3>
            <p className={styles.facilities__cardText}>
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

export default Facilities;
