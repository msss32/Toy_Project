import React from "react";
import { Link } from "react-router-dom";
import { Join_ico, Board_ico, Login_ico, User_ico } from "../image";

const Header = ({
  path_join,
  path_board,
  path_main,
  path_search,
  path_user,
}) => {
  return (
    <div className="header">
      <nav className="nav_bar">
        <div className="nav_box">
          <Link to={path_join}>
            <img className="nav_item" src={Join_ico} alt="join_ico" />
          </Link>
        </div>
        <div className="nav_box">
          <Link to={path_board}>
            <img className="nav_item" src={Board_ico} alt="board_ico" />
          </Link>
        </div>
        <div className="nav_box main_title">
          <Link to={path_main}>Bros Soft</Link>
        </div>
        <div className="nav_box">
          <Link to={path_search}>
            <img className="nav_item" src={Login_ico} alt="login_ico" />
          </Link>
        </div>
        <div className="nav_box">
          <Link to={path_user}>
            <img className="nav_item" src={User_ico} alt="user_ico" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
