import { takeLatest, put, call } from "redux-saga/effects";
import AxiosServices from "../../../networks/AxiosService";
import ApiServices from "../../../networks/ApiServices";
import { MOVIES, MOVIES_SEARCH } from "../../constants/movies";

function* moviesSagas(actions) {
  try {
    const result = yield call(
      AxiosServices.get,
      ApiServices.MOVIES_API,
      actions.body,
      true
    ); // true when local server
    yield put({ type: MOVIES.SUCCESS, result: result.data });
  } catch (err) {
    yield put({ type: MOVIES.FAILURE, error: "something went wrong" });
  }
}

function* moviesSearchSagas(actions) {
  try {
    const result = yield call(
      AxiosServices.get,
      ApiServices.MOVIES_SEARCH_API,
      actions.body,
      true
    ); // true when local server
    yield put({ type: MOVIES_SEARCH.SUCCESS, result: result.data });
  } catch (err) {
    yield put({ type: MOVIES_SEARCH.FAILURE, error: "something went wrong" });
  }
}

export default function* movieSagas() {
  yield takeLatest(MOVIES.MAIN, moviesSagas);
  yield takeLatest(MOVIES_SEARCH.MAIN, moviesSearchSagas);
}
