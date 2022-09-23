import React from "react";
import { Header, Body } from "../component";

const Board = () => {
  return (
    <div>
      <Header
        path_main="/"
        path_join="/join"
        path_board="/board"
        path_login="/login"
        path_user="/mypage"
      />
      <Body></Body>
    </div>
  );
};

export default Board;
