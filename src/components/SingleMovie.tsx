import { ISingleMovieResponse } from "../models/ISingleMovieResponse";

const SingleMovie = (single: ISingleMovieResponse) => {
  return (
    <div>
      <div>
        <h2>{single.Actors}</h2>
        <img src={single.Poster} alt="" />
        {/* Add more movie details as needed */}
      </div>
    </div>
  );
};

export default SingleMovie;
