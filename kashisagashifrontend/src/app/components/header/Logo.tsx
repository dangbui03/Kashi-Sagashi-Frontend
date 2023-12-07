"use client";

import localFont from "next/font/local";
import Link from "next/link";
const annabel_1 = localFont({ src: "../../../../public/annabel_1.ttf" });
import { motion, AnimatePresence } from "framer-motion";

const LogoVars = {
  initial: {
    x: 10,
    y: 10,
    color: "rgb(217 119 6)",
    textShadow: "0px 0px black",
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    color: "white",
    textShadow: "5px 5px black",
    opacity: 1,
  },
};

export default function Logo() {
  return (
    <motion.h1
      className={annabel_1.className + " text-6xl"}
      id="logo"
      variants={LogoVars}
      initial="initial"
      animate="animate"
    >
      <Link href={"/"}>Kashi Sagashi</Link>
    </motion.h1>
  );
}
