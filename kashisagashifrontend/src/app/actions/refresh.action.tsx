"use server";
import { CookieValueTypes } from "cookies-next";
type Props = {
  jwt: CookieValueTypes;
};

export default async function refresh({ jwt }: Props) {
  console.log(jwt);
  const res = await fetch(`${process.env.BASE_URL}/auth/refresh`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": "true",
      Cookie: `${jwt}`,
    },
    credentials: "include",
  });
  return res.json();
}
