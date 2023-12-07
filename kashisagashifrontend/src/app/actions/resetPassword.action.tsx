"use server";

export default async function ResetPasswordAction(formData: FormData) {
  const res = await fetch(`${process.env.BASE_URL}/forgotpass/reset`, {
    method: "PUT",
    body: JSON.stringify({
      email: formData.get("email"),
      otp: formData.get("otp"),
      newPassword: formData.get("newPassword"),
    }),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  return res.json();
}
