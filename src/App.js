import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import Movie from './pages/movie';
import TvShow from './pages/tv';
import Search from './pages/search';
import MovieLanding from './pages/MovieLanding';
import ErrorPage from './pages/error';
import ViewAll from './pages/viewAll';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/movie",
    element: <MovieLanding />,
    errorElement: <ErrorPage />
  },
  {
    path: "/movie/:id",
    element: <Movie />,
    errorElement: <ErrorPage />
  },
  {
    path: "/tv/:id",
    element: <TvShow />,
    errorElement: <ErrorPage />
  },
  {
    path: "/search",
    element: <Search />,
    errorElement: <ErrorPage />
  },
  {
    path: "/viewAll",
    element: <ViewAll />,
    errorElement: <ErrorPage />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
