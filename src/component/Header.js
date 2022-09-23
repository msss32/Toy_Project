import React from "react";
import { Link } from "react-router-dom";
import { Main_img, Join_img, User_img } from "../image";

const Header = ({ path }) => {
  return (
    <div className="header">
      <nav>
        <div className="nav_item">
          <Link to={path}>
            <img src={Main_img} alt="main_img" width={75} />
          </Link>
        </div>
        <div className="nav_item">
          <Link to={path}>
            <img src={Join_img} alt="join_img" width={75} />
          </Link>
        </div>
        <div className="nav_item">
          <Link to={path}>
            <img src={User_img} alt="user_img" width={75} />
          </Link>
        </div>
        <div className="main_title">BrosSoft</div>
      </nav>
    </div>
  );
};

export default Header;
