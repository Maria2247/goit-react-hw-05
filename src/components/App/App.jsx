import { Routes, Route, NavLink } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/HomePage";
// import { MoviesPage } from "../../pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
export default function App() {
    return (
        <div>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/movies">Movies</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/movies" element={<MoviesPage />} /> */}
                <Route path="/movie/:movieId" element={<MovieDetailsPage />} />
            </Routes>
        </div>
    );
}
