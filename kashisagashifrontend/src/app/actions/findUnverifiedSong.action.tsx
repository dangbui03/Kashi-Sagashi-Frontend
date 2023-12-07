"use server";

export default async function FindUnverifiedSongAction(token: string) {
  const res = await fetch(`${process.env.BASE_URL}/song/unverified`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Credentials": "true",
    },
  });
  console.log({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Credentials": "true",
    },
  });
  return res.json();
}
