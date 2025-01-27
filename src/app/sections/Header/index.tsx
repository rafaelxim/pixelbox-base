import Button from "../../components/Button";
import Content from "../../components/Content";
import styles from "./styles.module.scss";

import Image from "next/image";

type Props = {
  title: string;
  description: string;
  mainImage: string;
};

const Header: React.FC<Props> = ({ description, mainImage, title }) => {
  return (
    <main className={styles.wrapper}>
      <Content>
        <div className={styles.row}>
          <div data-aos="fade-in" className={styles.heading}>
            <Image
              src="/images/stars.png"
              alt="stars"
              width={250}
              height={55}
            />
            <h1
              dangerouslySetInnerHTML={{ __html: title }}
              data-aos="fade-in"
              className={styles.heading__title}
            />
            <div data-aos="fade-in" className={styles.heading__description}>
              {description}
            </div>
            <Button data-aos="fade-in">Solicite um orçamento</Button>
          </div>
          <div data-aos="fade-in" className={styles.examples}>
            <Image src={mainImage} alt="exemplos" height={933} width={1119} />
          </div>
        </div>
      </Content>
    </main>
  );
};

export default Header;
