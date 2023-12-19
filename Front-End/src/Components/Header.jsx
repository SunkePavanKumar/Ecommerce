import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { CgProfile } from "react-icons/cg";
import { MdShoppingCart } from "react-icons/md";
import { useState } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { userReducer } from "../store/userSlice.js";

function Header() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const itemsInCart = useSelector((state) => state.products.cart);
  const itemsLength = itemsInCart.length;
  console.log(userData);
  const [showprofile, setShowProfile] = useState(false);

  function showProfile() {
    setShowProfile(true);
  }

  function closeProfile() {
    setShowProfile(false);
  }

  //when the user click on the logout button the user will be logged out.
  function userLogout() {
    dispatch(userReducer({ type: "logout" }));
    toast.success("User Logged out successful!😲");
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
          <Link to={"/"}>Home</Link>
          <Link to={"/menu/Amaranthus"}>Menu</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
        </nav>
        <div className="flex items-center justify-center md:gap-5 gap-2 text-slate-500 text-xl md:text-2xl">
          <div className="relative">
            <Link to={"/cart"}>
              <MdShoppingCart className="z-50 cursor-pointer" />
            </Link>
            <div className="cart absolute bg-red-500 text-center text-white -top-3 rounded-full text-sm right-1 opacity-80">
              {itemsLength}
            </div>
          </div>
          <div
            className="relative w-5  h-5"
            onMouseEnter={showProfile}
            onMouseLeave={closeProfile}
          >
            {userData.user.success ? (
              <img
                src={userData.user.data.image}
                className=" w-6 h-6 rounded-full shadow-md border-solid border-slate-400 border-2 cursor-pointer"
              />
            ) : (
              <CgProfile className=" cursor-pointer " />
            )}

            {showprofile && (
              <div className=" absolute right-3 shadow-md z-50 py-2 px-2 bg-white flex flex-col">
                {userData &&
                userData.user &&
                userData.user.data &&
                userData.user.data.email === "ammu@gmail.com" ? (
                  <Link
                    to={"/new-product"}
                    className=" text-sm whitespace-nowrap cursor-pointer hover:bg-slate-200"
                  >
                    New Product
                  </Link>
                ) : (
                  <div />
                )}

                {userData.user.success ? (
                  <p
                    className=" text-sm whitespace-nowrap cursor-pointer hover:bg-slate-200"
                    onClick={userLogout}
                  >
                    Logout
                  </p>
                ) : (
                  <Link
                    to={"/login"}
                    className=" text-sm whitespace-nowrap cursor-pointer hover:bg-slate-200"
                  >
                    Log In
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
