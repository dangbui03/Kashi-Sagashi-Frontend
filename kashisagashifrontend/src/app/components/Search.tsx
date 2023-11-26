"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  //   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     setSearch("");
  //     router.push(`/${search}/`);
  //   };

  return (
    <form
      className="mr-10 whitespace-nowrap"
      //   onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white p-2 text-xl rounded-xl"
        placeholder="Search"
        id="search-bar"
      />
      <button
        className=" text-5xl"
        style={{
          textShadow: `5px 5px black`,
        }}
      >
        🔎
      </button>
    </form>
  );
}
