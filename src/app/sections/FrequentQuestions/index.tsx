"use client";

import Button from "@/app/components/Button";
import Content from "@/app/components/Content";
import React, { useState } from "react";
import styles from "./styles.module.scss";

const QUESTIONS = [
  {
    id: 1,
    question: "Meu site estará no Google?",
    answer:
      "Sim! Está incluso em nosso trabalho de desenvolvimento de sites cadastrar seu site no Google e otimizar ele de acordo com as boas práticas de SEO.",
  },
  {
    id: 2,
    question: "Meu site estará no Google 2?",
    answer:
      "Sim! Está incluso em nosso trabalho de desenvolvimento de sites cadastrar seu site no Google e otimizar ele de acordo com as boas práticas de SEO.",
  },
  {
    id: 3,
    question: "Meu site estará no Google 3?",
    answer:
      "Sim! Está incluso em nosso trabalho de desenvolvimento de sites cadastrar seu site no Google e otimizar ele de acordo com as boas práticas de SEO.",
  },
  {
    id: 4,
    question: "Meu site estará no Google 4?",
    answer:
      "Sim! Está incluso em nosso trabalho de desenvolvimento de sites cadastrar seu site no Google e otimizar ele de acordo com as boas práticas de SEO.",
  },
];

const FrequentQuestions = () => {
  const [selectedFaq, setSelectedFaq] = useState<number>();

  const handleClick = (id: number) => {
    setSelectedFaq(id);
  };

  return (
    <div className={styles.faq}>
      <Content>
        <h1 className={styles.faq__title}>Perguntas Frequentes</h1>
        <div className={styles.faq__container}>
          {QUESTIONS.map((q) => (
            <React.Fragment key={q.id}>
              <div
                onClick={() => handleClick(q.id)}
                className={styles.faq__item}
              >
                <p className={styles.faq__question}>{q.question}</p>
                {q.id === selectedFaq ? <span>-</span> : <span>+</span>}
              </div>
              {selectedFaq === q.id && (
                <div className={styles.faq__answer}>{q.answer}</div>
              )}
            </React.Fragment>
          ))}
        </div>
        <Button>Mais dúvidas? Entre em contato</Button>
      </Content>
    </div>
  );
};

export default FrequentQuestions;
