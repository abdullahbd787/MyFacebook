import { FaFacebook } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { MdHomeFilled } from "react-icons/md";
import { RxVideo } from "react-icons/rx";
import { LuBookMarked } from "react-icons/lu";
import { HiUserGroup } from "react-icons/hi2";
import { SiYoutubegaming } from "react-icons/si";
import { CgMenuGridO } from "react-icons/cg";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Notification from "./Notification";
import Messenger from "./Messenger";
import { mainMenu } from "../data";

const Navbar = () => {
  const { pathname } = useLocation();

  const [notice, setNotice] = useState(false);
  const [message, setMessage] = useState(false);
  const ShowNotification = () => {
    setNotice(!notice);
    setMessage(false);
  };
  const ShowMessenger = () => {
    setMessage(!message);
    setNotice(false);
  };
  return (
    <header>
      <div className="nav z-50 fixed right-0 left-0 top-0  max-w-[1400px] px-5 h-14 bg-white shadow-lg text-black font-medium text-base flex items-center justify-between">
        <div className="left-item flex items-center gap-4">
          <button className="text-blue-600 text-4xl font-bold">
            <FaFacebook />
          </button>
          <div className="searchBox flex items-center gap-2 justify-center text-black  border rounded-3xl bg-slate-200 p-2">
            <IoMdSearch className="text-xl text-gray-600" />
            <input
              className="outline-none bg-transparent text-black font-normal"
              type="text"
              placeholder="Search Facebook"
            />
          </div>
        </div>
        <ul className="main-menu flex gap-1 items-center justify-center text-2xl">
          {mainMenu.map((item, id) => (
            <li
              key={id}
              className={`${item.link.includes(pathname) && "active"}`}
            >
              <Link className="" to={item.link}>
                <abbr title={item.name}>{item.icon}</abbr>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="right-menu flex items-center justify-center gap-4">
          <li className="menu-list">
            <a
              href=""
              className="p-2 rounded-full bg-gray-200 flex items-center justify-center text-2xl"
            >
              <CgMenuGridO />
            </a>
          </li>
          <li className="menu-list z-50">
            <Link
              className="relative p-2 rounded-full bg-gray-200 flex items-center justify-center text-2xl"
              onClick={ShowMessenger}
              to={""}
            >
              <FaFacebookMessenger />
            </Link>
            {message && <Messenger />}
          </li>
          <li className="menu-list z-50">
            <Link
              className="relative z-50 p-2 rounded-full bg-gray-200 flex items-center justify-center text-2xl"
              onClick={ShowNotification}
              to={""}
            >
              <IoMdNotifications />
            </Link>
            {notice && <Notification />}
          </li>
          <li className="menu-list cursor-pointer">
            <Link
              className=" rounded-full flex items-center justify-center text-2xl"
              to={""}
            >
              <img
                className="h-10 w-10 rounded-full"
                src="/public/images/person_4.jpg.webp"
                alt="Profile_img"
              />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
