"use client";

import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import { usePathname } from "next/navigation";
import quotes from "../../../data/defaultQuotes.json";
import { motion, AnimatePresence } from "framer-motion";

const roboto = Roboto({ subsets: ["latin"], weight: "700" });
const annabel_1 = localFont({ src: "../../../../public/annabel_1.ttf" });
type Props = Quote;

const get_quotes = (quoteType: string) => {
  const res = quotes.quotes;
  return res;
};

const containerVars = {
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

const characterVars = {
  initial: {
    color: "rgb(217 119 6)",
    textShadow: "0px 0px black",
    opacity: 0,
  },
  animate: {
    color: "white",
    textShadow: `2px 2px black`,
    opacity: 1,
  },
};

const Quote = () => {
  const router = usePathname();
  const quotes = get_quotes(router);
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  const text = quote.quote.split("");
  const author = quote.author.split("");

  return (
    <AnimatePresence>
      <section className="flex quote self-center text-xl gap-9">
        <motion.div
          variants={containerVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className={
            annabel_1.className + " flex flex-col flex-wrap max-h-96 gap-3"
          }
        >
          {text.map((c, i) => {
            return (
              <motion.p variants={characterVars} key={i}>
                {c}
              </motion.p>
            );
          })}
        </motion.div>
        {/* <motion.div
          variants={containerVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className={roboto.className + " flex flex-col flex-wrap max-h-96"}
          style={{
            textOrientation: "upright",
          }}
        >
          {author.map((c) => {
            return <motion.p variants={characterVars}>{c}</motion.p>;
          })}
        </motion.div> */}
      </section>
    </AnimatePresence>
  );
};

export default Quote;
