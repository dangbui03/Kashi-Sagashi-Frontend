import { useContext } from "react";
import { UnverifiedSongOptiContext } from "../context/UnverifiedSongOptiContext";

const useUnverifiedSongOpti = () => {
  return useContext(UnverifiedSongOptiContext);
};

export default useUnverifiedSongOpti;
