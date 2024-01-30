import { IoMdSearch } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { rightSidebar, rightSidebar_2 } from "../data";

const SidebarRight = () => {
  return (
    <div className="sidebarright fixed h-screen overflow-scroll bg-transparent w-[300px] right-0">
      <div className="heading flex justify-between items-center pt-3 text-gray-600">
        <h6 className="text-lg font-semibold ml-2">Contacts</h6>
        <div className="icon-group flex gap-2 items-center justify-center text-xl">
          <button className="p-2 rounded-full hover:bg-slate-300">
            <IoMdSearch />
          </button>
          <button className="p-2 rounded-full hover:bg-slate-300">
            <BsThreeDots />
          </button>
        </div>
      </div>
      <ul>
        {rightSidebar.map((item, id) => (
          <li key={id} className="">
            <a href={item.link}>
              {" "}
              {item.icon} {item.name}{" "}
            </a>
          </li>
        ))}
      </ul>
      <div className="m-2 border-b border-[#c8c8c8c9]"></div>
      <ul>
        <h6 className="text-lg font-semibold ml-2 py-1 text-gray-600">
          Group conversations
        </h6>
        {rightSidebar_2.map((item, id) => (
          <li key={id} className="">
            <a href={item.link}>
              {" "}
              {item.icon} {item.name}{" "}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarRight;
