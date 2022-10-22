import React from "react";
import logo from '../../../src/logo.svg';
import Cart from '../assets/cart.svg';
import UserProfile from '../assets/userProfile.svg';




const Navbar = () => {
    return(
        <div className="navbar mx-2">
            <div>
            <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div>
            <input type="text" placeholder="Search"/>
            </div>
         <div>
            <img src={Cart} className="p-4"/>
            <img src={UserProfile} className="ml-4"/>
         </div>
        </div>

    )

}
export default Navbar;