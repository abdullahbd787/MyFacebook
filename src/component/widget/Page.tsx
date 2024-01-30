"use client";
import React, { useState } from "react";
import { BsFillChatRightTextFill } from "react-icons/bs";
import "./mycomponent/style.css";
import App from "./mycomponent/tabs";
import { IoIosArrowDown } from "react-icons/io";

const Widget = () => {
  const [openchat, setOpenchat] = useState(false);
  const handleopenchat = () => {
    setOpenchat(!openchat);
  };
  const [icon, setIcon] = useState(false);

  return (
    <div>
      <button
        onClick={handleopenchat}
        className="bottom-5 right-4 absolute bg-[#0057FF] text-xl w-[48px] transition-all hover:w-[50px] hover:h-[50px] h-[48px] flex items-center justify-center rounded-full text-white"
      >
        {openchat ? <IoIosArrowDown /> : <BsFillChatRightTextFill />}
      </button>
      {openchat && (
        <div className="chatbox max-w-[400px] overflow-hidden h-[78vh] max-h-[500px] absolute bottom-[76px] shadow-lg	 rounded-xl right-4">
          <App />
        </div>
      )}
    </div>
  );
};
export default Widget;
