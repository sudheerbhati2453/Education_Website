import React, { useState } from "react";
import LogoImg from "../assets/images/logo-black.png";
import { LinkData } from "../assets/data/data";
import { NavLink, Link } from "react-router-dom"; 
import { BiShoppingBag } from "react-icons/bi";
import { HiOutlineMenuAlt1, HiViewGrid } from "react-icons/hi";

export const Header = () => {
  const [open, setOpen] = useState(false);

  // Function to handle link clicks in mobile view
  const handleLinkClick = () => {
    setOpen(false); // Close the mobile menu when a link is clicked
  };

  return (
    <>
      <header className="bg-white py-4 text-black sticky z-50 shadow-md top-0 left-0 w-full">
        <div className="container flex justify-between items-center">
          <div className="logo flex items-center gap-6">
            <img src={LogoImg} alt="logo" className="h-5" />
            <div className="category flex items-center text-lg gap-3">
              <HiViewGrid size={20} />
              <span>category</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className={`mobile-view ${open ? "open" : ""}`}>
            <ul className={`flex ${open ? "flex-col" : "items-center"} text-lg gap-6`}>
              {LinkData.map((link) => (
                <li key={link.id} onClick={handleLinkClick}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-primary text-lg" : "text-[18px]"
                    }
                    to={link.url}
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Account Section */}
          <div className="account flex items-center gap-5">
            <button>
              <BiShoppingBag size={30} />
            </button>

            {/* Login Button as Link */}
            <Link to="/login">
              <button className="text-lg">Login</button>
            </Link>

            <button className="open-menu" onClick={() => setOpen(!open)}>
              <HiOutlineMenuAlt1 size={30} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
