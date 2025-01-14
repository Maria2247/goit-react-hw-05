import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  api_key: "13e583082b3ed0cf2871d0676ab057f4",
};

export const fetchTrendingMovies = async () => {
  const respTrend = await axios.get(`/trending/movie/day`);
  return respTrend.data;
};

export const fetchMovieDetails = async (id) => {
  const respDetails = await axios.get(`/movie/${id}`);
  return respDetails.data;
};

export const fetchSearchedMovies = async (queryMovie) => {
  const respSearched = await axios.get(`/search/movie`, {
    params: {
      query: queryMovie,
    },
  });
  return respSearched.data.results;
};

export const fetchCast = async (id) => {
  const respCast = await axios.get(`/movie/${id}/credits`);
  return respCast.data;
};

export const fetchReviews = async (id) => {
  const respRev = await axios.get(`/movie/${id}/reviews`);
  return respRev.data.results;
};
