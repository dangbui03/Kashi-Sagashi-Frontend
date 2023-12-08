import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import DeleteButton from "./DeleteButton";
import VerifyButton from "./VerifyButton";
import { useState } from "react";

type Props = {
  song: Song;
};

export default function UnverifiedSongListItem({ song }: Props) {
  const [deleting, setDeleting] = useState(false);
  const [verifying, setVerifying] = useState(false);
  return (
    <>
      <div className=" overflow-x-scroll w-60 h-60 lg:w-80">
        <h3 className=" whitespace-nowrap">Name: {song.Name}</h3>
        <p className=" whitespace-nowrap">Artist: {song.Artist}</p>
        <p className=" whitespace-nowrap">Album: {song.Album}</p>
        <p>
          {song.Link !== " " ? (
            <a href={song.Link}>
              <FontAwesomeIcon icon={faSpotify} size="2xl" />
            </a>
          ) : (
            <></>
          )}
        </p>
      </div>
      <div className="overflow-y-scroll w-96 h-80 lg:w-160">
        <h3>Lyrics:</h3>
        <p className="" style={{ whiteSpace: "pre-line" }}>
          {song.Lyrics}
        </p>
      </div>
      <div className="flex flex-col justify-between h-80 gap-20">
        {!deleting && !verifying && (
          <>
            <VerifyButton
              song={song}
              verifying={verifying}
              setVerifying={setVerifying}
            />
            <DeleteButton
              song={song}
              deleting={deleting}
              setDeleting={setDeleting}
            />
          </>
        )}
        {deleting && !verifying && (
          <DeleteButton
            song={song}
            deleting={deleting}
            setDeleting={setDeleting}
          />
        )}
        {verifying && !deleting && (
          <VerifyButton
            song={song}
            verifying={verifying}
            setVerifying={setVerifying}
          />
        )}
      </div>
    </>
  );
}
