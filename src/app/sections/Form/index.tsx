"use client";

import Content from "@/app/components/Content";
import Title from "@/app/components/Typography/Title";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { useState } from "react";
import styles from "./styles.module.scss";

const Form = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSendMail = () => {
    setSent(true);

    emailjs.init({
      publicKey: "Ow_lR2_DHB6AGumAq",
    });

    emailjs.send("service_tnouz3j", "template_b7af9qw", {
      from_name: `${nome} - ${email} - ${phone}`,
      to_name: "Rafael",
      message: message,
    });
    setEmail("");
    setNome("");
    setPhone("");
    setMessage("");
    setSent(true);
  };

  return (
    <div className={styles.form}>
      <Content>
        <div className={styles.form__row}>
          <div className={styles.form__heading}>
            <h2 className={styles.form__preTitle} data-aos="fade-up">
              Fale conosco
            </h2>
            <Title>Solicite um orçamento</Title>
            <p data-aos="fade-up" className={styles.form__subtitle}>
              Preencha o formulário abaixo e entraremos em contato! Ou chame no
              WhatsApp <span>(21) 97877 3043</span>
            </p>
            {sent ? (
              <p className={styles.form__sent}>
                Formulário enviado, entraremos em contato em breve!
              </p>
            ) : (
              <div className={styles.form__fields}>
                <div data-aos="fade-up" className={styles.form__group}>
                  <label htmlFor="name">Nome</label>
                  <input
                    onChange={(e) => setNome(e.target.value)}
                    value={nome}
                    type="text"
                    id="name"
                  />
                </div>

                <div data-aos="fade-up" className={styles.form__group}>
                  <label htmlFor="phone">Telefone</label>
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    type="text"
                    id="phone"
                  />
                </div>

                <div data-aos="fade-up" className={styles.form__group}>
                  <label htmlFor="mail">E-mail</label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    id="mail"
                  />
                </div>

                <div data-aos="fade-up" className={styles.form__group}>
                  <label htmlFor="messsage">Mensagem</label>
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    rows={5}
                    id="messsage"
                  />
                </div>
                <div className={styles.form__action}>
                  <button
                    className={styles.form__button}
                    type="button"
                    onClick={() => handleSendMail()}
                    data-aos="fade-up"
                    id="send_whats"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            )}
          </div>
          <div data-aos="fade-up" className={styles.form__pic}>
            <Image src="/images/contact.avif" alt="contact" fill />
          </div>
        </div>
      </Content>
    </div>
  );
};

export default Form;
