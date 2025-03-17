/* eslint-disable @next/next/no-img-element */
import Button from "@/app/components/Button";
import Content from "@/app/components/Content";
import Title from "@/app/components/Typography/Title";
import styles from "./styles.module.scss";

type Props = {
  subTitle: string;
  title: string;
  items: string[];
  description: string;
  image: string;
};

const Benefits: React.FC<Props> = ({
  description,
  image,
  items,
  subTitle,
  title,
}) => {
  return (
    <section id="benefits" className={styles.benefits}>
      <Content>
        <div className={styles.benefits__row}>
          <div className={styles.benefits__heading}>
            <h2 data-aos="fade-up" className={styles.benefits__preTitle}>
              {subTitle}
            </h2>
            <Title>{title}</Title>
            <div data-aos="fade-up" className={styles.benefits__list}>
              {items.map((i) => (
                <p key={i} className={styles.benefits__item}>
                  {i}
                </p>
              ))}
            </div>
            <p data-aos="fade-up" className={styles.benefits__description}>
              {description}
            </p>
            <Button>Solicite um orçamento</Button>
          </div>
          <div data-aos="fade-up" className={styles.benefits__examples}>
            <div className={styles.benefits__backExemplo}>
              <img alt="back" src="/images/barberfull.jpg" />
            </div>
            <img data-aos="zoom-in" alt="examples" src={image} />
          </div>
        </div>
      </Content>
    </section>
  );
};

export default Benefits;
