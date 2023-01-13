import axios from 'axios';
import { getCookie } from 'cookies/Cookies';

const getHeader = () => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${
      getCookie('user') && JSON.parse(getCookie('user'))?.access_token
    }`,
  };
  return headers;
};

export const doPost = async (endPoint, body) => {
  try {
    const result = await axios.post(endPoint, body, {
      headers: getHeader(),
    });

    return result;
  } catch (e) {
    return e.response;
  }
};

export const doGet = async (endPoint) => {
  try {
    const result = await axios.get(endPoint, {
      headers: getHeader(),
    });

    return result;
  } catch (e) {
    return e.response;
  }
};

export const doPut = async (endPoint, body) => {
  try {
    const result = await axios.put(endPoint, body, {
      headers: getHeader(),
    });

    return result;
  } catch (e) {
    return e.response;
  }
};

export const doDelete = async (endPoint, body) => {
  try {
    const result = await axios.delete(endPoint, {
      headers: getHeader(),
      data: body,
    });

    return result;
  } catch (e) {
    return e.response;
  }
};
