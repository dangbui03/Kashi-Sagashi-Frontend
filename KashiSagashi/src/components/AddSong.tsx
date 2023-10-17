import { useState } from "react";
import { song } from "../model/Song";
import { artist } from "../model/Artist";
import { album } from "../model/Album";
const AddSong = () => {
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
    <section>
      <h1>Add song</h1>
      <form onSubmit={handleSubmit} className="">
        <div className="formControl flex flex-col gap-2">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            onChange={(e) => setSong({ ...song, name: e.target.value })}
            required
            className="text-black rounded-lg"
          />
        </div>
        <div className="formControl flex flex-col gap-2">
          <label htmlFor="lyric">Lyric:</label>
          <input
            type="text"
            name="lyric"
            id="lyric"
            autoComplete="off"
            onChange={(e) => setSong({ ...song, lyric: e.target.value })}
            required
            className="text-black rounded-lg"
          />
        </div>
        <div className="formControl flex flex-col gap-2">
          <label htmlFor="link">Link:</label>
          <input
            type="text"
            name="link"
            id="link"
            autoComplete="off"
            onChange={(e) => setSong({ ...song, link: e.target.value })}
            className="text-black rounded-lg"
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
            className="text-black rounded-lg"
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
            className="text-black rounded-lg"
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
            className="text-black rounded-lg"
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
            className="text-black rounded-lg"
          />
        </div>
        <button>Submit</button>
      </form>
    </section>
  );
};

export default AddSong;
