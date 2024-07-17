import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
    api_key: "13e583082b3ed0cf2871d0676ab057f4",
};

export const fetchTrendingMovies = async () => {
    const respTrend = await axios.get(`/trending/movie/week`);
    console.log(respTrend.data);
    return respTrend.data;
};

export const fetchMovieDetails = async (id) => {
    const respDetails = await axios.get(`/movie/${id}`);
    console.log(respDetails.data);
    return respDetails.data;
};

export const fetchSearchedMovies = async (queryMovie) => {
    const respSearched = await axios.get(`/search/movie`, {
        params: {
            query: queryMovie,
        },
    });
    console.log(respSearched);
    return respSearched;
};
