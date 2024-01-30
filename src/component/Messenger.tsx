import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { BiMessageEdit } from "react-icons/bi";
import { LuExternalLink } from "react-icons/lu";

const Messenger = () => {
  return (
    <>
      <div className="messenger absolute top-16 right-3 rounded-lg p-3 shadow-lg bg-white w-[350px] h-[520px] z-[999999999999]">
        <div className="heading flex items-center justify-between">
          <h6 className="text-2xl font-semibold">Chat</h6>
          <div className="btn-group flex gap-3 items-center justify-center text-xl">
            <button className="">
              <BsThreeDots />
            </button>
            <button>
              <BiMessageEdit />
            </button>
            <button>
              <LuExternalLink />
            </button>
          </div>
        </div>
        <div className="notice">
          <Link
            to={""}
            className="flex gap-2 items-center hover:bg-gray-300 p-2 rounded-md"
          >
            <img
              src="/public/images/person_4.jpg.webp"
              className="w-[45px] h-[45px] rounded-full"
              alt=""
            />
            <div className="texts">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
              alias.
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Messenger;
