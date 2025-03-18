import React, { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

const AppContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.appContainer}>{children}</div>;
};

export default AppContainer;
