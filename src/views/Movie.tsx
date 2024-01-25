import { useLoaderData } from "react-router-dom";

import IMovie from "../models/IMovie";
import NavBar from "../components/navBar";

const Movie = () => {
  const data = useLoaderData() as IMovie;

  return (
    <>
      <NavBar />
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={data.Poster}
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {data.Title}
            </div>
            <p className="block mt-1 text-sm leading-tight font-light text-slate-500">
              {data.Genre}
            </p>
            <span className="text-sm text-red-700">imdbRating: </span>
            <span className="text-sm text-red-700">{data.imdbRating}</span>
            <p className="mt-3">Plot</p>
            <p className="mt-2 text-black">{data.Plot}</p>
            <p className="mt-8 text-sm ">{data.Actors}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
