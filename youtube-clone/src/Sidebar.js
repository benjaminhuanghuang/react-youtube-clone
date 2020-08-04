import React from "react";

import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

import SidebarRow from "./SidebarRow";

import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow title="Home" Icon={HomeIcon} selected />
      <SidebarRow title="Treading" Icon={WhatshotIcon} />
      <SidebarRow title="Subscription" Icon={SubscriptionsIcon} />
      <hr/>
      <SidebarRow title="Library" Icon={VideoLibraryIcon} />
      <SidebarRow title="History" Icon={HistoryIcon} />
      <SidebarRow title="Your videos" Icon={OndemandVideoIcon} />
      <SidebarRow title="Watch Later" Icon={WatchLaterIcon} />
      <SidebarRow title="Liked videos" Icon={ThumbUpAltOutlinedIcon} />
      <SidebarRow title="Show more" Icon={ExpandMoreOutlinedIcon} />
      <hr/>
    </div>
  );
}

export default Sidebar;
