import { useState } from "react";
import { song } from "../model/Song";
import { album } from "../model/Album";
import { artist } from "../model/Artist";
import { band } from "../model/Band";
import { SearchBar } from "./SearchBar";
import SongView from "./SongView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export type SongViewProps = {
  songs: song[];
  verify?: boolean;
};
const SongsView = (SongViewProps: SongViewProps) => {
  const [songs, setSongs] = useState(SongViewProps.songs);
  return (
    <section className="flex-col">
      {songs.length > 0 ? (
        <div className="flex flex-col">
          <div className="translate-y-40 z-20">
            <SearchBar search="aaaa" />
          </div>
          <ul className="translate-y-32 flex flex-col items-center gap-5 z-20">
            {songs.map((song) => {
              return <SongView song={song} />;
            })}
          </ul>
        </div>
      ) : (
        <div className="flex flex-col">
          <SearchBar search="aa" />
          <p
            className="translate-y-80 text-xl text-center rounded-lg w-96 mx-auto z-30"
            style={{ color: "#b6fffa", backgroundColor: "#687eff" }}
          >
            Sorry but we can't find anything like what you describe.
          </p>
        </div>
      )}
    </section>
  );
};

export default SongsView;
