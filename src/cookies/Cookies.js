import cookie from "js-cookie";

export const setCookie = (key, value, time = 1) => {
  cookie.set(key, value, { expires: time });
};

export const getCookie = (key) => {
  const value = cookie.get(key);
  return value;
};

export const removeCookie = (key) => {
  cookie.remove(key);
};
