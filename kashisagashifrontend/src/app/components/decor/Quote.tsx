import localFont from "next/font/local";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "700" });
const annabel_1 = localFont({ src: "../../../../public/annabel_1.ttf" });
type Props = Quote;

const Quote = ({ quote, author }: Props) => {
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
        {quote}
      </q>
      <p
        className={roboto.className}
        style={{
          writingMode: "vertical-rl",
          textOrientation: "upright",
          textShadow: "2px 2px black",
        }}
      >
        {author}
      </p>
    </section>
  );
};

export default Quote;
