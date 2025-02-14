"use client";

import { ReactNode } from "react";
import styles from "./styles.module.scss";

type Props = {
  children: ReactNode;
};

const Button: React.FC<Props> = ({ children }) => {
  const handleClick = () => {
    window.open(
      "https://app.leadster.com.br/capture/14w0uvMwRKsZS7Qx",
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
