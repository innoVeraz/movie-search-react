export default interface IMovie {
  Title: string;
  Poster?: string;
  Type?: string;
  Year: string;
  imdbID: string;
  Genre: string;
  Rated?: string;
  Released?: string;
  Runtime?: string[];
  Director?: string[];
  Writer?: string[];
  Actors: string[];
  Plot?: string;
  Language?: string[];
  Country?: string[];
  Awards?: string[];
  Ratings: { Source: string; Value: string }[]; // Should be an array of objects
  Metascore?: string;
  imdbRating?: string;
  imdbVotes?: string;
  DVD?: string;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
  totalSeasons?: string; // If it's a series
  Response: string;
}
