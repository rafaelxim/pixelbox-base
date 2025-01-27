import Content from "@/app/components/Content";
import Title from "@/app/components/Typography/Title";
import styles from "./styles.module.scss";

type Props = {
  subtitle: string;
  title: string;
  text1: string;
  text2: string;
};

const Testimonials: React.FC<Props> = ({ subtitle, text1, text2, title }) => {
  return (
    <div className={styles.testimonials}>
      <Content>
        <h2 data-aos="fade-up" className={styles.testimonials__preTitle}>
          {subtitle}
        </h2>
        <Title>{title}</Title>
        <p data-aos="fade-up" className={styles.testimonials__strongP}>
          {text1}
        </p>
        <p data-aos="fade-up" className={styles.testimonials__paragraph}>
          {text2}
        </p>
      </Content>
    </div>
  );
};

export default Testimonials;
