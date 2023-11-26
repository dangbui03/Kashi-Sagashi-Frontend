import localFont from "next/font/local";
import Link from "next/link";
const annabel_1 = localFont({ src: "../../../../public/annabel_1.ttf" });

export default function Logo() {
  return (
    <h1 className={annabel_1.className + " text-6xl"} id="logo">
      <Link href={"/"}>Kashi Sagashi</Link>
    </h1>
  );
}
