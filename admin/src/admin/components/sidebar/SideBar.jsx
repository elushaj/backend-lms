import React from "react";
import "./sidebar.scss";
import { MdOutlineDashboard, MdNotificationsNone } from "react-icons/md";
import { TbUsers, TbBooks, TbNews } from "react-icons/tb";
import { RiLoginBoxLine, RiLogoutBoxRLine } from "react-icons/ri";
import { GiOfficeChair } from "react-icons/gi";
import { BiCalendar,BiPlus ,BiBookAdd} from "react-icons/bi";
import {BsPersonPlus } from "react-icons/bs";
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
          <Link to="/members" style={{ textDecoration: "none" }}>
            <li>
              <TbUsers className="icon" />
              <span>Members</span>
            </li>
          </Link>
          <Link to="/books" style={{ textDecoration: "none" }}>
            <li>
              <TbBooks className="icon" />
              <span>Books</span>
            </li>
          </Link>
  <Link to="/issues" style={{ textDecoration: "none" }}>
            <li>
              <RiLoginBoxLine className="icon" />
              <span>Issues</span>
            </li>
          </Link>
          <p className="title">Services</p>
        
        
          <Link to="/issues/new" style={{ textDecoration: "none" }}>
            <li>
              <BiPlus className="icon" />
              <span>Add Issues</span>
            </li>
          </Link>
          
          <Link to="/books/new" style={{ textDecoration: "none" }}>
            <li>
              <BiBookAdd className="icon" />
              <span>Add Book</span>
            </li>
          </Link>
          <Link to="/members/new" style={{ textDecoration: "none" }}>
            <li>
              <BsPersonPlus className="icon" />
              <span>Add Members</span>
            </li>
          </Link>
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
