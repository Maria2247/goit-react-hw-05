import css from "./MovieInfo.module.css";

export default function MovieInfo({ movieInfo }) {
  const { title, release_date, vote_average, overview, poster_path, genres } =
    movieInfo;

  const imageURL = `https://image.tmdb.org/t/p/w400${poster_path}`;
  const releaseYear = new Date(release_date).getFullYear();

  const roundedVote = parseFloat(Number(vote_average).toFixed(2));

  return (
    <div className={css.container}>
      <img src={imageURL} alt="Movie Poster" className={css.poster} />
      <div>
        <h2>
          {title} ({releaseYear})
        </h2>
        <p>User Score {roundedVote}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres &&
            genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
        </ul>
      </div>
    </div>
  );
}
