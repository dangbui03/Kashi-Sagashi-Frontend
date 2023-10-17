import { artist } from "./Artist";
import { song } from "./Song";
export type album = {
  name: string;
  link: string;
  release_date: Date;
  song: song[];
  artist: artist[];
};
