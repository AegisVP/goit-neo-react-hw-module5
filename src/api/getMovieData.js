// --url 'https://api.themoviedb.org/3/trending/movie/week?language=en-US' \

import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDI0ODA3MjkzMjc1YmVmODNlZGUxNjEzMTFlNzFlMCIsIm5iZiI6MTcyNDAwOTY1Mi4yNTk4OTUsInN1YiI6IjYyY2U4OGZiOGVkYTg3MDA1ZDUyMTk5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5ROBLNx1MPlwxhC59SgDfpkKRcgmPMyjS_EdgHio_1g';
axios.defaults.headers.common['accept'] = 'application/json';
axios.defaults.params = { language: 'en-US' };//, api_key: 'ad24807293275bef83ede161311e71e0' };

export function getTrendingMovies() {
  return axios.get('/trending/movie/week').then(response => response.data);
}

export function searchMovies(query, page) {
  return axios.get('/search/movie', { params: { query, page } }).then(response => response.data);
}

export function getMovieDetails(movieId) {
  return axios.get(`/movie/${movieId}`).then(response => response.data);
}

export function getMovieCast(movieId) {
  return axios.get(`/movie/${movieId}/credits`).then(response => response.data.cast);
}

export function getMovieReviews(movieId, page) {
  return axios.get(`/movie/${movieId}/reviews`, { params: { page } }).then(response => response.data.results);
}
