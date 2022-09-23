import React from "react";
import { Link } from "react-router-dom";
import { Join_img, Board_img, Login_img, User_img } from "../image";

const Header = ({
  path_join,
  path_board,
  path_main,
  path_login,
  path_user,
}) => {
  return (
    <div className="header">
      <nav className="nav_bar">
        <div className="nav_box">
          <Link to={path_join}>
            <img className="nav_item" src={Join_img} alt="join_img" />
          </Link>
        </div>
        <div className="nav_box">
          <Link to={path_board}>
            <img className="nav_item" src={Board_img} alt="board_img" />
          </Link>
        </div>
        <div className="nav_box main_title">
          <Link to={path_main}>Bros Soft</Link>
        </div>
        <div className="nav_box">
          <Link to={path_login}>
            <img className="nav_item" src={Login_img} alt="login_img" />
          </Link>
        </div>
        <div className="nav_box">
          <Link to={path_user}>
            <img className="nav_item" src={User_img} alt="user_img" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
