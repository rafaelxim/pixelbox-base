"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface GlobalStateContextType {
  count: number;
  setCount: (value: number) => void;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const GlobalStateContext = createContext<GlobalStateContextType | undefined>(
  undefined
);

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <GlobalStateContext.Provider value={{ count, setCount, isOpen, setIsOpen }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error(
      "useGlobalState deve ser usado dentro de um GlobalStateProvider"
    );
  }
  return context;
};
