import React from "react";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";

import { Avatar } from "@material-ui/core";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt=""
        />
      </div>
      <div className="header_input">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header_right">
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRc96kcLicYy25CFi7P_ocMargwSC_vjRxIMg&usqp=CAU"
        />
      </div>
    </div>
  );
}

export default Header;
