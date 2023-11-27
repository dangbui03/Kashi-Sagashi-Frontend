import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

type Props = { song: Song };

const SearchItem = ({ song }: Props) => {
  return (
    <li
      className="flex bg-white p-2 text-xl rounded-xl text-black h-96 m-2 gap-2"
      style={{ boxShadow: "5px 5px black", scrollSnapAlign: "start" }}
    >
      <div>
        <h3 className=" whitespace-nowrap">{song.Name}</h3>
        <p className=" whitespace-nowrap">{song.Artist}</p>
        <p>
          <a href={song.Link}>
            <FontAwesomeIcon icon={faSpotify} />
          </a>
        </p>
      </div>
      <div>
        <p className=" whitespace-nowrap">{song.Album}</p>
        <p className=" whitespace-nowrap">{song.Release_Date.toString()}</p>
      </div>
      <div className="overflow-y-scroll">
        <p>{song.Lyrics}</p>
      </div>
    </li>
  );
};

export default SearchItem;
