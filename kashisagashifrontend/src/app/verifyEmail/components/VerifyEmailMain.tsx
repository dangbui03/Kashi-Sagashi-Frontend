"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VerifyEmail from "@/app/actions/verifyEmail.action";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/app/hook/useAuth";
import dynamic from "next/dynamic";
import { AuthContextType } from "@/app/context/AuthContext";
import { useFormStatus } from "react-dom";
import { VerifyEmailButton } from "./VerifyEmailButton";
import { ResendOtpButton } from "./ResendOtpButton";
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
  exit: {
    x: -10,
    y: -10,
    opacity: 0,
  },
};

export default function VerifyEmailMain() {
  const { authContext, setAuthContext } = useAuth() as AuthContextType;

  const [email, setEmail] = useState(authContext?.email || "");
  const [otp, setOtp] = useState("");
  const [resend, setResend] = useState(true);

  const [error, setError] = useState(true);
  const [errorMessage, setErrorMessage] = useState<React.JSX.Element | null>(
    null
  );
  const [success, setSuccess] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const otpRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (emailRef && emailRef.current) {
      emailRef.current.focus();
    }
    if (otpRef && otpRef.current) {
      otpRef.current.focus();
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

    if (otp) {
      setResend(false);
    } else {
      setResend(true);
    }

    setError(emailRegex.test(email) && (otp ? true : false));
  }, [email, otp]);

  const router = useRouter();

  const { pending } = useFormStatus();

  return (
    <>
      <AnimatePresence>
        {!success && (
          <motion.form
            variants={FormVars}
            initial="initial"
            animate="animate"
            action={async (formData) => {
              const res = await VerifyEmail(formData);
              if (res.verified) {
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
              placeholder={"Email"}
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
            <ResendOtpButton
              error={error || (resend && (email ? true : false))}
              resend={resend}
            />
            <VerifyEmailButton error={error} resend={resend} />
          </motion.form>
        )}
      </AnimatePresence>
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
              <p className="text-center">
                Account verified <br />
                <Link href={"/signIn"}>Go to sign in page ➡️</Link>
              </p>
            </>
          ) : errorMessage ? (
            errorMessage
          ) : (
            <NoSSRWord id={0} />
          )}{" "}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
