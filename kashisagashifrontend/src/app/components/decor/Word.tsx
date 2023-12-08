"use client";

import { NextFont } from "next/dist/compiled/@next/font";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import words from "../../../data/defaultWords.json";
import { motion, AnimatePresence } from "framer-motion";

const another_danger = localFont({
  src: "../../../../public/another_danger.otf",
});
const bekind = localFont({
  src: "../../../../public/bekind.ttf",
});
const darling = localFont({
  src: "../../../../public/darling.ttf",
});
const great_warrior = localFont({
  src: "../../../../public/great_warrior.ttf",
});
const grinched_regular = localFont({
  src: "../../../../public/grinched_regular.otf",
});
const simplisicky = localFont({
  src: "../../../../public/simplisicky.ttf",
});
const varsity_regular = localFont({
  src: "../../../../public/varsity_regular.ttf",
});

const colors: WordColor[] = [
  { color: "#2b2a4c", shadow_color: "#b31312" },
  { color: "#73d7c1", shadow_color: "#f0dbaf" },
  { color: "#7071e8", shadow_color: "#c683d7" },
  { color: "#fcf5ed", shadow_color: "#f4bf96" },
  { color: "#711a7b", shadow_color: "#982176" },
  { color: "#e966a0", shadow_color: "#2b2730" },
  { color: "#ff731d", shadow_color: "#fff7e9" },
];

const fonts: NextFont[] = [
  another_danger,
  bekind,
  darling,
  great_warrior,
  grinched_regular,
  simplisicky,
  varsity_regular,
];

const WordVars = {
  initial: {},
  animate: {},
};

const get_words = (wordType: string) => {
  const res =
    wordType === "/"
      ? words.words
      : wordType === "/signIn"
      ? words.signInWords
      : wordType === "/signUp"
      ? words.signUpWords
      : wordType === "/submitSong"
      ? words.submitSongWords
      : wordType === "/verifySong"
      ? words.verifySongWords
      : wordType === "/verifyEmail"
      ? words.verifyEmailWords
      : wordType === "/resetPassword"
      ? words.resetPasswordWords
      : words.words;
  return res;
};

type Props = { id: number; specificWord?: string };

const Word = ({ id, specificWord }: Props) => {
  const router = usePathname();
  const color = colors[Math.floor(Math.random() * colors.length)];
  const font = fonts[Math.floor(Math.random() * fonts.length)];
  const words = get_words(router);
  const word = specificWord
    ? specificWord
    : words[Math.floor(Math.random() * words.length)];
  return (
    <AnimatePresence>
      {specificWord ? (
        <motion.p
          className={
            font.className +
            " block tracking-wider " +
            (word.length > 4
              ? word.length > 6
                ? `text-4xl`
                : `text-5xl`
              : `text-6xl`)
          }
          id={`word${id.toString()}`}
          initial={{
            x: 10,
            y: 10,
            color: "rgb(217 119 6)",
            textShadow: "0px 0px black",
            opacity: 0,
          }}
          animate={{
            x: 0,
            y: 0,
            color: color.color,
            textShadow: `5px 5px ${color.shadow_color}`,
            opacity: 1,
            transition: {
              delay: id * 0.5,
            },
          }}
        >
          {word.toUpperCase()}
        </motion.p>
      ) : (
        <motion.p
          className={
            font.className +
            " block tracking-wider " +
            (word.length > 4
              ? word.length > 6
                ? `text-5xl`
                : `text-7xl`
              : `text-8xl`)
          }
          id={`word${id.toString()}`}
          initial={{
            x: 10,
            y: 10,
            color: "rgb(217 119 6)",
            textShadow: "0px 0px black",
            opacity: 0,
          }}
          animate={{
            x: 0,
            y: 0,
            color: color.color,
            textShadow: `5px 5px ${color.shadow_color}`,
            opacity: 1,
            transition: {
              delay: id * 0.5,
            },
          }}
        >
          {word.toUpperCase()}
        </motion.p>
      )}
    </AnimatePresence>
  );
};

export default Word;
