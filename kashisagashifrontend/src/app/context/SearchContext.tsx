"use client";

import { createContext, useState, Dispatch, SetStateAction } from "react";

type Props = {
  children: React.ReactNode;
};

export type SearchContextType = {
  searchContext: Song[] | undefined;
  setSearchContext: Dispatch<SetStateAction<Song[] | undefined>>;
};

export const SearchContext = createContext<SearchContextType | null>(null);

export default function SearchContextProvider({ children }: Props) {
  const [searchContext, setSearchContext] = useState<Song[]>();

  return (
    <SearchContext.Provider value={{ searchContext, setSearchContext }}>
      {children}
    </SearchContext.Provider>
  );
}
