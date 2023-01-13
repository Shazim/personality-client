import { END_POINTS } from "utils";
import { doGet, doPost, doPut } from "./httpRequests";
import { BASE_URL, API_PATH } from "./config";

const { EXHIBITIONS } = END_POINTS;

export const getPublicExhibitions = (data) => {
  return doGet(`${BASE_URL}${API_PATH}/items${EXHIBITIONS}${data}`);
};
