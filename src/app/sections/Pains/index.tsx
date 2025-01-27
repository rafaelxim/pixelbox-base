import Content from "@/app/components/Content";
import Title from "@/app/components/Typography/Title";
import styles from "./styles.module.scss";

type Props = {
  title: string;
  items: string[];
};

const Pains: React.FC<Props> = ({ title, items }) => {
  return (
    <section className={styles.wrapper}>
      <Content>
        <Title data-aos="fade-in">{title}</Title>
        <div className={styles.box}>
          {items.map((i, idx) => (
            <h2 key={idx} data-aos="fade-in" className={styles.subtitle}>
              <span className={styles.subtitle__icon}>×</span>
              {i}
            </h2>
          ))}
        </div>
      </Content>
    </section>
  );
};

export default Pains;
