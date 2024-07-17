import MovieList from "../../components/MovieList/MovieList";
import { fetchSearchedMovies } from "../../helpers/movies-api";
import { useEffect, useState } from "react";

export default function MoviesPage() {
    const [searchedMovies, setSearchedMovies] = useState([]);

    useEffect(() => {
        async function getSearchedMovies() {
            try {
                const data = await fetchSearchedMovies();
                if (!data) {
                    console.log("NO Searched Movies");
                    return;
                }
                setSearchedMovies(data);
            } catch (error) {
                console.log(error);
            }
        }
        getSearchedMovies();
    }, []);

    return <MovieList movieObj={searchedMovies} />;
}
