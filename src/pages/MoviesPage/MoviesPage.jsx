import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import MovieSearch from "../../components/MovieSearch/MovieSearch";
import { fetchSearchedMovies } from "../../helpers/movies-api";
import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(false);

  const queryFilter = searchParams.get("query") ?? "";

  useEffect(() => {
    async function fetchMovies(queryFilter) {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchSearchedMovies(queryFilter);
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies(queryFilter);
  }, [queryFilter]);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(queryFilter.toLowerCase())
    );
  }, [queryFilter, movies]);

  const handleSearch = async (newQuery) => {
    setSearchParams({ query: newQuery });
  };
  const handleClear = () => {
    setSearchParams({});
    setMovies([]);
  };
  return (
    <div className={css.container}>
      <MovieSearch
        value={queryFilter}
        onSearch={handleSearch}
        onClear={handleClear}
      />
      {loading && <div>Movies are loading</div>}
      {error && <div>Oops, something went wrong</div>}
      {movies.length > 0 && <MovieList movieObj={filteredMovies} />}
    </div>
  );
}
