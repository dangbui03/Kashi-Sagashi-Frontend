"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ForgotPasswordAction from "@/app/actions/forgotPassword.action";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/app/hook/useAuth";
import dynamic from "next/dynamic";
import { AuthContextType } from "@/app/context/AuthContext";
import { useFormStatus } from "react-dom";
import { ForgotPasswordButton } from "./ForgotPasswordButton";

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

export default function ForgotPasswordMain() {
  const { authContext, setAuthContext } = useAuth() as AuthContextType;

  const [email, setEmail] = useState(authContext?.email || "");

  const [error, setError] = useState(true as boolean);
  const [errorMessage, setErrorMessage] = useState<React.JSX.Element | null>(
    null
  );

  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (emailRef && emailRef.current) {
      emailRef.current.focus();
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

    setError(emailRegex.test(email));
  }, [email]);

  useEffect(() => {
    setError(emailRegex.test(authContext?.email as string));
  }, []);

  const router = useRouter();

  const { pending } = useFormStatus();

  return (
    <>
      <motion.form
        variants={FormVars}
        initial="initial"
        animate="animate"
        action={async (formData) => {
          const res = await ForgotPasswordAction(formData);
          if (res.OTP) {
            setAuthContext({ ...authContext, email: res.email });
            router.push("/resetPassword");
          } else {
            alert(res.message);
          }
        }}
        className=" flex flex-col m-5 p-5 gap-10 bg-white text-black rounded-lg w-96 text-xl"
        style={{ boxShadow: "5px 5px black" }}
      >
        <input
          type="email"
          placeholder={"Email"}
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ref={emailRef}
        />
        <ForgotPasswordButton error={error} />
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
