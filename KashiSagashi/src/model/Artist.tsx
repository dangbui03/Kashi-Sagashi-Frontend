import { song } from "./Song";
import { album } from "./Album";
export type artist = {
  name: string;
  date_of_birth: Date;
  sex: boolean;
  country: string;
  role: string[];
  song: song[];
  album: album[];
};
