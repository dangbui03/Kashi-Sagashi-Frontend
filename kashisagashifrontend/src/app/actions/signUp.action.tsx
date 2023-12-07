"use server";

export default async function SignUpAction(formData: FormData) {
  const res = await fetch(`${process.env.BASE_URL}/auth/register`, {
    method: "POST",
    body: JSON.stringify({
      email: formData.get("email"),
      pwd: formData.get("password"),
      username: formData.get("username"),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}
