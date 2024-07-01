"use client";
import { createContext, useContext, ReactNode } from "react";

export type AuthContextType = {
  uid: string;
  nama: string;
  login: boolean;
  email: string;
} | null;

export const AuthContexts = createContext<AuthContextType>(null);
export default function AuthProvider({
  children,
  data,
}: {
  children: ReactNode;
  data: AuthContextType;
}) {
  return <AuthContexts.Provider value={data}>{children}</AuthContexts.Provider>;
}
