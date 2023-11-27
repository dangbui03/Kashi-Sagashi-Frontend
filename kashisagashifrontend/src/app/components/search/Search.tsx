"use client";

import Searchbar from "./Searchbar";
import SearchResult from "./SearchResult";

type Props = { searchLyric: string; songs: Song[] };

export default function Search({ searchLyric, songs }: Props) {
  return (
    <section className="mr-10">
      <Searchbar searchLyric={searchLyric} />
      <SearchResult songs={songs} />
    </section>
  );
}
