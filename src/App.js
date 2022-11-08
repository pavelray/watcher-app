import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import Movie from './pages/movie';
import TvShow from './pages/tv';
import Search from './pages/search';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  },
  {
    path: "/tv/:id",
    element: <TvShow />,
  },
  {
    path: "/search",
    element: <Search />,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
