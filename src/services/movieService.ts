import axios from "axios";
import { IOmdbResponse } from "../models/IOmdbResponse";

import IMovie from "../models/IMovie";

const BASEURL = "https://www.omdbapi.com/?apikey=4a05f679&";

export async function getMoviesData(
  searchText: string
): Promise<IOmdbResponse> {
  const response = await axios.get<IOmdbResponse>(`${BASEURL}s=${searchText}`);
  console.log(response.data);
  return response.data;
}

export async function getMovieByID(imdbID: string) {
  const response = await axios.get<IMovie>(`${BASEURL}i=${imdbID}`);
  console.log(response.data);

  return response.data;
}
