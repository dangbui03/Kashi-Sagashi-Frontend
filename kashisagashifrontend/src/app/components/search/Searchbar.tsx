"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import findSong from "@/app/actions/findSong.action";
import useSearch from "@/app/hook/useSearch";
import { SearchContextType } from "@/app/context/SearchContext";
import { useFormStatus } from "react-dom";
import SearchResult from "./SearchResult";

type Props = {
  searchLyric: string;
};

const FormVars = {
  initial: {
    x: -10,
    y: 10,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
  },
};

export default function Searchbar({ searchLyric }: Props) {
  const [search, setSearch] = useState(searchLyric);
  const { searchContext, setSearchContext } = useSearch() as SearchContextType;
  const { pending } = useFormStatus();
  return (
    <>
      <motion.form
        action={async (formData) => {
          const res = await findSong(formData);
          setSearchContext(res.songArr);
        }}
        className="whitespace-nowrap mb-5 mr-2"
        variants={FormVars}
        initial="initial"
        animate="animate"
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-white p-2 text-xl rounded-xl text-black"
          placeholder="Search"
          id="search-bar"
          style={{ boxShadow: "5px 5px black" }}
          name="lyrics"
        />
        <button
          className=" text-5xl translate-y-3"
          style={{
            textShadow: `5px 5px black`,
          }}
        >
          🔎
        </button>
        <SearchResult />
      </motion.form>
    </>
  );
}
