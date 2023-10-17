import { album } from "./Album";
import { artist } from "./Artist";
import { song } from "./Song";

export type band = {
  name: string;
  establish_date: Date;
  country: string;
  artist: artist[];
  song: song[];
  album: album[];
};
