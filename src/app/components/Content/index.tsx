import styles from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
};

const Content: React.FC<Props> = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};

export default Content;
