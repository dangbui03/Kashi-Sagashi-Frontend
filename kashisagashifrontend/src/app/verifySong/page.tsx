import { Metadata } from "next";
import Word from "../components/decor/Word";
import Quote from "../components/decor/Quote";
import dynamic from "next/dynamic";
import UnverifiedSongMain from "./components/UnverifiedSongMain";

const NoSSRWord = dynamic(() => import("../components/decor/Word"), {
  ssr: false,
});
const NoSSRQuote = dynamic(() => import("../components/decor/Quote"), {
  ssr: false,
});
export const metadata: Metadata = {
  title: "Verify song",
  description: "Kashi Sagashi verify song page",
};
export default function VerifySong() {
  return (
    <main className="grid w-screen gap-x-10 h-screen" id="main-page">
      <NoSSRWord id={1} />
      <NoSSRWord id={2} />
      <NoSSRWord id={3} />
      <NoSSRQuote />
      <section className="main-section">
        <UnverifiedSongMain />
      </section>
    </main>
  );
}
