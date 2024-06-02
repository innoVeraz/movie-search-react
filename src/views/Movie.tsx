import { useLoaderData, useNavigate } from "react-router-dom";
import IMovie from "../models/IMovie";
import Header from "../components/Header";
import { FaBackward } from "react-icons/fa";

const Movie = () => {
  const data = useLoaderData() as IMovie;
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex items-center justify-center text-xl text-sky-200 bg-black">
        <FaBackward
          onClick={handleBackClick}
          className="cursor-pointer hover:brightness-50 active:translate-y-5 text-3xl animate-fade-left animate-ease-linear"
        />
        <Header />
      </div>

      <div className="max-w-md mx-auto bg-white shadow-md mt-12 mb-12 overflow-hidden md:max-w-2xl">
        <div className="flex flex-row">
          <div className="md:shrink-0">
            <img
              className="w-30 h-50 object-cover md"
              src={data.Poster}
              alt="Movie Poster"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {data.Title}
            </div>
            <p className="block mt-1 text-xs leading-tight text-slate-500">
              {data.Genre}
            </p>
            <span className="text-xs text-red-700">imdbRating: </span>
            <span className="text-xs text-red-700">{data.imdbRating}</span>
            <p className="mt-2 text-sm">{data.Plot}</p>
            <p className="mt-8 text-sm">{data.Actors}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
