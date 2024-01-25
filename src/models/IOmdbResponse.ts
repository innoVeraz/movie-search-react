import IMovie from "./IMovie";

export interface IOmdbResponse {
  //Utility service Pick from interface, include values from
  Search: Pick<IMovie, "Poster" | "Title" | "Type" | "Year" | "imdbID">[];
}
