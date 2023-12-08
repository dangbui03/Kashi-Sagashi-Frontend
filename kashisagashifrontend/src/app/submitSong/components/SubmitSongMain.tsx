"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AddSongAction from "@/app/actions/addSong.action";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/app/hook/useAuth";
import dynamic from "next/dynamic";
import { AuthContextType } from "@/app/context/AuthContext";
import { SubmitSongButton } from "./SubmitSongButton";
import Link from "next/link";
import { setCookie, getCookie } from "cookies-next";
import { SetStateAction } from "react";

const NoSSRWord = dynamic(() => import("@/app/components/decor/Word"), {
  ssr: false,
});

const FormVars = {
  initial: {
    x: -10,
    y: -10,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
  },
};

export default function SubmitSongMain() {
  const { authContext, setAuthContext } = useAuth() as AuthContextType;
  const router = useRouter();

  const [name, setName] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [link, setLink] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [release_date, setRelease_date] = useState<number | string>(1990);

  const [error, setError] = useState(true);
  const [errorMessage, setErrorMessage] = useState<React.JSX.Element | null>(
    null
  );
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (name !== "" && lyrics !== "" && artist !== "") {
      setError(false);
      setErrorMessage(null);
    } else {
      setErrorMessage(
        <ul className="whitespace-nowrap">
          The following fields are required:
          <li className=" pt-2">Name</li>
          <li className=" pt-2">Lyrics</li>
          <li className=" pt-2">Artist</li>
        </ul>
      );
      setError(true);
    }
  }, [name, lyrics, link, artist, album, release_date]);

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

  return authContext?.loggedIn ? (
    <>
      <motion.form
        variants={FormVars}
        initial="initial"
        animate="animate"
        action={async (formData) => {
          const res = await AddSongAction(
            formData,
            getCookie("accessToken") as string,
            getCookie("username") as string
          );
          if (res.savedSong) {
            setSuccess(true);
          } else {
            alert(res.error || res.message);
          }
        }}
        className=" flex flex-col m-5 p-5 gap-10 bg-white text-black rounded-lg w-96 text-xl"
        style={{ boxShadow: "5px 5px black" }}
      >
        <input
          type="text"
          placeholder="Name"
          name="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          rows={4}
          cols={50}
          placeholder="Lyrics"
          name="Lyrics"
          value={lyrics}
          onChange={(e) => setLyrics(e.target.value)}
        />
        <input
          type="text"
          placeholder="Artist"
          name="Artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <input
          type="text"
          placeholder="Album"
          name="Album"
          value={album}
          onChange={(e) => setAlbum(e.target.value)}
        />
        <input
          type="text"
          placeholder="Link"
          name="Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <input
          type="number"
          placeholder="Release_date"
          name="Release_date"
          value={release_date}
          min="1500"
          max="2023"
          step="1"
          onChange={(e) => setRelease_date(e.target.value)}
        />
        <SubmitSongButton error={error} />
      </motion.form>
      <AnimatePresence>
        <motion.div
          variants={FormVars}
          initial="initial"
          animate="animate"
          className={
            " flex flex-col m-5 p-5 gap-10 bg-white text-black rounded-lg w-96 place-content-center items-center text-xl overflow-hidden"
          }
          style={{ boxShadow: "5px 5px black" }}
        >
          {success ? (
            <>
              <NoSSRWord id={0} specificWord="Success" />
              <p>Song submitted</p>
            </>
          ) : errorMessage ? (
            errorMessage
          ) : (
            <NoSSRWord id={0} />
          )}
        </motion.div>
      </AnimatePresence>
    </>
  ) : (
    <>
      <motion.div
        variants={FormVars}
        initial="initial"
        animate="animate"
        className={
          " flex flex-col m-5 p-5 gap-10 bg-white text-black rounded-lg w-96 place-content-center items-center text-xl overflow-hidden"
        }
        style={{ boxShadow: "5px 5px black" }}
      >
        You need to sign in to use this feature <br />
        <Link href={"/signIn"}>Go to sign in page ➡️</Link>
      </motion.div>
    </>
  );
}
