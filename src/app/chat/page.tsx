"use client";

import Chatbot from "../components/Chatbot";

const Chat = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      <Chatbot embedded={true} />
    </div>
  );
};

export default Chat;
