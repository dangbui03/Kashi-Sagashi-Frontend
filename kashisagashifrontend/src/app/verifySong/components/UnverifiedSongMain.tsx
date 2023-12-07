"use client";

import { FormEvent, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FindUnverifiedSongAction from "@/app/actions/findUnverifiedSong.action";
import UnverifiedSongList from "./UnverifiedSongList";
import useUnverifiedSong from "@/app/hook/useUnverifiedSong";
import { UnverifiedSongContextType } from "@/app/context/UnverifiedSongContext";
import { setCookie, getCookie } from "cookies-next";
import Link from "next/link";
import useAuth from "@/app/hook/useAuth";
import { AuthContextType } from "@/app/context/AuthContext";

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

export default function UnverifiedSongMain() {
  const { unverifiedSongContext, setUnverifiedSongContext } =
    useUnverifiedSong() as UnverifiedSongContextType;

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

  useEffect(() => {
    if (authContext?.loggedIn && authContext.roles?.Admin) {
      (
        document.getElementById("UnverifiedSongForm") as HTMLFormElement
      ).requestSubmit();
    }
  }, []);

  return (
    <>
      {authContext?.loggedIn && authContext.roles?.Admin ? (
        <motion.form
          action={async (formData) => {
            const res = await FindUnverifiedSongAction(
              getCookie("accessToken") as string
            );
            setUnverifiedSongContext(res);
          }}
          className="whitespace-nowrap mb-5 mr-2"
          variants={FormVars}
          initial="initial"
          animate="animate"
          id="UnverifiedSongForm"
        >
          <UnverifiedSongList />
        </motion.form>
      ) : (
        <motion.div
          variants={FormVars}
          initial="initial"
          animate="animate"
          className={
            " flex flex-col m-5 p-5 gap-10 bg-white text-black rounded-lg w-128 place-content-center items-center text-xl overflow-hidden"
          }
          style={{ boxShadow: "5px 5px black" }}
        >
          You need a admin account to use this feature <br />
          <Link href={"/signIn"}>Go to sign in page ➡️</Link>
        </motion.div>
      )}
    </>
  );
}
