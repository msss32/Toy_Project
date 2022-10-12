import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: { users: [] },
  reducers: {
    signUp: (state, action) => {
      state.users = state.users.concat(action.payload);
    },
  },
});

const joinSlice = createSlice({
  name: "join",
  initialState: { id: "", pw: "", name: "" },
  reducers: {
    joinId: (state, action) => {
      state.id = action.payload;
    },
    joinPw: (state, action) => {
      state.pw = action.payload;
    },
    joinName: (state, action) => {
      state.name = action.payload;
    },
  },
});

const loginSlice = createSlice({
  name: "login",
  initialState: { id: "", pw: "", isLogin: false },
  reducers: {
    login: (state, action) => {
      state.id = action.payload;
      state.pw = action.payload;
      state.isLogin = true;
    },
    logout: (state) => {
      state.id = "";
      state.pw = "";
      state.isLogin = false;
    },
  },
});

const rootReducer = combineReducers({
  users: userSlice.reducer,
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
