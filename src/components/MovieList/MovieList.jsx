import { Link } from "react-router-dom";
export default function MovieList({ movieObj }) {
    return (
        <ul>
            {movieObj.map((movie) => (
                <li key={movie.id}>
                    <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                </li>
            ))}
        </ul>
    );
}
