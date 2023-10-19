import { useState } from "react";
import { song } from "../model/Song";

export type SongViewProps = {
  song: song;
};

const SongView = (SongViewProps: SongViewProps) => {
  const [song, setSong] = useState(SongViewProps.song);
  const toggleExtendedView = (song: song) => {
    if (!song.extendedView) {
      return true;
    } else {
      return !song.extendedView;
    }
  };
  return (
    <>
      <li
        className="song overflow-hidden rounded-xl p-5 cursor-pointer flex flex-col gap-2"
        style={{ color: "#b6fffa", backgroundColor: "#687eff" }}
        onClick={() =>
          setSong({ ...song, extendedView: toggleExtendedView(song) })
        }
      >
        <p>
          Name:{" "}
          <span className="song_field p-1 rounded-xl ml-3">{song.name}</span>
        </p>
        <p>
          Listen link:
          <a href={song.link} className="song_field p-1 rounded-xl ml-3">
            {song.link}
          </a>
        </p>
        <p>
          Release date:{" "}
          <span className="song_field p-1 rounded-xl ml-3">
            {song.release_date.getFullYear()}
          </span>
        </p>
        {song.extendedView === true ? (
          <div className="flex flex-col gap-1">
            <ul className="flex gap-2">
              {song.artist.length > 0 ? "Artist(s):" : <></>}
              {song.artist.map((ar) => {
                // return <li>{(ar as artist).name}</li>;
                return (
                  <li className="song_field p-1 rounded-xl ml-3">
                    {ar as string}
                  </li>
                );
              })}
            </ul>
            <ul className="flex gap-2">
              {song.band.length > 0 ? "Band(s):" : <></>}
              {song.band.map((b) => {
                // return <li>{(b as band).name}</li>;
                return (
                  <li className="song_field p-1 rounded-xl ml-3">
                    {b as string}
                  </li>
                );
              })}
            </ul>
            <ul className="flex gap-2">
              {song.album.length > 0 ? "Album(s):" : <></>}
              {song.album.map((al) => {
                // return <li>{(al as album).name}</li>;
                return (
                  <li className="song_field p-1 rounded-xl ml-3">
                    {al as string}
                  </li>
                );
              })}
            </ul>
            <p className="song_field p-1 rounded-xl ml-3">{song.lyric}</p>
          </div>
        ) : (
          <div></div>
        )}
      </li>
    </>
  );
};

export default SongView;
