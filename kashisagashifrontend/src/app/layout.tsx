import type { Metadata } from "next";
import { Inter, Averia_Libre } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Background from "./components/Background";
import Footer from "./components/footer/Footer";
import AuthContextProvider from "./context/AuthContext";
import SearchContextProvider from "./context/SearchContext";
import UnverifiedSongContextProvider from "./context/UnverifiedSongContext";
import UnverifiedSongOptiContextProvider from "./context/UnverifiedSongOptiContext";

const inter = Inter({ subsets: ["latin"] });
const averia_libre = Averia_Libre({ subsets: ["latin"], weight: "400" });
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
    <UnverifiedSongContextProvider>
      <UnverifiedSongOptiContextProvider>
        <SearchContextProvider>
          <AuthContextProvider>
            <html lang="en">
              <body className={averia_libre.className}>
                <Background />
                <Header />
                {children}
                <Footer />
              </body>
            </html>
          </AuthContextProvider>
        </SearchContextProvider>
      </UnverifiedSongOptiContextProvider>
    </UnverifiedSongContextProvider>
  );
}
