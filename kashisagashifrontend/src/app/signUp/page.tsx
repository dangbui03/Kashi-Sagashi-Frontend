import { Metadata } from "next";
import Word from "../components/decor/Word";
import Quote from "../components/decor/Quote";
import dynamic from "next/dynamic";
import SignUpMain from "./components/SignUpMain";

const NoSSRWord = dynamic(() => import("../components/decor/Word"), {
  ssr: false,
});
const NoSSRQuote = dynamic(() => import("../components/decor/Quote"), {
  ssr: false,
});
export const metadata: Metadata = {
  title: "Sign up",
  description: "Kashi Sagashi sign up page",
};

export default function SignUp() {
  return (
    <main className="grid w-screen gap-x-10 h-screen" id="main-page">
      <NoSSRWord id={1} />
      <NoSSRWord id={2} />
      <NoSSRWord id={3} />
      <NoSSRQuote />
      <section className="flex main-section">
        <SignUpMain />
      </section>
    </main>
  );
}
