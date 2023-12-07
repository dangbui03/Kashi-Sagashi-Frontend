import Searchbar from "./Searchbar";
type Props = { searchLyric: string };

export default function Search({ searchLyric }: Props) {
  return (
    <section className="">
      <Searchbar searchLyric={searchLyric} />
    </section>
  );
}
