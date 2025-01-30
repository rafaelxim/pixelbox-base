import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";

export const PHONE = "5521978773043";

const firebaseConfig = {
  apiKey: "-",
  authDomain: "pixelbox-db.firebaseapp.com",
  projectId: "pixelbox-db",
  storageBucket: "pixelbox-db.firebasestorage.app",
  messagingSenderId: "280778153287",
  appId: "-",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export function formatDate(createdAt: {
  seconds: number;
  nanoseconds: number;
}): string {
  const date = new Date(createdAt.seconds * 1000);
  return format(date, "dd 'de' MMMM 'de' yyyy, HH:mm", { locale: ptBR });
}
