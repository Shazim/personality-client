import { BASE_URL, API_PATH } from "./config";
import { END_POINTS } from "utils";
import { doGet, doPost, doPut } from "./httpRequests";

const { SIGN_IN, SIGN_UP, QUESTIONS, ATTEMPTS } = END_POINTS;

export const signIn = (data) => {
  return doPost(`${BASE_URL}${API_PATH}${SIGN_IN}`, data);
};

export const getAllQuestions = (data) => {
  return doGet(`${BASE_URL}${API_PATH}${QUESTIONS}`);
};

export const postAttempts = (data) => {
  return doPost(`${BASE_URL}${API_PATH}${ATTEMPTS}`, data);
};

export const signUp = (data) => {
  return doPost(`${BASE_URL}${API_PATH}${SIGN_UP}`, data);
};
