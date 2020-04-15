import { all } from "redux-saga/effects";
import movieSagas from "./movies";

function* rootSaga() {
  yield all([movieSagas()]);
}

export default rootSaga;
