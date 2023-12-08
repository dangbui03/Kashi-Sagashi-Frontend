"use server";

export default async function deleteAction(Name: string, token: string) {
  const res = await fetch(`${process.env.BASE_URL}/song/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Credentials": "true",
    },
    body: JSON.stringify({
      Name: Name,
    }),
  });
  return res.json();
}
