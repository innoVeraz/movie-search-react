import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Movies from "./views/Movies";
import Movie from "./views/Movie";
import { getMovieByID } from "./services/movieService";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Movies,
  },
  {
    path: "/movie/:id",
    loader: ({ params }) => {
      if (!params.id) throw new Error("Id not found");
      return getMovieByID(params.id);
    },
    Component: Movie,
  },
]);

function App() {
  return (
    <>
      <RouterProvider
        router={router}
        fallbackElement={<p>Loading...</p>}
      ></RouterProvider>
    </>
  );
}

export default App;
