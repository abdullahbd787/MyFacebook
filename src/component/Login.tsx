import { useState } from "react";
import CreateAccount from "./CreateAccount";
interface loggedInProps {
  setIsLoggedIn: (value: boolean) => void;
}

const Login = ({ setIsLoggedIn }: loggedInProps) => {
  const [first, setfirst] = useState<boolean>(false);
  const ShowSignup = (value: boolean) => {
    setfirst(value);
  };

  return (
    <div className="bg-[#FFFFFF]">
      <div
        className={`max-w-[1000px] mx-auto flex items-center justify-center h-screen gap-10 ${
          first ? "opacity-[0.3]" : ""
        }`}
      >
        <div className="left">
          <h1 className="text-6xl text-blue-600 font-bold">Facebook</h1>
          <h6 className="text-3xl font-normal">
            Facebook helps you connect and share with the people in your life.
          </h6>
        </div>
        <div className="w-[600px]">
          <div className="right card rounded-xl shadow-md p-4 flex flex-col gap-5">
            <input
              className="outline-cyan-600 p-3 focus:outline outline-[0.5px] rounded-md border"
              type="email"
              placeholder="Email address or phone number"
            />
            <input
              className="outline-cyan-600 p-3 focus:outline outline-[0.5px] rounded-md border"
              type="text"
              placeholder="Password"
            />
            <button className="text-white bg-blue-600 rounded-md p-3 font-bold text-xl">
              Log in
            </button>
            <a className="text-center hover:underline text-blue-600" href="#">
              Forgotten password
            </a>
            <hr />
            <button
              onClick={() => ShowSignup(true)}
              className="bg-green-600 hover:bg-green-700 text-white  rounded-md p-3 font-semibold w-[250px] mx-auto text-lg"
            >
              Create new account
            </button>
          </div>
          <p className="mt-5">
            <a className="hover:underline font-semibold text-gray-900" href="#">
              Create a Page
            </a>{" "}
            for a celebrity, brand or business.
          </p>
        </div>
      </div>
      {first && (
        <CreateAccount
          setIsLoggedIn={setIsLoggedIn}
          ShowSignup={(value: boolean) => ShowSignup(value)}
        />
      )}
    </div>
  );
};

export default Login;
