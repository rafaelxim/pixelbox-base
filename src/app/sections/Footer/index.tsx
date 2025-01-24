import Content from "@/app/components/Content";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Content>
        <p className={styles.footer__text}>
          Copyright © 2025 <span>Pixel Box Brasil</span>. Todos os Direitos
          Reservados.
        </p>
      </Content>
    </footer>
  );
};

export default Footer;
