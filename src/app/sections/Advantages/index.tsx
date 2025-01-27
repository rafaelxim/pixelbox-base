import Button from "@/app/components/Button";
import Content from "@/app/components/Content";
import Title from "@/app/components/Typography/Title";
import Image from "next/image";
import styles from "./styles.module.scss";

type Props = {
  title: string;
  subtitle: string;
  subtitle1: string;
  items1: string[];
  subtitle2: string;
  items2: string[];
  image: string;
};

const Advantages: React.FC<Props> = ({
  title,
  items1,
  items2,
  subtitle,
  subtitle1,
  subtitle2,
  image,
}) => {
  return (
    <div className={styles.advantages}>
      <Content>
        <div className={styles.advantages__row}>
          <div className={styles.advantages__heading}>
            <p data-aos="fade-up" className={styles.advantages__preTitle}>
              {subtitle}
            </p>
            <Title>{title}</Title>

            <div className={styles.advantages__listGroup}>
              <h2 data-aos="fade-up" className={styles.advantages__subtitle}>
                {subtitle1}
              </h2>
              <div className={styles.advantages__list}>
                {items1.map((i) => (
                  <div
                    key={i}
                    data-aos="fade-up"
                    className={styles.advantages__item}
                  >
                    <span>√</span> {i}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.advantages__listGroup}>
              <h2 data-aos="fade-up" className={styles.advantages__subtitle}>
                {subtitle2}
              </h2>
              <div className={styles.advantages__list}>
                {items2.map((i) => (
                  <div
                    key={i}
                    data-aos="fade-up"
                    className={styles.advantages__item}
                  >
                    <span>√</span> {i}
                  </div>
                ))}
              </div>
            </div>

            <Button>Solicite um orçamento</Button>
          </div>
          <div data-aos="fade-up" className={styles.advantages__pics}>
            <Image src={image} alt="time de ti" fill />
          </div>
        </div>
      </Content>
    </div>
  );
};

export default Advantages;
