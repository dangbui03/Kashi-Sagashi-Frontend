"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "700" });
export default function Navbar() {
  const currentRoute = usePathname();
  return (
    <nav
      className={roboto.className + " flex gap-10 text-2xl items-center"}
      id="navbar"
    >
      <Link
        href={"/signIn"}
        className={
          currentRoute === "/signIn"
            ? "active-route"
            : "" + " whitespace-nowrap"
        }
      >
        Sign in
      </Link>
      <Link
        href={"/signUp"}
        className={
          currentRoute === "/signUp"
            ? "active-route"
            : "" + " whitespace-nowrap"
        }
      >
        Sign up
      </Link>
      <Link
        href={"/submitSong"}
        className={
          currentRoute === "/submitSong"
            ? "active-route"
            : "" + " whitespace-nowrap"
        }
      >
        Submit song
      </Link>
      <Link
        href={"/verifySong"}
        className={
          currentRoute === "/verifySong"
            ? "active-route"
            : "" + " whitespace-nowrap"
        }
      >
        Verify song
      </Link>
    </nav>
  );
}
