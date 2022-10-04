import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { users: [] },
  reducers: {
    signUp: (state, action) => {
      state.users = state.users.concat(action.payload);
    },
  },
});

const joinSlice = createSlice({
  name: "join",
  initialState: { joinId: "", joinPw: "", joinName: "" },
  reducers: {
    joinInputId: (state, action) => {
      state.joinId = action.payload;
    },
    joinInputPw: (state, action) => {
      state.joinPw = action.payload;
    },
    joinInputName: (state, action) => {
      state.joinName = action.payload;
    },
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
  user: userSlice.reducer,
  login: loginSlice.reducer,
  join: joinSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export const userActions = userSlice.actions;
export const loginActions = loginSlice.actions;
export const joinActions = joinSlice.actions;
export default store;
