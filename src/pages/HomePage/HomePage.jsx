import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../helpers/movies-api";
import MovieList from "../../components/MovieList/MovieList";

export function HomePage() {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        async function getHomePageMovies() {
            try {
                const data = await fetchTrendingMovies();
                if (!data) {
                    return;
                }
                console.log(data.results);
                setTrendingMovies(data.results);
            } catch (error) {
                console.log(error);
            }
        }
        getHomePageMovies();
    }, []);

    return (
        <div>
            <h1>Trending Today</h1>
            <MovieList movieObj={trendingMovies} />
        </div>
    );
}
