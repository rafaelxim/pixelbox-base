"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import styles from "./styles.module.scss";

type Props = {
  children: ReactNode;
};

const Button: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/chat");
  };

  return (
    <button
      id="send_whats"
      data-aos="fade-left"
      onClick={handleClick}
      className={styles.button}
    >
      {children}
    </button>
  );
};

export default Button;
