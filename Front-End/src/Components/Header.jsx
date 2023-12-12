import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { CgProfile } from "react-icons/cg";
import { MdShoppingCart } from "react-icons/md";
import { useState } from "react";

function Header() {
  const [showprofile, setShowProfile] = useState(false);

  function showProfile() {
    setShowProfile(true);
  }

  function closeProfile() {
    setShowProfile(false);
  }
  return (
    <header className="fixed w-full shadow-md h-20 flex items-center justify-between z-50 bg-white">
      <div className=" w-full flex items-center md:ml-6 ml-2">
        <Link to={"/"}>
          <img src={logo} alt="logo" className=" md:h-14 h-7" />
        </Link>
      </div>
      <div className="flex items-center gap-10 md:mr-14 mr-7">
        <nav className="flex items-center  md:text-xl text-base md:gap-10 gap-2 text-slate-500">
          <Link to={"/home"}>Home</Link>
          <Link to={"/menu"}>Menu</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
        </nav>
        <div className="flex items-center justify-center md:gap-5 gap-2 text-slate-500 text-xl md:text-2xl">
          <div className="relative">
            <MdShoppingCart className=" z-50" />
            <div className="cart absolute bg-red-500 text-center text-white -top-3 rounded-full text-sm right-1 opacity-80">
              0
            </div>
          </div>
          <div
            className="relative "
            onMouseEnter={showProfile}
            onMouseLeave={closeProfile}
          >
            <CgProfile className=" cursor-pointer " />
            {showprofile && (
              <div className=" absolute right-3 shadow-md z-50 py-2 px-2 bg-white flex flex-col">
                <Link
                  to={"/new-product"}
                  className=" text-sm whitespace-nowrap cursor-pointer hover:bg-slate-200"
                >
                  New Product
                </Link>
                <Link
                  to={"/login"}
                  className=" text-sm whitespace-nowrap cursor-pointer hover:bg-slate-200"
                >
                  Log In
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
