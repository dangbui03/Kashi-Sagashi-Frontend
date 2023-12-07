"use server";
import { revalidatePath } from "next/cache";

export default async function AddSongAction(
  formData: FormData,
  token: string,
  Submit_by: string
) {
  const res = await fetch(`${process.env.BASE_URL}/song/useraddsong`, {
    method: "POST",
    body: JSON.stringify({
      Submit_by: Submit_by,
      Artist: formData.get("Artist"),
      Name: formData.get("Name"),
      Link: formData.get("Link") || " ",
      Release_date: formData.get("Release_date"),
      Album: formData.get("Album") || " ",
      Lyrics: formData.get("Lyrics"),
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Credentials": "true",
    },
  });

  revalidatePath("/", "layout");
  return res.json();
}
