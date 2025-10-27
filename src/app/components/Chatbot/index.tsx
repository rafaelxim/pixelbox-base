/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import ChatBot, { Flow, Settings, Styles } from "react-chatbotify";

type Props = {
  embedded: boolean;
};

export default function Chatbot({ embedded }: Props) {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [urgency, setUrgency] = useState("");
  const [solution, setSolution] = useState("");
  const [objective, setObjective] = useState("");
  const [visible, setVisible] = useState(embedded);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // foi até objetivo, ou seja, completou o lead.
    if (objective) {
      sendWhats("Novo Lead Completo Gerado");

      emailjs.init({
        publicKey: "Ow_lR2_DHB6AGumAq",
      });

      emailjs.send("service_tnouz3j", "template_b7af9qw", {
        from_name: `Lead Pixelbox`,
        to_name: "Rafael",
        message: `
        Nome: ${name}
        Telefone: ${phone}
        Urgência: ${urgency}
        Solução: ${solution}
        Objetivo: ${objective}
        `,
      });
    }

    if (phone && !objective) {
      sendWhats("Novo Lead Parcial Gerado");
      // @ts-ignore
      window.dataLayer = window.dataLayer || [];
      // @ts-ignore
      window.dataLayer.push({
        event: "parcialLead",
      });
    }
  }, [objective, phone]);

  const sendWhats = async (title: string) => {
    try {
      const response = await fetch(
        `/api/send-message?name=${name}&whatsapp=${phone}&urgency=${urgency}&solution=${solution}&objective=${objective}&title=${title}`
      );
      const data = await response.json();

      if (data.success) {
        return "Obrigado por se cadastrar!";
      } else {
        return `Ocorreu um erro ao enviar seu orçamento: ${data.error}`;
      }
    } catch (error) {
      console.error("Error sending message:", error);
      return "Ocorreu um erro inesperado ao enviar seu orçamento.";
    }
  };

  const flow: Flow = {
    start: {
      message: "Olá, tudo bem?",
      path: "start2",
      chatDisabled: true,
      transition: 1500,
    },
    start2: {
      message: "Gostaria de fazer um orçamento em 3 minutos?",
      options: ["Sim, quero receber"],
      path: "ask_name",
      chatDisabled: true,
      function: () => sendWhats("Cliente iniciou chat"),
    },

    ask_name: {
      message:
        "Para isso, precisamos de umas informações rápidas. Qual seu nome?",
      path: "ask_whatsapp",
      function: (params: any) => setName(params.userInput),
    },

    ask_whatsapp: {
      message: (params) =>
        `Olá ${params.userInput}, poderia me informar seu número de WhatsApp (com DDD)?`,
      function: async (params: any) => setPhone(params.userInput),
      path: "ask_urgency",
    },
    ask_urgency: {
      message: "Qual a maior urgência do seu projeto hoje?",
      options: [
        "Urgente! Preciso de um site/LP para ontem, quero começar o quanto antes",
        "Planejamento: Estou pesquisando e preciso de um orçamento para planejar a estratégia.",
        "Dúvida: Preciso tirar dúvidas sobre o processo e valores da Pixel Box.",
      ],
      chatDisabled: true,
      path: "ask_solution",
      function: async (params: any) => setUrgency(params.userInput),
    },
    ask_solution: {
      message: "Entendido! E qual o tipo de solução digital que você busca?",
      options: [
        "Landing Page (Vendas/Leads Rápidos)",
        "Site Institucional (Completo e Profissional)",
        "Portal / Sistema Web (Com gestão de dados)",
        "Redesign (Atualização de um site existente)",
      ],
      chatDisabled: true,
      path: "ask_objective",
      function: async (params: any) => setSolution(params.userInput),
    },
    ask_objective: {
      message:
        "Para a gente entregar a melhor estratégia, qual o principal resultado que você espera alcançar?",
      options: [
        "Vender Mais",
        "Ter Mais Autoridade",
        "Aparecer em 1º (Google/Buscas)",
        "Gerir Informações",
      ],
      chatDisabled: true,
      path: "end",
      function: async (params: any) => {
        setObjective(params.userInput);
      },
    },
    end: {
      message: (params) =>
        `Maravilha, ${name}! Com base nas suas respostas, já podemos preparar um orçamento com foco em ${params.userInput} e o cronograma de entrega rápida. Entro em contato com você pelo Whatsapp fornecido, até já!`,
      chatDisabled: true,
      path: "end",
    },
  };

  const settings: Settings = {
    tooltip: {
      text: "Quer um orçamento?",
    },
    header: {
      title: "Rafael",
      avatar: "/images/avatar.webP",
    },

    chatButton: {
      icon: "/images/avatar.webP",
    },
    general: {
      embedded,
      secondaryColor: "#0d5d3a",
    },
  };

  const styles: Styles = {
    chatWindowStyle: {
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      position: "fixed",
    },
  };

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      <ChatBot
        styles={embedded ? styles : {}}
        flow={flow}
        settings={settings}
      />
    </div>
  );
}
