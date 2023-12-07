import { useContext } from "react";
import { UnverifiedSongContext } from "../context/UnverifiedSongContext";

const useUnverifiedSong = () => {
  return useContext(UnverifiedSongContext);
};

export default useUnverifiedSong;
