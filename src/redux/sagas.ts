import { all, call } from "redux-saga/effects";
import authSaga from "./features/auth/authSaga";

export default function* rootSaga(): Generator<unknown, void, unknown> {
  yield all([call(authSaga)]);
}
