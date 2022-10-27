import React from "react";
import "./sidebar.scss";
import { MdOutlineDashboard, MdNotificationsNone } from "react-icons/md";
import { TbUsers, TbBooks, TbNews } from "react-icons/tb";
import { RiLoginBoxLine, RiLogoutBoxRLine } from "react-icons/ri";
import { GiOfficeChair } from "react-icons/gi";
import { BiCalendar } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import { HiLogout } from "react-icons/hi";

import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">BIBLOMAN</span>
        </Link>
      </div>
      <br />
      <div className="center">
        {" "}
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <MdOutlineDashboard className="icon" />
              <span>
                <a>Dashboard</a>
              </span>
            </li>
          </Link>
          <p className="title">Lists</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <TbUsers className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/books" style={{ textDecoration: "none" }}>
            <li>
              <TbBooks className="icon" />
              <span>Books</span>
            </li>
          </Link>

          <p className="title">Services</p>
          <Link to="/returns" style={{ textDecoration: "none" }}>
            <li>
              <RiLoginBoxLine className="icon" />
              <span>Returns</span>
            </li>
          </Link>
          <li>
            <RiLogoutBoxRLine className="icon" />
            <span>Borrows</span>
          </li>

          <li>
            <GiOfficeChair className="icon" />
            <span>Halls</span>
          </li>

          <p className="title">Events</p>
          <li>
            <TbNews className="icon" />
            <span>News</span>
          </li>

          <li>
            <BiCalendar className="icon" />
            <span>Calendars</span>
          </li>

          <li>
            <MdNotificationsNone className="icon" />
            <span>Notifications</span>
          </li>

          <li style={{ marginTop: 120 }}>
            <ImProfile className="icon" />
            <span>My Profile</span>
          </li>
          <Link to="/login" style={{ textDecoration: "none" }}>
          <li>
            <HiLogout className="icon" />
            <span>Logout</span>
          </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
