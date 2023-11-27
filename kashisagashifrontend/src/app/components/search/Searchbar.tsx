"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  searchLyric: string;
};

export default function Searchbar({ searchLyric }: Props) {
  const [search, setSearch] = useState(searchLyric);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}/`);
  };

  return (
    <form className="whitespace-nowrap mb-5" onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white p-2 text-xl rounded-xl text-black"
        placeholder="Search"
        id="search-bar"
        style={{ boxShadow: "5px 5px black" }}
      />
      <button
        className=" text-5xl translate-y-3"
        style={{
          textShadow: `5px 5px black`,
        }}
      >
        🔎
      </button>
    </form>
  );
}
