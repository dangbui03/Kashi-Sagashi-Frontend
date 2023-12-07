"use client";

import { createContext, useState, Dispatch, SetStateAction } from "react";

type Props = {
  children: React.ReactNode;
};

export type AuthContextType = {
  authContext: User | undefined;
  setAuthContext: Dispatch<SetStateAction<User | undefined>>;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthContextProvider({ children }: Props) {
  const [authContext, setAuthContext] = useState<User>();

  return (
    <AuthContext.Provider value={{ authContext, setAuthContext }}>
      {children}
    </AuthContext.Provider>
  );
}
