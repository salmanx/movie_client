import { MOVIES, MOVIES_SEARCH } from "../../constants/movies";

const initialState = {
  movies: [],
  loading: null,
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIES.MAIN:
      return {
        ...state,
        movies: state.movies,
        loading: true,
      };

    case MOVIES.SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.result,
      };

    case MOVIES.FAILURE:
      return {
        ...state,
        loading: null,
        movies: [],
      };

    case MOVIES_SEARCH.MAIN:
      return {
        ...state,
        movies: state.movies,
        loading: true,
      };

    case MOVIES_SEARCH.SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.result,
      };

    case MOVIES_SEARCH.FAILURE:
      return {
        ...state,
        loading: null,
        movies: [],
      };

    default:
      return state;
  }
}
