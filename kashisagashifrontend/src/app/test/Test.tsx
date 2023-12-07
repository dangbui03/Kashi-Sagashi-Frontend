"use client";

import React from "react";
import refresh from "../actions/refresh.action";
import useAuth from "../hook/useAuth";
import { AuthContextType } from "../context/AuthContext";
import { getCookie } from "cookies-next";

export default function Test() {
  const { authContext, setAuthContext } = useAuth() as AuthContextType;
  return (
    <form
      action={async (formData) => {
        const jwt = getCookie("jwt");
        const res = await refresh({ jwt: jwt });
        console.log(res);
      }}
    >
      <button>Test</button>
    </form>
  );
}
