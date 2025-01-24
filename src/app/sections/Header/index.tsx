import Button from "../../components/Button";
import Content from "../../components/Content";
import styles from "./styles.module.scss";

import Image from "next/image";

const Header = () => {
  return (
    <main className={styles.wrapper}>
      <Content>
        <div className={styles.row}>
          <div className={styles.heading}>
            <Image
              src="/images/stars.png"
              alt="stars"
              width={250}
              height={55}
            />
            <h1 className={styles.heading__title}>
              Criação de <span>Sites Profissionais</span>
            </h1>
            <div className={styles.heading__description}>
              Tenha um site profissional e exclusivo em até 10 dias. Impulsione
              a visibilidade e a confiança da sua marca. Fale agora com um
              especialista!
            </div>
            <Button>Solicite um orçamento</Button>
          </div>
          <div className={styles.examples}>
            <Image
              src="/images/sites-examples.png"
              alt="exemplos"
              height={933}
              width={1119}
            />
          </div>
        </div>
      </Content>
    </main>
  );
};

export default Header;
