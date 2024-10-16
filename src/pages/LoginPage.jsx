import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [passcode, setPasscode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempted with:", { username, passcode });
  };
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Status Bar */}
      {/* <div className="flex justify-between items-center px-5 py-2 bg-white">
      <span className="text-black text-sm font-medium">9:41</span>
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 bg-black rounded-sm"></div>
        <div className="w-4 h-4 bg-black rounded-sm"></div>
        <div className="w-4 h-4 bg-black rounded-sm"></div>
      </div>
    </div> */}

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-6 pt-8 pb-12">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <img
            src={logo}
            alt="Safe Haven Logo"
            width={80}
            height={40}
            className="h-10 w-auto"
          />
          <span className="text-[#DE5BA7] font-semibold">Safe Haven</span>
        </div>

        <h1 className="text-2xl font-bold mb-2">Login to Safe Haven</h1>
        <p className="text-gray-600 text-sm mb-8">
          Your identity is protected. You can remain anonymous while using the
          platform.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Choose an anonymous username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4F8AFF] focus:border-transparent transition duration-200"
              placeholder="Enter anonymous username"
            />
          </div>

          <div>
            <label
              htmlFor="passcode"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Enter your 4-digit passcode
            </label>
            <input
              type="password"
              id="passcode"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              maxLength={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4F8AFF] focus:border-transparent transition duration-200"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-custom-blue text-white py-3 rounded-full font-medium hover:bg-[#3D69CC] transition duration-200"
          >
            Continue
          </button>
        </form>

        <p className="text-center mt-6">
          Don't have an account?{" "}
          <NavLink
            to="/register"
            className="text-custom-pink font-medium hover:underline transition duration-200"
          >
            Sign up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
