import React from "react";
import logo from "../../../src/logo.svg";
import Cart from "../assets/cart.svg";
import UserProfile from "../assets/userProfile.svg";
import { PopupMenu } from "react-simple-widgets";
import ProfileMenu from "../Profile";

const Navbar = () => {
  return (
    <div className="navbar mx-2">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div>
        <input className="serchBar" type="text" placeholder="Search" />
      </div>
      <div>
        <img src={Cart} className="p-4" />
        <PopupMenu>
          <img src={UserProfile} className="ml-4" />
          <ProfileMenu />
        </PopupMenu>
      </div>
    </div>
  );
};
export default Navbar;
