import React from "react";
import { song } from "../model/Song";
import { album } from "../model/Album";
import { artist } from "../model/Artist";
import { band } from "../model/Band";

const SongsView = (songs: song[]) => {
  return (
    <section>
      <ul>
        {songs.map((song) => {
          return (
            <li>
              <p>{song.name}</p>
              <p>{song.lyric}</p>
              <p>{song.link}</p>
              <p>{song.release_date.toDateString()}</p>
              {song.extendedView ? (
                <div>
                  <ul>
                    {song.album.map((al) => {
                      return <li>{(al as album).name}</li>;
                    })}
                  </ul>
                  <ul>
                    {song.artist.map((ar) => {
                      return <li>{(ar as artist).name}</li>;
                    })}
                  </ul>
                  <ul>
                    {song.band.map((b) => {
                      return <li>{(b as band).name}</li>;
                    })}
                  </ul>
                </div>
              ) : (
                <div></div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SongsView;
