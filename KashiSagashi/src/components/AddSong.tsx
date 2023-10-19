import { useState } from "react";
import { song } from "../model/Song";
import { artist } from "../model/Artist";
import { album } from "../model/Album";
import { Dispatch, SetStateAction } from "react";
export type AddSongProps = {
  addSong: boolean;
  setAddSong: Dispatch<SetStateAction<boolean>>;
  success: boolean;
  setSuccess: Dispatch<SetStateAction<boolean>>;
};
const AddSong = (AddSongProps: AddSongProps) => {
  let initSong: song = {
    name: "",
    lyric: "",
    link: "",
    release_date: new Date(),
    album: [],
    artist: [],
    band: [],
  };
  const [song, setSong] = useState(initSong);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Success");
  };
  return (
    <section className="">
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-6">
        <div className="formControl flex flex-col gap-2">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            onChange={(e) => setSong({ ...song, name: e.target.value })}
            required
            className="input p-1 rounded-lg"
          />
        </div>
        <div className="formControl flex flex-col gap-2">
          <label htmlFor="lyric">Lyric:</label>
          <textarea
            name="lyric"
            id="lyric"
            onChange={(e) => setSong({ ...song, lyric: e.target.value })}
            required
            className="input p-1 rounded-lg"
            rows={10}
            cols={30}
          ></textarea>
        </div>
        <div className="formControl flex flex-col gap-2">
          <label htmlFor="link">Link:</label>
          <input
            type="text"
            name="link"
            id="link"
            autoComplete="off"
            onChange={(e) => setSong({ ...song, link: e.target.value })}
            className="input p-1 rounded-lg"
          />
        </div>
        <div className="formControl flex flex-col gap-2">
          <label htmlFor="release_date">Release date:</label>
          <input
            type="date"
            name="release_date"
            id="release_date"
            autoComplete="off"
            onChange={(e) =>
              setSong({ ...song, release_date: new Date(e.target.value) })
            }
            className="input p-1 rounded-lg"
          />
        </div>
        <div className="formControl flex flex-col gap-2">
          <label htmlFor="album">Album:</label>
          <input
            type="text"
            name="album"
            id="album"
            autoComplete="off"
            onChange={(e) => setSong({ ...song, album: [...e.target.value] })}
            className="input p-1 rounded-lg"
          />
        </div>
        <div className="formControl flex flex-col gap-2">
          <label htmlFor="artist">Artist:</label>
          <input
            type="text"
            name="artist"
            id="artist"
            autoComplete="off"
            onChange={(e) => setSong({ ...song, artist: [...e.target.value] })}
            className="input p-1 rounded-lg"
          />
        </div>
        <div className="formControl flex flex-col gap-2">
          <label htmlFor="band">Band:</label>
          <input
            type="text"
            name="band"
            id="band"
            autoComplete="off"
            onChange={(e) => setSong({ ...song, band: [...e.target.value] })}
            className="input p-1 rounded-lg"
          />
        </div>
        <button
          onClick={() => {
            AddSongProps.setAddSong(false);
            AddSongProps.setSuccess(true);
          }}
          disabled={!(song.name && song.lyric) ? true : false}
          className="input w-full my-5 rounded-xl disabled:cursor-not-allowed disabled:brightness-50"
        >
          Submit song
        </button>
      </form>
    </section>
  );
};

export default AddSong;
