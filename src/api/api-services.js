import { BASE_URL, API_PATH } from "./config";
import { END_POINTS } from "utils";
import { doGet, doPost, doPut } from "./httpRequests";

const { SIGN_IN, SIGN_UP } = END_POINTS;

export const signIn = (data) => {
  return doPost(`${BASE_URL}${API_PATH}${SIGN_IN}`, data);
};

export const signUp = (data) => {
  return doPost(`${BASE_URL}${API_PATH}${SIGN_UP}`, data);
};
