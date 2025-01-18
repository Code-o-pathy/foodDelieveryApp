import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const HeadingComponent = () => {
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  // const data = useContext(UserContext);
  // console.log(loggedInUser);

  const online = useOnlineStatus();
  // let loginBtnText="login"
  const [loginBtnText, setLoginBtnText] = useState("Login");
  useEffect(() => {}, [loginBtnText]);
  return (
    <>
      <div className="header flex justify-between bg-pink-100 h-[80px]">
        <div className="logo-container flex items-center">
          {/* <img className="logo" src={image}/>   --how to use saved images*/}
          <img className="logo w-32" src={LOGO_URL} alt="logo" />
        </div>

        <div className="nav-items flex items-center">
          <ul className="flex justify-between">
            <li className="p-4 m-5">
              <Link to={"/"}> Home</Link>
            </li>

            <li className="p-4 m-5">
              <Link to={"/about"}>About </Link>
            </li>

            <li className="p-4 m-5">
              <Link to={"/contact"}>Contact </Link>
            </li>

            <li className="p-4 m-5">
              <Link to={"/grocery"}>Grocery </Link>
            </li>
            <li className="p-4 m-5">
              <Link to={"/cart"}>Cart ({cartItems.length}) </Link>
            </li>

            <button
              className="loginBtn p-4 m-5"
              onClick={() => {
                loginBtnText == "Login"
                  ? setLoginBtnText("Logout")
                  : setLoginBtnText("Login");
              }}
            >
              {loginBtnText}
            </button>

            <li className="p-4 m-5 ">{loggedInUser}</li>

            <li className="p-4 m-5">{online ? "🟩" : "⭕"}</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default HeadingComponent;
