import { createBrowserRouter } from "react-router-dom";
import About from "./pages/about";
import ErrorPage from "./pages/error";
import Home from "./pages/home";
import Movie from "./pages/movie";
import MovieLanding from "./pages/MovieLanding";
import Search from "./pages/search";
import TvShow from "./pages/tv";
import TvLanding from "./pages/TvLanding";
import ViewAll from "./pages/viewAll";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/movie",
    element: <MovieLanding />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tv",
    element: <TvLanding />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tv/:id",
    element: <TvShow />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/search",
    element: <Search />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/viewAll",
    element: <ViewAll />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
]);


export default router;