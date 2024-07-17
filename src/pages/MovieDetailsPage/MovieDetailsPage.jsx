import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../helpers/movies-api";

export default function MovieDetailsPage() {
    const [movieInfo, setMovieInfo] = useState({});
    const { movieId } = useParams();
    console.log("id", movieId);
    useEffect(() => {
        async function getDetails() {
            try {
                const details = await fetchMovieDetails(movieId);
                // const movieDetails = details.movieId;
                // console.log(movieDetails);
                if (!details) {
                    return <p>Oops, something went wrong. Try again!</p>;
                }
                setMovieInfo(details);
            } catch (error) {
                console.log(error);
            }
        }
        getDetails();
    }, [movieId]);

    const imageURL = `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`;

    const { original_title, release_date, vote_average, overview, genres } = movieInfo;

    const releaseYear = new Date(release_date).getFullYear();

    return (
        <div>
            <button>
                <Link to="/">Go back</Link>
            </button>
            <div>
                <img src={imageURL} alt="Movie Poster" />
                <div>
                    <h2>
                        {original_title} ({releaseYear})
                    </h2>
                    <p>User Score {vote_average}</p>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <h4>Genres</h4>
                    <ul>{genres && genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}</ul>
                </div>
            </div>
            <div>
                <p>Additional information</p>
                <ul>
                    <li>Movie Cast</li>
                    <li>Movie Review</li>
                </ul>
            </div>
        </div>
    );
}
