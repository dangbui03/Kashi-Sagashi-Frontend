"use client";

import { createContext, useOptimistic } from "react";
import useUnverifiedSong from "../hook/useUnverifiedSong";
import { UnverifiedSongContextType } from "./UnverifiedSongContext";
type Props = {
  children: React.ReactNode;
};

export type UnverifiedSongOptiContextType = {
  optimisticUnverifiedSongs: Song[] | undefined;
  removeUnverifiedSongs: (action: Song) => void;
};

export const UnverifiedSongOptiContext =
  createContext<UnverifiedSongOptiContextType | null>(null);

export default function UnverifiedSongOptiContextProvider({ children }: Props) {
  const { unverifiedSongContext, setUnverifiedSongContext } =
    useUnverifiedSong() as UnverifiedSongContextType;
  const [optimisticUnverifiedSongs, removeUnverifiedSongs] = useOptimistic(
    unverifiedSongContext,
    (state, removedUnverifiedSongContext: Song) => {
      return state?.filter(
        (song) => song.Name != removedUnverifiedSongContext.Name
      );
    }
  );
  return (
    <UnverifiedSongOptiContext.Provider
      value={{ optimisticUnverifiedSongs, removeUnverifiedSongs }}
    >
      {children}
    </UnverifiedSongOptiContext.Provider>
  );
}
