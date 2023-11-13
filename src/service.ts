import axios, { AxiosHeaders } from "axios";
import { config } from "process";

export const instanceAxios = axios.create({
  baseURL: "https://dev-api.payupme.com",
});
instanceAxios.interceptors.request.use(
  (request) => {
    if (request.url !== "/api/auth/login") {
      const token = sessionStorage.getItem("token");
      // request.headers = {
      //   Authorization: `Bearer ${token}`,
      //   Accept: "application/json",
      // };
      (request.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`);
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
