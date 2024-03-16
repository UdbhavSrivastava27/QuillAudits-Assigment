import React from "react";
import { IoMail } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const AboutSection = () => {
  return (
    <div className=" flex flex-col items-start justify-start w-10/12 md:w-[238px] ">
      <div className=" w-fit ">
        <h1 className=" font-semibold mt-8 md:text-lg ">More About Quill</h1>

        <hr className=" border-b-2 border-[#2D83EE] mt-1"></hr>
      </div>

      <div className=" flex flex-col space-y-2 mt-4">
        <h1>About Us</h1>

        <h1>FAQs</h1>

        <h1>Blockchains We Aduit</h1>
      </div>

      <div className=" mt-6">
        <h1 className=" text-lg">Contact Us:</h1>
      </div>

      <div className=" flex flex-row items-center justify-center mt-4">
        <IoMail size={20} />
        <h1 className=" mx-2 underline">audits@quillhash.com</h1>
      </div>

      <div className=" flex flex-row items-center justify-center mt-4 ">
        <FaTelegramPlane size={20} />
        <h1 className=" mx-2 underline">t.me/quillaudits</h1>
      </div>

      <div className=" flex flex-row items-center justify-center mt-4">
        <FaLocationDot size={20}/>
        <h1 className=" font-semibold mx-2"> Our Location:</h1>
      </div>
      <p className=" mt-1 pr-12 text-wrap">
        Office 104/105 Level 1, Emaar Square, Building 4 Sheikh Mohammed Bin
        Rashid Boulevard Downtown Dubai, United Arab Emirates P.O box: 416654
      </p>
    </div>
  );
};

export default AboutSection;
