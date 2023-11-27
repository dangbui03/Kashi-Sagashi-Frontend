import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Background from "./components/Background";
import Footer from "./components/footer/Footer";
import Word from "./components/decor/Word";
import Quote from "./components/decor/Quote";
import dynamic from "next/dynamic";

const NoSSRWord = dynamic(() => import("./components/decor/Word"), {
  ssr: false,
});
const NoSSRQuote = dynamic(() => import("./components/decor/Quote"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kashi Sagashi",
  description: "Search song by lyric website",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Background />
        <Header />
        <main className="grid w-screen gap-x-10" id="main-page">
          <NoSSRWord id="word1" />
          <NoSSRWord id="word2" />
          <NoSSRWord id="word3" />
          <NoSSRQuote />
          <section className="search-section">{children}</section>
        </main>
        <Footer />
      </body>
    </html>
  );
}
