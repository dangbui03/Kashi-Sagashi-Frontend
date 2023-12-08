"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Roboto } from "next/font/google";
import { getCookie } from "cookies-next";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import useAuth from "@/app/hook/useAuth";
import { AuthContextType } from "@/app/context/AuthContext";
import dynamic from "next/dynamic";
import SignOutButton from "./SignOutButton";

const NoSSRWord = dynamic(() => import("../decor/Word"), {
  ssr: false,
});

const NoSSRSignOutButton = dynamic(() => import("./SignOutButton"), {
  ssr: false,
});

const roboto = Roboto({ subsets: ["latin"], weight: "700" });

const NavVars = {
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

const NavItemVars = {
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
  exit: {
    x: 10,
    y: 10,
    color: "rgb(217 119 6)",
    textShadow: "0px 0px black",
    opacity: 0,
  },
};
export default function Navbar() {
  const currentRoute = usePathname();
  const { authContext, setAuthContext } = useAuth() as AuthContextType;

  useEffect(() => {
    const loggedInCookie = getCookie("loggedIn");
    const loggedIn = loggedInCookie?.toString() as string;
    const AdminCookie = getCookie("Admin");
    const Admin = AdminCookie?.toString() as string;
    const usernameCookie = getCookie("username");
    const username = usernameCookie?.toString() as string;
    setAuthContext({
      ...authContext,
      loggedIn: loggedIn === "true" ? true : false,
      roles: {
        Admin: parseInt(Admin),
      },
      username: username,
    });
  }, []);

  return (
    <motion.nav
      className={" flex gap-10 text-2xl items-center mr-5"}
      id="navbar"
      variants={NavVars}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <AnimatePresence>
        {authContext?.loggedIn && (
          <motion.section variants={NavItemVars} className="">
            <NoSSRWord id={0} specificWord={authContext?.username} />
          </motion.section>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!authContext?.loggedIn && (
          <motion.section variants={NavItemVars}>
            <Link
              href={"/signIn"}
              className={
                currentRoute === "/signIn"
                  ? "active-route"
                  : "" + " whitespace-nowrap"
              }
            >
              Sign in
            </Link>
          </motion.section>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!authContext?.loggedIn && (
          <motion.section variants={NavItemVars}>
            <Link
              href={"/signUp"}
              className={
                currentRoute === "/signUp"
                  ? "active-route"
                  : "" + " whitespace-nowrap"
              }
            >
              Sign up
            </Link>
          </motion.section>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {authContext?.loggedIn && (
          <motion.section variants={NavItemVars}>
            <Link
              href={"/submitSong"}
              className={
                currentRoute === "/submitSong"
                  ? "active-route"
                  : "" + " whitespace-nowrap"
              }
            >
              Submit song
            </Link>
          </motion.section>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {authContext?.loggedIn && authContext.roles?.Admin && (
          <motion.section variants={NavItemVars}>
            <Link
              href={"/verifySong"}
              className={
                currentRoute === "/verifySong"
                  ? "active-route"
                  : "" + " whitespace-nowrap"
              }
            >
              Verify song
            </Link>
          </motion.section>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {authContext?.loggedIn && <NoSSRSignOutButton />}
      </AnimatePresence>
    </motion.nav>
  );
}
