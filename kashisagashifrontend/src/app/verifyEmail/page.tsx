import { Metadata } from "next";
import dynamic from "next/dynamic";
import VerifyEmailMain from "./components/VerifyEmailMain";

const NoSSRWord = dynamic(() => import("../components/decor/Word"), {
  ssr: false,
});
const NoSSRQuote = dynamic(() => import("../components/decor/Quote"), {
  ssr: false,
});
export const metadata: Metadata = {
  title: "Verify email",
  description: "Kashi Sagashi verify email page",
};
export default function VerifyEmail() {
  return (
    <main className="grid w-screen gap-x-10 h-screen" id="main-page">
      <NoSSRWord id={1} />
      <NoSSRWord id={2} />
      <NoSSRWord id={3} />
      <NoSSRQuote />
      <section className="flex main-section">
        <VerifyEmailMain />
      </section>
    </main>
  );
}
