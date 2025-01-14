import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../helpers/movies-api";
import MovieList from "../../components/MovieList/MovieList";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function getHomePageMovies() {
      try {
        const data = await fetchTrendingMovies();
        if (!data) {
          return;
        }
        setTrendingMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getHomePageMovies();
  }, []);

  return (
    <div>
      <h1 className={css.mainHeader}>Trending Today</h1>
      <MovieList movieObj={trendingMovies} />
    </div>
  );
}
