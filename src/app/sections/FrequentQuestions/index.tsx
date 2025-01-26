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
    question: "Qual prazo de entrega do site?",
    answer:
      "Assim que nos contratar faremos um briefing para coletar as informações e identidade visual da sua empresa. Assim que coletados, nosso prazo de entrega é 10 dias úteis.",
  },
  {
    id: 3,
    question: "Vocês registram o domínio do site?",
    answer:
      "Ao nos contratar nós realizamos toda a configuração do site o que inclui o registro e configuração do seu domínio(ex: www.site.com.br), certificado SSL de segurança assim como todos os elementos necessários para seu funcionamento..",
  },
  {
    id: 4,
    question: "Quero fazer um orçamento. Como faço?",
    answer:
      "Nossa equipe de consultores pode ajudá-lo a avaliar suas necessidades e apresentar soluções personalizadas que atendam aos seus objetivos e orçamento. Entre em contato conosco para discutir suas necessidades e descobrir como podemos ajudá-lo a impulsionar seus negócios online. Só clicar nos botões e ir para nosso WhatsApp. Nosso orçamento é totalmente gratuito.",
  },
  {
    id: 5,
    question: "Vocês oferecem suporte técnico após a conclusão do projeto?",
    answer:
      "Sim, oferecemos suporte técnico humanizado e direto no WhatsApp, para garantir que tudo esteja funcionando corretamente após a conclusão do projeto e para tirar suas dúvidas ao operar seu site.",
  },
  {
    id: 6,
    question: "Como a PixelBox pode ajudar no meu negócio?",
    answer:
      "Nossa equipe de profissionais especializados pode ajudá-lo a desenvolver sua presença online e impulsionar suas vendas. Converse conosco.",
  },
];

const FrequentQuestions = () => {
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
          {QUESTIONS.map((q) => (
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
