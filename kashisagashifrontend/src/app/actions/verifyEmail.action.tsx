"use server";

export default async function VerifyEmail(formData: FormData) {
  const res = await fetch(`${process.env.BASE_URL}/verifyemail/verifyemail`, {
    method: "POST",
    body: JSON.stringify({
      email: formData.get("email"),
      otp: formData.get("otp"),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}
