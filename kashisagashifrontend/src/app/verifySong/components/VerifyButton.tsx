"use client";
import React from "react";
import { motion } from "framer-motion";
import verifySongAction from "@/app/actions/verifySong.action";
import useAuth from "@/app/hook/useAuth";
import { AuthContextType } from "@/app/context/AuthContext";
import { useState } from "react";
import { getCookie } from "cookies-next";
import useUnverifiedSongOpti from "@/app/hook/useUnverifiedSongOpti";
import { UnverifiedSongOptiContextType } from "@/app/context/UnverifiedSongOptiContext";

const ButtonVars = {
  initial: {
    x: 10,
    y: 10,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  exit: {
    x: 10,
    y: 10,
    opacity: 0,
  },
};

type Props = {
  song: Song;
  verifying: boolean;
  setVerifying: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function VerifyButton({ song, verifying, setVerifying }: Props) {
  const { authContext, setAuthContext } = useAuth() as AuthContextType;

  const { optimisticUnverifiedSongs, removeUnverifiedSongs } =
    useUnverifiedSongOpti() as UnverifiedSongOptiContextType;

  return verifying ? (
    <div className="flex flex-col gap-5 my-32 w-20">
      <motion.button
        variants={ButtonVars}
        onClick={async () => {
          // removeUnverifiedSongs(song);
          const res = await verifySongAction(
            song.Name,
            getCookie("accessToken") as string
          );
        }}
        className="first-letter:text-3xl first-letter:text-red-600"
      >
        Proceed
      </motion.button>
      <motion.button
        variants={ButtonVars}
        onClick={() => {
          setVerifying(false);
        }}
        className="first-letter:text-3xl first-letter:text-green-600"
      >
        Cancel
      </motion.button>
    </div>
  ) : (
    <motion.button
      variants={ButtonVars}
      onClick={() => {
        setVerifying(true);
      }}
      className="mt-20 w-20 h-36"
    >
      Verify
    </motion.button>
  );
}
