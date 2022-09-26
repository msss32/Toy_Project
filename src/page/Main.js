import React from "react";
import { Header } from "../component";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header
        path_main="/"
        path_join="/join"
        path_board="/board"
        path_login="/login"
        path_user="/mypage"
      />
      <div className="main">
        <div className="main_t">
          Bros Soft를
          <br />
          <br />
          방문해주신
          <br />
          <br /> 여러분을 환영합니다!
          <br />
          <br />
          <button>
            <Link to></Link>회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
