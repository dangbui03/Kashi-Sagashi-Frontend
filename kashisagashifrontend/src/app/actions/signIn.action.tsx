"use server";

export default async function SignInAction(formData: FormData) {
  const res = await fetch(`${process.env.BASE_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify({
      email: formData.get("email"),
      pwd: formData.get("password"),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}
