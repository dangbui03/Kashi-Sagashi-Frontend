"use server";

export default async function ResendOtp(formData: FormData) {
  const res = await fetch(`${process.env.BASE_URL}/verifyemail/sendemail`, {
    method: "POST",
    body: JSON.stringify({
      email: formData.get("email"),
    }),
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  return res.json();
}
