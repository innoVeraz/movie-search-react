import { ChangeEvent, FormEvent, useState } from "react";

import { getMoviesData } from "../services/movieService";
import { IOmdbResponse } from "../models/IOmdbResponse";
import { MovieList } from "./MovieList";
import { Link } from "react-router-dom";

export type emptySearchState = {
  notFound: boolean;
  message: string;
};

export const MovieSearchManager = () => {
  const [movies, setMovies] = useState<IOmdbResponse["Search"] | []>([]);
  const [userInput, setUserInput] = useState("");
  const [notFound, setNotFound] = useState<emptySearchState>({
    notFound: false,
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userInput.length < 3) {
      setNotFound({
        notFound: true,
        message: "Search field must contain at least three characters!",
      });
      return;
    }

    try {
      const response = await getMoviesData(userInput);
      const moviesData = response.Search || [];
      setMovies(moviesData);
    } catch (error) {
      console.error("Error fetching movie data:", error);
      setMovies([]);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
    setNotFound({ notFound: true, message: "" });
  };

  const listItems = movies.map((movie) => (
    <li className=" flex flex-col  p-3  " key={movie.imdbID}>
      <Link to={`movie/${movie.imdbID}`}>
        <img className="rounded-lg" src={movie.Poster}></img>
      </Link>
      <div>
        <p className="text-sm pt-3">{movie.Title}</p>
        <p>{movie.Year}</p>
      </div>
    </li>
  ));

  return (
    <MovieList
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
      userInput={userInput}
      listItems={listItems}
      notFound={notFound}
    />
  );
};
