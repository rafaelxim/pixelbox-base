import { useGlobalState } from "@/context/GlobalStateContext";
import Image from "next/image";
import styles from "./styles.module.scss";

const WhatsCTA = () => {
  const { setIsOpen } = useGlobalState();

  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <div onClick={handleClick} id="send_whats" className={styles.whats}>
      <Image src="/icons/whatsapp.svg" alt="call whats" fill />
    </div>
  );
};

export default WhatsCTA;
