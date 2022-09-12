import { Actor } from "./Actor";

export interface Movie {
  name: string;
  year: string;
  actor: Actor;
  rate: number;
}
