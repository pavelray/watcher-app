import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import MovieDetails from './pages/MovieDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie/:id",
    element: <MovieDetails />,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
