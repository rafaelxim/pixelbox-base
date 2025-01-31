"use client";

import { ReactNode } from "react";
import { PHONE } from "../../../config";
import styles from "./styles.module.scss";

type Props = {
  children: ReactNode;
};

const Button: React.FC<Props> = ({ children }) => {
  const handleClick = () => {
    window.open(
      `https://wa.me/${PHONE}?text=Gostaria%20de%20solicitar%20um%20orçamento.`,
      "_blank"
    );
  };

  return (
    <button
      id="send_whats"
      data-aos="fade-up"
      onClick={handleClick}
      className={styles.button}
    >
      {children}
    </button>
  );
};

export default Button;
