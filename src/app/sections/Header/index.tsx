import Button from "../../components/Button";
import Content from "../../components/Content";
import styles from "./styles.module.scss";

import Image from "next/image";

type Props = {
  title: string;
  description: string;
  mainImage: string;
};

const Header: React.FC<Props> = ({ description, title }) => {
  return (
    <main className={styles.wrapper}>
      <Content>
        <div className={styles.row}>
          <div className={styles.heading}>
            <div className={styles.stars}>
              <Image
                data-aos="fade-in"
                data-aos-delay="800"
                src="/images/star.png"
                alt="star"
                width={49}
                height={48}
              />
              <Image
                data-aos="fade-in"
                data-aos-delay="1000"
                src="/images/star.png"
                alt="star"
                width={49}
                height={48}
              />
              <Image
                data-aos="fade-in"
                data-aos-delay="1200"
                src="/images/star.png"
                alt="star"
                width={49}
                height={48}
              />
              <Image
                data-aos="fade-in"
                data-aos-delay="1400"
                src="/images/star.png"
                alt="star"
                width={49}
                height={48}
              />
              <Image
                data-aos="fade-in"
                data-aos-delay="1600"
                src="/images/star.png"
                alt="star"
                width={49}
                height={48}
              />
            </div>
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
          <div className={styles.examples}>
            <Image
              src="/images/sites-examples2.png"
              alt="exemplos"
              height={933}
              width={1119}
              data-aos="fade-in"
            />
            <Image
              src="/images/sites-examples1.webP"
              alt="exemplos"
              height={933}
              width={1119}
              data-aos="fade-left"
              data-aos-delay="300"
            />
            <Image
              src="/images/sites-examples3.webP"
              alt="exemplos"
              height={933}
              width={1119}
              data-aos="fade-right"
              data-aos-delay="600"
            />
          </div>
        </div>
      </Content>
    </main>
  );
};

export default Header;
