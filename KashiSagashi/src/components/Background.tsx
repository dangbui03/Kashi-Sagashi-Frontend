import React from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, useAnimationControls } from "framer-motion";
import { useState, useEffect } from "react";
import { CookiesProvider, useCookies } from "react-cookie";

export type note = {
  character: string;
  number: number;
};

const changeBackground = (notes: note[]) => {
  const name = "KASHISAGASHI";
  for (let i = 0; i < 12; i++) {
    const note: note = {
      character: name[i],
      number: Math.floor(Math.random() * 12) + 1,
    };
    notes.push(note);
  }
};

const Background = () => {
  const controls = useAnimationControls();
  const location = useLocation();
  let notes: note[] = [];
  changeBackground(notes);
  return (
    <motion.div>
      <motion.div
        className={
          "fixed h-screen w-screen bg-black top-0 right-0 z-0 " +
          (location.pathname == "/searchSong" ||
          location.pathname == "/verifySong"
            ? "opacity-50"
            : "opacity-0")
        }
      ></motion.div>
      <motion.div className="flex fixed bottom-0 w-screen place-content-between -z-50">
        {notes.map((note) => {
          return (
            <motion.div className="flex flex-col-reverse gap-2">
              <p
                className={
                  "text-center note_font " +
                  (note.number <= 3
                    ? "c_note1-3"
                    : note.number <= 6
                    ? "c_note4-6"
                    : note.number <= 9
                    ? "c_note7-9"
                    : note.number <= 12
                    ? "c_note10-12"
                    : "")
                }
              >
                {note.character}
              </p>
              {note.number > 0 ? (
                <motion.div
                  className="note note1-3 rounded-2xl"
                  initial={{ translateY: 50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: note.number * 0.5,
                  }}
                ></motion.div>
              ) : (
                <motion.div></motion.div>
              )}
              {note.number > 1 ? (
                <motion.div
                  className="note note1-3 rounded-2xl"
                  initial={{ translateY: 50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: note.number * 0.5 }}
                ></motion.div>
              ) : (
                <motion.div></motion.div>
              )}
              {note.number > 2 ? (
                <motion.div
                  className="note note1-3 rounded-2xl"
                  initial={{ translateY: 50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: note.number * 0.5 }}
                ></motion.div>
              ) : (
                <motion.div></motion.div>
              )}
              {note.number > 3 ? (
                <motion.div
                  className="note note4-6 rounded-2xl"
                  initial={{ translateY: 50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: note.number * 0.5 }}
                ></motion.div>
              ) : (
                <motion.div></motion.div>
              )}
              {note.number > 4 ? (
                <motion.div
                  className="note note4-6 rounded-2xl"
                  initial={{ translateY: 50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: note.number * 0.5 }}
                ></motion.div>
              ) : (
                <motion.div></motion.div>
              )}
              {note.number > 5 ? (
                <motion.div
                  className="note note4-6 rounded-2xl"
                  initial={{ translateY: 50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: note.number * 0.5 }}
                ></motion.div>
              ) : (
                <motion.div></motion.div>
              )}
              {note.number > 6 ? (
                <motion.div
                  className="note note7-9 rounded-2xl"
                  initial={{ translateY: 50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: note.number * 0.5 }}
                ></motion.div>
              ) : (
                <motion.div></motion.div>
              )}
              {note.number > 7 ? (
                <motion.div
                  className="note note7-9 rounded-2xl"
                  initial={{ translateY: 50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: note.number * 0.5 }}
                ></motion.div>
              ) : (
                <motion.div></motion.div>
              )}
              {note.number > 8 ? (
                <motion.div
                  className="note note7-9 rounded-2xl"
                  initial={{ translateY: 50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: note.number * 0.5 }}
                ></motion.div>
              ) : (
                <motion.div></motion.div>
              )}
              {note.number > 9 ? (
                <motion.div
                  className="note note10-12 rounded-2xl"
                  initial={{ translateY: 50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: note.number * 0.5 }}
                ></motion.div>
              ) : (
                <motion.div></motion.div>
              )}
              {note.number > 10 ? (
                <motion.div
                  className="note note10-12 rounded-2xl"
                  initial={{ translateY: 50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: note.number * 0.5 }}
                ></motion.div>
              ) : (
                <motion.div></motion.div>
              )}
              {note.number > 11 ? (
                <motion.div
                  className="note note10-12 rounded-2xl"
                  initial={{ translateY: 50, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: note.number * 0.5 }}
                ></motion.div>
              ) : (
                <motion.div></motion.div>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        className="animate-gradient fixed top-0 z-0"
        id="grad"
      ></motion.div>
    </motion.div>
  );
};

export default Background;
