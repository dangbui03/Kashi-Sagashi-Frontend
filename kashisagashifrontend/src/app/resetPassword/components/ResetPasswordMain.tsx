"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ResetPasswordAction from "@/app/actions/resetPassword.action";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/app/hook/useAuth";
import dynamic from "next/dynamic";
import { AuthContextType } from "@/app/context/AuthContext";
import { ResetPasswordButton } from "./ResetPasswordButton";
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

export default function ResetPasswordMain() {
  const { authContext, setAuthContext } = useAuth() as AuthContextType;

  const [email, setEmail] = useState(authContext?.email || "");
  const [otp, setOtp] = useState("");
  const [pw, setPw] = useState("");
  const [cpw, setCpw] = useState("");

  const [error, setError] = useState(true);
  const [errorMessage, setErrorMessage] = useState<React.JSX.Element | null>(
    null
  );
  const [success, setSuccess] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const otpRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);
  const cpwRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (emailRef && emailRef.current) {
      emailRef.current.focus();
    }
    if (otpRef && otpRef.current) {
      otpRef.current.focus();
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

    if (document.activeElement === otpRef.current) {
      setErrorMessage(null);
    }

    setError(
      emailRegex.test(email) &&
        passwordRegex.test(pw) &&
        pw === cpw &&
        (otp ? true : false)
    );
  }, [email, otp, pw, cpw]);

  const router = useRouter();

  return (
    <>
      <AnimatePresence>
        {!success && (
          <motion.form
            variants={FormVars}
            initial="initial"
            animate="animate"
            action={async (formData) => {
              const res = await ResetPasswordAction(formData);
              if (res.passwordreset) {
                setSuccess(true);
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
              placeholder="OTP"
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              ref={otpRef}
            />
            <input
              type="password"
              placeholder="New Password"
              name="newPassword"
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
            <ResetPasswordButton error={error} />
          </motion.form>
        )}
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
              <p className="text-center">
                Password reset <br />
                <Link href={"/signIn"}>Go to sign in page ➡️</Link>
              </p>
            </>
          ) : errorMessage ? (
            errorMessage
          ) : (
            <NoSSRWord id={0} />
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
