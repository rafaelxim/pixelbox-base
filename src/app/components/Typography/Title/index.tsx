import { ReactNode } from "react";
import styles from "./styles.module.scss";

type Props = {
  children: ReactNode;
};

const Title: React.FC<Props> = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export default Title;
