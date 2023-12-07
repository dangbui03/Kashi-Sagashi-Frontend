"use client";

import { createContext, useState, Dispatch, SetStateAction } from "react";

type Props = {
  children: React.ReactNode;
};

export type UnverifiedSongContextType = {
  unverifiedSongContext: Song[] | undefined;
  setUnverifiedSongContext: Dispatch<SetStateAction<Song[] | undefined>>;
};

export const UnverifiedSongContext =
  createContext<UnverifiedSongContextType | null>(null);

export default function UnverifiedSongContextProvider({ children }: Props) {
  const [unverifiedSongContext, setUnverifiedSongContext] = useState<Song[]>();

  return (
    <UnverifiedSongContext.Provider
      value={{ unverifiedSongContext, setUnverifiedSongContext }}
    >
      {children}
    </UnverifiedSongContext.Provider>
  );
}
