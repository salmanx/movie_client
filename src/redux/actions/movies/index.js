import {
  MOVIES,
  MOVIES_SEARCH,
  SELECTED_CATEGORY,
  SELECTED_RATING
} from "../../constants/movies";

export function getAllMovies(body = {}) {
  return {
    type: MOVIES.MAIN,
    body
  };
}

export function getMoviesBySearch(body = {}) {
  return {
    type: MOVIES_SEARCH.MAIN,
    body
  };
}

export function setSelectedCategory(body = {}) {
  return {
    type: SELECTED_CATEGORY,
    body
  };
}

export function setSelectedRating(body = {}) {
  return {
    type: SELECTED_RATING,
    body
  };
}
