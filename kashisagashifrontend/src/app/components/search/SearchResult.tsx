import SearchItem from "./SearchItem";

type Props = { songs: Song[] };

const SearchResult = ({ songs }: Props) => {
  return songs ? (
    <ul
      className="flex flex-col overflow-y-scroll"
      id="search-result"
      style={{ scrollSnapType: "y mandatory", scrollPadding: "10px" }}
    >
      {songs.map((song) => (
        <SearchItem song={song} />
      ))}
    </ul>
  ) : (
    <p className="flex bg-white p-2 text-xl rounded-xl text-black">
      No result.
    </p>
  );
};

export default SearchResult;
