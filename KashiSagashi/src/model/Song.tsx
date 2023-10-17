import { album } from "./Album";
import { artist } from "./Artist";
import { band } from "./Band";

export type song = {
  name: string;
  lyric: string;
  link: string;
  release_date: Date;
  album: album[] | string[];
  artist: artist[] | string[];
  band: band[] | string[];
  extendedView?: boolean;
};
