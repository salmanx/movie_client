import {
  MOVIES,
  MOVIES_SEARCH,
  SELECTED_CATEGORY,
  SELECTED_RATING
} from "../../constants/movies";

const initialState = {
  movies: [],
  selectedCategory: {},
  setSelectedRating: null,
  loading: null
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIES.MAIN:
      return {
        ...state,
        movies: state.movies,
        loading: true
      };

    case MOVIES.SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.result
      };

    case MOVIES.FAILURE:
      return {
        ...state,
        loading: null,
        movies: []
      };

    case MOVIES_SEARCH.MAIN:
      return {
        ...state,
        movies: state.movies,
        loading: true
      };

    case MOVIES_SEARCH.SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.result
      };

    case MOVIES_SEARCH.FAILURE:
      return {
        ...state,
        loading: null,
        movies: []
      };

    case SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.body
      };

    case SELECTED_RATING:
      return {
        ...state,
        setSelectedRating: action.body
      };

    default:
      return state;
  }
}
