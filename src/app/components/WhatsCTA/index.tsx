import { PHONE } from "@/config";
import Image from "next/image";
import styles from "./styles.module.scss";

const WhatsCTA = () => {
  const handleClick = () => {
    window.open(`https://wa.me/${PHONE}`, "_blank");
  };
  return (
    <div onClick={handleClick} id="send_whats" className={styles.whats}>
      <Image src="/icons/whatsapp.svg" alt="call whats" fill />
    </div>
  );
};

export default WhatsCTA;
