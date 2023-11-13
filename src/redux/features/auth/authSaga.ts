import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  loginRequested,
  loginSucceded,
  logoutRequested,
  logoutSucceded,
} from "./authSlice";
import { instanceAxios } from "../../../service";

export function* login({
  payload,
}: ReturnType<typeof loginRequested>): unknown {
  try {
    const response = yield call(instanceAxios.post, "/api/auth/login", payload);
    const walletId = response.data.data.wallet.id;
    yield sessionStorage.setItem("token", response.data.data.access_token);
    console.log("login response data ", response);
    yield put(loginSucceded(walletId));
  } catch (error) {
    console.log("catch", error);
  }
}

export function* logout(): unknown {
  try {
    const response = yield call(instanceAxios.post, "/api/auth/logout");
    sessionStorage.clear();
    !sessionStorage.length && (yield put(logoutSucceded()));
  } catch (error) {
    console.log("catch ", error);
  }
}

export function* onLoginRequested(): Generator<unknown, void, unknown> {
  yield takeLatest(loginRequested, login);
}

export function* onLogoutRequested(): Generator<unknown, void, unknown> {
  yield takeLatest(logoutRequested, logout);
}

export default function* authSaga(): Generator<unknown, void, unknown> {
  yield all([call(onLoginRequested), call(onLogoutRequested)]);
}
