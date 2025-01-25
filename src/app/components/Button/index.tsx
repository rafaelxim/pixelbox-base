"use client";

import { ReactNode } from "react";
import { PHONE } from "../../../config";
import styles from "./styles.module.scss";

type Props = {
  children: ReactNode;
};

const Button: React.FC<Props> = ({ children }) => {
  const handleClick = () => {
    window.open(`https://wa.me/${PHONE}`, "_blank");
  };

  return (
    <button onClick={handleClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
