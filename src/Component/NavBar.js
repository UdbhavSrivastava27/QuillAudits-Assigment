import React from "react";
import logo from "../Assest/Icon.png";
import { IoIosArrowDown } from "react-icons/io";

const NavBar = () => {
  return (
    <div className="  text-white flex flex-row items-center justify-around  ">
      <div className=" flex flex-row items-center justify-center">
        <img src={logo} alt="logo" className=" m-2 " />
        <h1 className="  text-white text-xl opacity-80 "> QuillAudits</h1>
      </div>

      <div className=" hidden md:flex flex-row space-x-[53.55px] items-center justify-center">
        {" "}
        <div className=" flex flex-row items-center justify-center">
          <h1 className="">Services</h1>

          <IoIosArrowDown className=" mx-1 " />
        </div>
        <h1>Pricing</h1>
        <h1>Our Audits</h1>
        <div className=" flex flex-row items-center justify-center">
          <h1>Tools</h1>
          <IoIosArrowDown className=" mx-1 " />
        </div>
        <div className=" flex flex-row items-center justify-center ">
          <h1>Resources</h1>
          <IoIosArrowDown className=" mx-1 " />
        </div>
        <h1>Refer-Earn-Secure</h1>
      </div>

      <div>
        <button className=" rounded-md m-4 p-3 bg-gradient-to-r from-[#4F37EE] via-[#3F7AF0] to-[#7184FD] font-semibold">
          Request An Audit
        </button>
      </div>

      
    </div>
  );
};

export default NavBar;
