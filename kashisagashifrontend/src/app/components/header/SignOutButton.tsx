"use client";
import React from "react";
import { motion } from "framer-motion";
import SignOutAction from "@/app/actions/signOut.action";
import useAuth from "@/app/hook/useAuth";
import { AuthContextType } from "@/app/context/AuthContext";
import { useState } from "react";

const NavItemVars = {
  initial: {
    x: 10,
    y: 10,
    textShadow: "0px 0px black",
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    textShadow: "5px 5px black",
    opacity: 1,
  },
  exit: {
    x: 10,
    y: 10,
    textShadow: "0px 0px black",
    opacity: 0,
  },
};

export default function SignOutButton() {
  const { authContext, setAuthContext } = useAuth() as AuthContextType;
  const [confirming, setConfirming] = useState(false);
  return confirming ? (
    <div className="flex flex-col h-10 justify-center items-center ">
      <motion.button
        variants={NavItemVars}
        onClick={() => {
          SignOutAction();
          setAuthContext({ ...authContext, loggedIn: false });
        }}
        className="first-letter:text-3xl first-letter:text-red-600"
      >
        Proceed
      </motion.button>
      <motion.button
        variants={NavItemVars}
        onClick={() => {
          setConfirming(false);
        }}
        className="first-letter:text-3xl first-letter:text-green-600"
      >
        Cancel
      </motion.button>
    </div>
  ) : (
    <motion.button
      variants={NavItemVars}
      onClick={() => {
        setConfirming(true);
      }}
      className="text-white"
    >
      Sign out
    </motion.button>
  );
}
