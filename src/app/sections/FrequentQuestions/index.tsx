"use client";

import Button from "@/app/components/Button";
import Content from "@/app/components/Content";
import React, { useState } from "react";
import styles from "./styles.module.scss";

type Props = {
  questions: {
    id: number;
    question: string;
    answer: string;
  }[];
};

const FrequentQuestions: React.FC<Props> = ({ questions }) => {
  const [selectedFaq, setSelectedFaq] = useState<number>();

  const handleClick = (id: number) => {
    if (selectedFaq === id) {
      setSelectedFaq(undefined);
      return;
    }

    setSelectedFaq(id);
  };

  return (
    <div className={styles.faq}>
      <Content>
        <h1 className={styles.faq__title}>Perguntas Frequentes</h1>
        <div className={styles.faq__container}>
          {questions.map((q) => (
            <React.Fragment key={q.id}>
              <div
                data-aos="fade-up"
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
