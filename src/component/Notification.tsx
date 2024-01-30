import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";

const Notification = () => {
  return (
    <>
      <div className="notification absolute top-16 right-3 rounded-lg p-3 shadow-lg bg-white w-[350px] h-[520px] z-50">
        <div className="heading flex items-center justify-between">
          <h6 className="text-2xl font-semibold">Notification</h6>
          <button className="text-xl flex items-center justify-center">
            <BsThreeDots />
          </button>
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

export default Notification;
