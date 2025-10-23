/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import ChatBot, { Flow, Settings } from "react-chatbotify";

export default function Chatbot() {
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
    },

    ask_name: {
      message:
        "Para isso, precisamos de umas informações rápidas. Qual seu nome?",
      path: "ask_whatsapp",
    },

    ask_whatsapp: {
      message: (params) =>
        `Olá ${params.userInput}, poderia me informar seu número de WhatsApp (com DDD)?`,
      path: "end",
    },

    end: {
      function: () => "IMPLEMENTAR_AQUI",
      message: "Obrigado por se cadastrar",
    },
  };

  const settings: Settings = {
    tooltip: {
      text: "Quer receber um orçamento personalizado?",
    },
  };

  return <ChatBot flow={flow} settings={settings} />;
}
