import React from "react";
import "./home.css";
import Image from "next/image";
import logo from "../../../public/assets/images/widget/logo.png";
import group from "../../../public/assets/images/widget/smileman.jpg";
import group2 from "../../../public/assets/images/widget/smilegirl.jpg";
import { IoSend } from "react-icons/io5";
import comunity from "../../../public/assets/images/widget/Community(1).png";
const Home = () => {
  return (
    <div className="home max-h-screen overflow-y-scroll p-3 ">
      <div className="heading p-5 flex items-center justify-between ">
        <Image src={logo} width={34} alt="Picture of the author" />
        <div className="groupImage flex items-center">
          <Image
            className="w-[40px] rounded-full -mr-2 border-[3px] border-[#0355F1] z-20 "
            src={group}
            alt="Picture of the author"
          />
          <Image
            className="w-[40px] rounded-full -mr-2 z-10 border-[3px] border-[#0356f1e2]"
            src={group2}
            alt="Picture of the author"
          />
          <Image
            className="w-[40px] rounded-full  border-[3px] border-transparent"
            src={group}
            alt="Picture of the author"
          />
        </div>
      </div>
      <h2 className="text-white p-5 font-bold text-3xl mt-8">
        <span className="text-[#B7C8E6]">Hello there. </span>
        <br /> How can we help?
      </h2>
      <div className="sentBox cursor-pointer rounded-2xl  flex justify-between items-center p-4 bg-white">
        <div>
          <h6 className="font-medium text-black-900 text-sm">
            Send us a message
          </h6>
          <p className="font-normal text-black-600 text-sm">
            We typically reply within a day
          </p>
        </div>
        <IoSend className="sentIcon text-[#0057FF]" />
      </div>
      <div className="comunity mb-28 mt-3 bg-white rounded-xl">
        <Image className="rounded-t-xl p-4" src={comunity} alt={""} />
        <a href="https://community.intercom.com/">
          <div className="texts text-sm text-black-800 border-t rounded-b-xl p-4 hover:bg-[#E0EBFF]">
            Be sure to check out the Intercom Community for support, plus tips &
            tricks from Intercom users and much more
          </div>
        </a>
      </div>
    </div>
  );
};
export default Home;
