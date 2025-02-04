import { db, PHONE } from "@/config";
import { useGlobalState } from "@/context/GlobalStateContext";
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import React, { useState } from "react";
import styles from "./styles.module.scss";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const WhatsDialog = ({ isOpen, onClose }: Props) => {
  const { setIsOpen } = useGlobalState();

  const [nome, setNome] = useState("");
  const [phone, setPhone] = useState("");

  if (!isOpen) return null; // Se não estiver aberto, não renderiza nada

  const formatPhone = (value: string) => {
    value = value.replace(/\D/g, ""); // Remove tudo que não for número
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2"); // Adiciona parênteses
    value = value.replace(/(\d{5})(\d)/, "$1-$2"); // Adiciona o traço
    return value.slice(0, 15); // Limita o tamanho máximo
  };

  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
  };

  const onClickStart = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const contactData = {
      createdAt: serverTimestamp(),
      name: nome,
      phone,
    };
    addDoc(collection(db, "contacts"), contactData);
    window.open(
      `https://wa.me/${PHONE}?text=Gostaria%20de%20solicitar%20um%20orçamento.`,
      "_blank"
    );
    setIsOpen(false);
  };

  return (
    <div className={styles["dialog-overlay"]} onClick={onClose}>
      <div
        className={styles["dialog-content"]}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Digite os dados abaixo para iniciarmos seu atendimento</h2>

        <form onSubmit={onClickStart}>
          <div className={styles["input-group"]}>
            <label htmlFor="nome">Seu Nome</label>
            <input
              onChange={(e) => setNome(e.target.value)}
              value={nome}
              id="nome"
            />
          </div>

          <div className={styles["input-group"]}>
            <label htmlFor="phone">Seu Telefone</label>
            <input onChange={handleChangePhone} value={phone} id="phone" />
          </div>

          <button className={styles["form-button"]} type="submit">
            Iniciar
          </button>
        </form>
      </div>
    </div>
  );
};

export default WhatsDialog;
