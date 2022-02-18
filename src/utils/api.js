import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org";
axios.defaults.params = {
  api_key: "53db85fc1e3cf165027c7c18b2b87133",
  language: "en-US",
};

export const getMovieList = () => {
  return axios
    .get("/3/trending/movie/day")
    .then((res) => res.data.results)
    .catch((error) => {
      throw error;
    });
};

export const getMoviesDetails = (id) => {
  return axios
    .get(`/3/movie/${id}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

export const getMoviesCast = (id) => {
  return axios
    .get(`/3/movie/${id}/credits`)
    .then((res) => res.data.cast)
    .catch((error) => {
      throw error;
    });
};
export const getMoviesReviews = (id) => {
  return axios
    .get(`/3/movie/${id}/reviews`)
    .then((res) => res.data.results)
    .catch((error) => {
      throw error;
    });
};

export const searchMovies = (query) => {
  return axios
    .get(`/3/search/movie?query=${query}`)
    .then((res) => res.data.results)
    .catch((error) => {
      throw error;
    });
};
