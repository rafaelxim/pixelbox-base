"use client";

import { useGlobalState } from "@/context/GlobalStateContext";
import { ReactNode } from "react";
import styles from "./styles.module.scss";

type Props = {
  children: ReactNode;
};

const Button: React.FC<Props> = ({ children }) => {
  const { setIsOpen } = useGlobalState();

  const handleClick = () => {
    setIsOpen(true);
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
