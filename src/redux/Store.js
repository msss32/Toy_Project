import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";

const joinSlice = createSlice({
  name: "join",
  initialState: { joinId: "", joinName: "", joinPw: "" },
  reducers: {
    joinIdInput: (state) => {},
  },
});

const loginSlice = createSlice({
  name: "login",
  initialState: { login: false, loginId: "", loginPw: "" },
  reducers: {
    login: (state) => {
      state.login = true;
    },
  },
});

const rootReducer = combineReducers({
  login: loginSlice.reducer,
  join: joinSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export const loginActions = loginSlice.actions;
export const joinActions = joinSlice.actions;
export default store;
