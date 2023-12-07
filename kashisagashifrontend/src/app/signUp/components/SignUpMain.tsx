"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SignUpAction from "@/app/actions/signUp.action";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/app/hook/useAuth";
import dynamic from "next/dynamic";
import { AuthContextType } from "@/app/context/AuthContext";
import { SignUpButton } from "./SignUpButton";
import Link from "next/link";

const NoSSRWord = dynamic(() => import("@/app/components/decor/Word"), {
  ssr: false,
});

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex =
  /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;

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

export default function SignUpMain() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [pw, setPw] = useState("");
  const [cpw, setCpw] = useState("");

  const [error, setError] = useState(true);
  const [errorMessage, setErrorMessage] = useState<React.JSX.Element | null>(
    null
  );

  const emailRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);
  const cpwRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (emailRef && emailRef.current) {
      emailRef.current.focus();
    }
    if (usernameRef && usernameRef.current) {
      usernameRef.current.focus();
    }
    if (pwRef && pwRef.current) {
      pwRef.current.focus();
    }
    if (cpwRef && cpwRef.current) {
      cpwRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (
      !emailRegex.test(email) &&
      document.activeElement === emailRef.current
    ) {
      setErrorMessage(<p>Please enter a valid email address</p>);
    } else if (document.activeElement === emailRef.current) {
      setErrorMessage(null);
    }

    if (!passwordRegex.test(pw) && document.activeElement === pwRef.current) {
      setErrorMessage(
        <>
          <ul>
            Password must have at least:
            <li>1 special character</li>
            <li>1 uppercase letter</li>
            <li>1 number</li>
          </ul>
          <p>And must be at least 8 characters long</p>
        </>
      );
    } else if (document.activeElement === pwRef.current) {
      setErrorMessage(null);
    }

    if (pw !== cpw && document.activeElement === cpwRef.current) {
      setErrorMessage(<p>Must match the first password</p>);
    } else if (document.activeElement === cpwRef.current) {
      setErrorMessage(null);
    }

    if (document.activeElement === usernameRef.current) {
      setErrorMessage(null);
    }

    setError(
      emailRegex.test(email) &&
        passwordRegex.test(pw) &&
        passwordRegex.test(cpw)
    );
  }, [email, username, pw, cpw]);

  const router = useRouter();

  const { authContext, setAuthContext } = useAuth() as AuthContextType;

  return (
    <>
      <motion.form
        variants={FormVars}
        initial="initial"
        animate="animate"
        action={async (formData) => {
          const res = await SignUpAction(formData);
          if (res.user) {
            router.push("/verifyEmail");
            const user: User = {
              email: res.user.email,
              password: res.user.password,
              username: res.user.username,
              loggedIn: false,
              roles: {
                User: res.user.roles.User,
                Admin: res.user.roles.Admin,
              },
              verified: res.user.verified,
            };
            setAuthContext(user);
          } else {
            alert(res.message);
          }
        }}
        className=" flex flex-col m-5 p-5 gap-10 bg-white text-black rounded-lg w-96 text-xl"
        style={{ boxShadow: "5px 5px black" }}
      >
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ref={emailRef}
        />
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          ref={usernameRef}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          ref={pwRef}
        />
        <input
          type="password"
          placeholder="Confirm password"
          name="confirm_password"
          value={cpw}
          onChange={(e) => setCpw(e.target.value)}
          ref={cpwRef}
        />
        <SignUpButton error={error} />{" "}
        <Link href={"/signIn"}>
          <div className=" bg-amber-600 disabled:brightness-50 disabled:cursor-not-allowed rounded-lg text-center ">
            Already had an account?
          </div>
        </Link>
        <Link href={"/verifyEmail"}>
          <div className=" bg-amber-600 disabled:brightness-50 disabled:cursor-not-allowed rounded-lg text-center ">
            Need to verify already created account?
          </div>
        </Link>
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
          {errorMessage ? errorMessage : <NoSSRWord id={0} />}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
