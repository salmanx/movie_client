import { MOVIES, MOVIES_SEARCH } from "../../constants/movies";

export function getAllMovies(body = {}) {
  return {
    type: MOVIES.MAIN,
    body,
  };
}

export function getMoviesBySearch(body = {}) {
  return {
    type: MOVIES_SEARCH.MAIN,
    body,
  };
}
