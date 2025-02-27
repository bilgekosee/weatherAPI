import "./header.css";
import { LayoutGrid, Bell, MapPin, Search } from "lucide-react";
import CustomizedSwitches from "./CustomSwitch";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-group-one">
        <div className="icons-header">
          <div className="icon-header">
            <LayoutGrid size={20} />
          </div>
          <div className="icon-header">
            <Bell size={20} />
          </div>
          <div className="location-icon">
            <MapPin size={20} />
            Tokyo,Japan
          </div>
        </div>
      </div>
      <div className="header-group-two">
        <div className="search">
          <Search className="search-icon" />
          <input className="search-input" placeholder="Search city" />
        </div>
      </div>
      <div className="header-group-three">
        <CustomizedSwitches />
        <img
          className="profile"
          src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></img>
      </div>
    </div>
  );
};

export default Header;
