import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "700" });
export default function Footer() {
  return (
    <footer className={roboto.className + " text-xl p-6"} id="footer">
      Email: <a href="mailto:someone@example.com">Kashisagashi12@gmail.com</a>
    </footer>
  );
}
