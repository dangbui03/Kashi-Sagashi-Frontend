"use client";

import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import { usePathname } from "next/navigation";
import quotes from "../../../data/defaultQuotes.json";

const roboto = Roboto({ subsets: ["latin"], weight: "700" });
const annabel_1 = localFont({ src: "../../../../public/annabel_1.ttf" });
type Props = Quote;

const get_quotes = (quoteType: string) => {
  const res = quotes.quotes;
  return res;
};

const Quote = () => {
  const router = usePathname();
  const quotes = get_quotes(router);
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <section className="flex quote self-center text-xl">
      <q
        className={annabel_1.className + " max-h-96"}
        style={{
          writingMode: "vertical-rl",
          textOrientation: "upright",
          textShadow: "2px 2px black",
        }}
      >
        {quote.quote}
      </q>
      <p
        className={roboto.className}
        style={{
          writingMode: "vertical-rl",
          textOrientation: "upright",
          textShadow: "2px 2px black",
        }}
      >
        {quote.author}
      </p>
    </section>
  );
};

export default Quote;
