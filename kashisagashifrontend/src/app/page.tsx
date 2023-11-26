import Word from "./components/decor/Word";
import Quote from "./components/decor/Quote";
import Search from "./components/Search";

const quotes: Quote[] = [
  {
    quote: "Where words fail, music speaks.",
    author: "Hans Christian Andersen",
  },
  {
    quote: "Without music, life would be a mistake.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "If music be the food of love, play on.",
    author: "William Shakespeare",
  },
  {
    quote: "Music is well said to be the speech of angels.",
    author: "Thomas Carlyle",
  },
  {
    quote: "Music is moonlight in the gloomy night of life.",
    author: "Jean Paul",
  },
];

const words: string[] = [
  "Hell",
  "Die",
  "Like",
  "Love",
  "Fire",
  "Rock",
  "Moon",
  "Blues",
  "Rose",
  "Beg",
  "River",
  "Sun",
  "Lie",
  "Sweetheart",
  "Christmas",
];

export default function Home() {
  //Quote handle
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  //End Quote handle

  //Words handle
  const word1 = words[Math.floor(Math.random() * words.length)];
  const word2 = words[Math.floor(Math.random() * words.length)];
  const word3 = words[Math.floor(Math.random() * words.length)];
  //End Words handle

  return (
    <main className="grid w-screen gap-x-10" id="main-page">
      <Word word={word1} id="word1" />
      <Word word={word2} id="word2" />
      <Word word={word3} id="word3" />
      <Quote quote={quote.quote} author={quote.author} />
      <section className="page">
        <Search />
      </section>
    </main>
  );
}
