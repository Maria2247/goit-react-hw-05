import { NavLink, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";
export default function MovieList({ movieObj }) {
  const location = useLocation();
  return (
    <ul className={css.movieList}>
      {movieObj.map((movie) => (
        <li key={movie.id}>
          <NavLink
            to={`/movie/${movie.id}`}
            state={location}
            className={css.movieItem}
          >
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
