import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userAPI from "../api/userAPI";

const user = createSlice({
  name: "users",
  initialState: {
    status: "",
    user: {
      name: "",
      admin: false,
      email: ""
    }
  },
  reducers: {
    getInfo: (state, action) => {
      state.user.name = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAPI.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAPI.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "done";
      });
  }
});

export const fetchAPI = createAsyncThunk(
  "users/fetchAPI",
  async (params, thunkAPI) => {
    let result = await userAPI.request();
    return result;
  }
);

const { reducer, actions } = user;
export const { getInfo } = actions;
export default reducer;
