"use server";

export default async function findSong(formData: FormData) {
  const res = await fetch(
    `${process.env.BASE_URL}/song/search?lyrics=${formData.get("lyrics")}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 30 },
    }
  );
  return res.json();
}
