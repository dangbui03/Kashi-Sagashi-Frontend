import Search from "./components/search/Search";
import Word from "./components/decor/Word";
import Quote from "./components/decor/Quote";
import dynamic from "next/dynamic";
import getFormattedDate from "@/lib/getFormattedDate";

const NoSSRWord = dynamic(() => import("./components/decor/Word"), {
  ssr: false,
});
const NoSSRQuote = dynamic(() => import("./components/decor/Quote"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="grid w-screen gap-x-10 h-screen" id="main-page">
      <NoSSRWord id={1} />
      <NoSSRWord id={2} />
      <NoSSRWord id={3} />
      <NoSSRQuote />
      <section className="main-section">
        <Search searchLyric="" />
      </section>
    </main>
  );
}
