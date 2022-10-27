import React, { useContext } from "react";
import "./navbar.scss";
import {
  MdSearch,
  MdLanguage,
  MdNotificationsNone,
  MdOutlineDarkMode,
  MdMailOutline,
} from "react-icons/md";
import { DarkModeContext } from "../../context/darkModeContext";
const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <MdSearch className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <MdLanguage className="icon" /> <span>English</span>
          </div>
          <div className="item">
            <MdOutlineDarkMode
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <MdNotificationsNone className="icon" />
            <div className="counter">1</div>
          </div>

          <div className="item">
            <MdMailOutline className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
