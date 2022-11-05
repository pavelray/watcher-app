import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import Movie from './pages/movie';
import TvShow from './pages/tv';

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
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
