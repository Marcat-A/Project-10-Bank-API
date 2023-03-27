import axios from "axios";
import {
  loginStart,
  loginError,
  loginSuccess,
  signUpError,
  signUpStart,
  signUpSuccess,
  fetchUserStart,
  fetchUserSucces,
  fetchUserError,
} from "./authSlice";

export const login = async (user, dispatch, handleError, handleValid) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      user
    );
    dispatch(loginSuccess(res.data));
    handleValid(res.data.message);
  } catch (err) {
    handleError(`${err}`);
    dispatch(loginError(err));
  }
};

export const fetchUser = async (token, dispatch, handleError, handleValid) => {
  dispatch(fetchUserStart());
  try {
    axios.defaults.headers.common["Authorization"] = `Bearer${token}`;
    const res = await axios.post("http://localhost:3001/api/v1/user/profile");
    handleValid(res.data.message);
    dispatch(fetchUserSucces(res.data.body));
  } catch (err) {
    handleError(`${err}`);
    dispatch(fetchUserError(err));
  }
};
