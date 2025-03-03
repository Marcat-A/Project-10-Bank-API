import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "user",
  initialState: {
    email: "John@Doe.com",
    id: 0,
    password: "azerty123",
    firstName: "John",
    lastName: "Doe",
    pending: false,
    error: false,
    token: "",
  },
  reducers: {
    loginStart: (state) => {
      state.pending = true;
    },
    loginSuccess: (state, action) => {
      state.token = action.payload.body.token;
      state.pending = false;
      state.error = false;
    },
    loginError: (state, action) => {
      state.pending = false;
      state.error = action.payload.message;
    },
    logoutStart: (state) => {
      state.pending = true;
    },
    logoutSuccess: (state) => {
      state.token = "";
      state.pending = false;
      state.error = false;
    },
    logoutError: (state, action) => {
      state.pending = false;
      state.error = action.payload.message;
    },
    signUpStart: (state) => {
      state.pending = true;
    },
    signUpSuccess: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.pending = false;
      state.error = false;
    },
    signUpError: (state) => {
      state.pending = false;
      state.error = true;
    },
    editUserStart: (state) => {
      state.pending = true;
    },
    editUserSuccess: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.pending = false;
      state.error = false;
    },
    editUserError: (state) => {
      state.pending = false;
      state.error = true;
    },

    fetchUserStart: (state) => {
      state.pending = true;
    },
    fetchUserSucces: (state, action) => {
      state.pending = false;
      state.error = false;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.id = action.payload.id;
    },
    fetchUserError: (state, action) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginError,
  logoutStart,
  logoutSuccess,
  logoutError,
  signUpStart,
  signUpSuccess,
  signUpError,
  fetchUserStart,
  fetchUserSucces,
  fetchUserError,
  editUserError,
  editUserStart,
  editUserSuccess,
} = authSlice.actions;
export default authSlice.reducer;
