"use server";

export default async function ForgotPasswordAction(formData: FormData) {
  const res = await fetch(`${process.env.BASE_URL}/forgotpass/sendotp`, {
    method: "POST",
    body: JSON.stringify({
      email: formData.get("email"),
    }),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": "true",
    },
    cache: "no-store",
  });
  return res.json();
}
