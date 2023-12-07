import { Metadata } from "next";
import Word from "../components/decor/Word";
import Quote from "../components/decor/Quote";
import dynamic from "next/dynamic";
import ResetPasswordMain from "./components/ResetPasswordMain";

const NoSSRWord = dynamic(() => import("../components/decor/Word"), {
  ssr: false,
});
const NoSSRQuote = dynamic(() => import("../components/decor/Quote"), {
  ssr: false,
});
export const metadata: Metadata = {
  title: "Reset password",
  description: "Kashi Sagashi reset password page",
};
export default function VerifyEmail() {
  return (
    <main className="grid w-screen gap-x-10 h-screen" id="main-page">
      <NoSSRWord id={1} />
      <NoSSRWord id={2} />
      <NoSSRWord id={3} />
      <NoSSRQuote />
      <section className="flex main-section">
        <ResetPasswordMain />
      </section>
    </main>
  );
}
