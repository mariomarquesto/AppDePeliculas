import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const sendLoginRequest = createAsyncThunk("LOGIN", ({email, password}) => {
  return axios
    .post("http://localhost:3001/api/users/login", { email, password })
.then(res=>res.data)
});

export const searchUser = createAsyncThunk("SEARCH_USER", ({ name }) => {
  return axios
    .get(`http://localhost:3001/api/users/${name}`)
    .then((res) => res.data);
});

const userReducer = createReducer([], {
  [sendLoginRequest.fulfilled]: (state, action) => action.payload,
  [searchUser.fulfilled]: (state, action) => action.payload,
});

export default userReducer;
