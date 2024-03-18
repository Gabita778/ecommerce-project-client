import axios from "axios";
axios.defaults.withCredentials = true;

export const register = async (dispatchUsers, data) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API}/users/signup`,
    data
  );
  dispatchUsers({ type: "LOGIN_SUCCESS", payload: response.data });
};

export const login = async (dispatchUsers, data) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API}/users/login`,
    data
  );
  dispatchUsers({ type: "LOGIN_SUCCESS", payload: response.data });
};

export const forgotPassword = async (data) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API}/users/forgot-password`,
    data
  );
  return response.data;
};

export const resetPassword = async (data) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API}/users/reset-password`,
    data
  );
  return response.data;
};

export const logout = async (dispatchUsers) => {
  await axios.get(`${import.meta.env.VITE_API}/users/logout`);
  dispatchUsers({ type: "LOGOUT" });
};

export const getMe = async (dispatchUsers) => {
  const response = await axios.get(`${import.meta.env.VITE_API}/users/me`);
  if (response.data) {
    dispatchUsers({ type: "LOGIN_SUCCESS", payload: response.data });
  }
};
