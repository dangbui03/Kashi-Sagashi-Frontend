"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SignInAction from "@/app/actions/signIn.action";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/app/hook/useAuth";
import dynamic from "next/dynamic";
import { AuthContextType } from "@/app/context/AuthContext";
import { SignInButton } from "./SignInButton";
import Link from "next/link";
import { setCookie, getCookie } from "cookies-next";

const NoSSRWord = dynamic(() => import("@/app/components/decor/Word"), {
  ssr: false,
});

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

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

export default function SignInMain() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const [error, setError] = useState(true);
  const [errorMessage, setErrorMessage] = useState<React.JSX.Element | null>(
    null
  );

  const emailRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (emailRef && emailRef.current) {
      emailRef.current.focus();
    }
    if (pwRef && pwRef.current) {
      pwRef.current.focus();
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

    setError(emailRegex.test(email) && (pw ? true : false));
  }, [email, pw]);

  const router = useRouter();

  const { authContext, setAuthContext } = useAuth() as AuthContextType;

  return (
    <>
      <motion.form
        variants={FormVars}
        initial="initial"
        animate="animate"
        action={async (formData) => {
          const res = await SignInAction(formData);
          if (res.result) {
            const user: User = {
              email: res.result.email,
              password: res.result.password,
              username: res.result.username,
              loggedIn: true,
              roles: {
                User: res.result.roles.User,
                Admin: res.result.roles.Admin,
              },
              verified: res.result.verified,
              accessToken: res.result.accessToken,
            };
            setAuthContext(user);
            setCookie("jwt", res.result.refreshToken);
            setCookie("accessToken", res.accessToken);
            setCookie("loggedIn", true);
            setCookie("username", res.result.username);
            setCookie("User", res.result.roles.User);
            setCookie("Admin", res.result.roles.Admin);
            router.push("/");
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
          type="password"
          placeholder="Password"
          name="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          ref={pwRef}
        />
        <SignInButton error={error} />
        <Link href={"/signUp"}>
          <div className=" bg-amber-600 disabled:brightness-50 disabled:cursor-not-allowed rounded-lg text-center ">
            Need an account?
          </div>
        </Link>
        <Link href={"/forgotPassword"}>
          <div className=" bg-amber-600 disabled:brightness-50 disabled:cursor-not-allowed rounded-lg text-center ">
            Forgot password?
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
