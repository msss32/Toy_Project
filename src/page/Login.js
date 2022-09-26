import React from "react";
import { Header } from "../component";

const Login = () => {
  return (
    <div>
      <Header
        path_main="/"
        path_join="/join"
        path_board="/board"
        path_login="/login"
        path_user="/mypage"
      />
    </div>
  );
};

export default Login;
