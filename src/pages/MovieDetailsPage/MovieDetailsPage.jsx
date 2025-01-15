import { Suspense, useEffect, useState, useRef } from "react";
import {
  useParams,
  Outlet,
  NavLink,
  useLocation,
  Link,
} from "react-router-dom";
import { fetchMovieDetails } from "../../helpers/movies-api";
import css from "./MovieDetailsPage.module.css";
import MovieInfo from "../../components/MovieInfo/MovieInfo";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  const backLinkRef = useRef(location.state ?? "/movie");

  useEffect(() => {
    async function getDetails() {
      try {
        const details = await fetchMovieDetails(movieId);

        if (!details) {
          return <p>Oops, something went wrong. Try again!</p>;
        }

        setMovie(details);
      } catch (error) {
        console.log(error);
      }
    }
    getDetails();
  }, [movieId]);
  return (
    <div>
      <Link to={backLinkRef.current} className={css.goBack}>
        &#8610; Go back
      </Link>
      {movie && <MovieInfo movieInfo={movie} />}
      <div className={css.additionalInfo}>
        <h3>Additional information</h3>
        <ul className={css.infoList}>
          <li className={css.infoItem}>
            <NavLink to="cast" className={css.infoLink}>
              &#10003; Movie Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" className={css.infoLink}>
              &#10003; Movie Reviews
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<div>Loading child route</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
