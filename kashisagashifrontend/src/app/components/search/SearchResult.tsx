"use client";
import SearchItem from "./SearchItem";
import { motion, AnimatePresence } from "framer-motion";
import useSearch from "@/app/hook/useSearch";
import { SearchContextType } from "@/app/context/SearchContext";
import { useFormStatus } from "react-dom";

const SearchResultVars = {
  initital: {
    transition: {
      staggerChildren: 0.3,
      staggerDirection: -1,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
      staggerDirection: 1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
      staggerDirection: -1,
    },
  },
};

const SearchItemVars = {
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
  exit: {
    x: -10,
    y: 10,
    opacity: 0,
  },
};

const SearchResult = () => {
  const { searchContext, setSearchContext } = useSearch() as SearchContextType;
  const { pending } = useFormStatus();
  return pending ? (
    <motion.p
      className="p-2 text-xl rounded-xlw-32 text-center mx-auto"
      variants={SearchItemVars}
      initial="initial"
      animate="animate"
    >
      Finding...
    </motion.p>
  ) : searchContext?.length ? (
    <motion.ul
      variants={SearchResultVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col overflow-y-scroll search-result whitespace-normal mt-5"
      style={{ scrollSnapType: "y mandatory", scrollPadding: "10px" }}
    >
      {searchContext.map((song) => (
        <motion.li
          variants={SearchItemVars}
          className="flex flex-col items-center bg-white p-2 text-xl rounded-xl text-black h-96 m-2 gap-3 lg:flex-row lg:items-start "
          style={{ boxShadow: "5px 5px black", scrollSnapAlign: "start" }}
          key={song.Name}
        >
          <SearchItem song={song} />
        </motion.li>
      ))}
    </motion.ul>
  ) : (
    <motion.p
      className="p-2 text-xl rounded-xlw-32 text-center mx-auto"
      variants={SearchItemVars}
      initial="initial"
      animate="animate"
    >
      Nothing here...
    </motion.p>
  );
};

export default SearchResult;
