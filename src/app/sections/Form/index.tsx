"use client";

import Button from "@/app/components/Button";
import Content from "@/app/components/Content";
import Title from "@/app/components/Typography/Title";
import Image from "next/image";
import { useState } from "react";
import styles from "./styles.module.scss";

const Form = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className={styles.form}>
      <Content>
        <div className={styles.form__row}>
          <div className={styles.form__heading}>
            <h2 className={styles.form__preTitle}>Fale conosco</h2>
            <Title>Solicite um orçamento</Title>
            <p className={styles.form__subtitle}>
              Preencha o formulário abaixo e entraremos em contato! Ou chame no
              WhatsApp <span>(21) 99850-7055</span>
            </p>
            <div className={styles.form__fields}>
              <div className={styles.form__group}>
                <label htmlFor="name">Nome</label>
                <input
                  onChange={(e) => setNome(e.target.value)}
                  value={nome}
                  type="text"
                  id="name"
                />
              </div>
            </div>

            <div className={styles.form__fields}>
              <div className={styles.form__group}>
                <label htmlFor="phone">Telefone</label>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  type="text"
                  id="phone"
                />
              </div>
            </div>

            <div className={styles.form__fields}>
              <div className={styles.form__group}>
                <label htmlFor="mail">E-mail</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="text"
                  id="mail"
                />
              </div>
            </div>

            <div className={styles.form__fields}>
              <div className={styles.form__group}>
                <label htmlFor="messsage">Mensagem</label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  rows={5}
                  id="messsage"
                />
              </div>
            </div>
            <div className={styles.form__action}>
              <Button>Enviar</Button>
            </div>
          </div>
          <div className={styles.form__pic}>
            <Image
              src="/images/contact.avif"
              alt="contact"
              objectFit="contain"
              fill
            />
          </div>
        </div>
      </Content>
    </div>
  );
};

export default Form;
