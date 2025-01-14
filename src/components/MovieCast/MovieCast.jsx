import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCast } from "../../helpers/movies-api";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      try {
        const castData = await fetchCast(movieId);
        const castArray = castData.cast;
        setCast(castArray);
      } catch (error) {
        console.log(error);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <ul className={css.castList}>
      {cast.length > 0 &&
        cast.map((actor) => (
          <li key={actor.id} className={css.castItem}>
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
                className={css.castImage}
              />
            ) : (
              <img
                src="path/to/placeholder/image.jpg"
                alt="No image available"
              />
            )}
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
    </ul>
  );
}
