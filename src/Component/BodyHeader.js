import React from "react";

import PensionBoxImg from "../Assest/CD-Pension-black.png";
import BodyHeaderBox from "./BodyHeaderBox";
import { FiArrowRight } from "react-icons/fi";
import GreenBox from "./GreenBox";


const BodyHeader = () => {
  return (
    <div className="  flex flex-col  justify-center mt-16 mx-auto  w-8/12">
      <div className="relative flex flex-col md:flex-row items-center ">
        <GreenBox />

        <div className=" flex  justify-center absolute md:top-10   md:left-[420px] bg-white rounded-md md:p-2">
          <img src={PensionBoxImg} alt=" PensionBockImg" className=" self-center" />

        </div>

        <BodyHeaderBox />
      </div>
      <div className=" flex flex-row space-x-2  text-xs md:text-base items-center  mt-8 text-white mb-2 justify-start ">
        <h1 className=" opacity-65">QuillAudits</h1>
        <FiArrowRight className=" opacity-60" />
        <h1 className=" opacity-60">Resources</h1>
        <FiArrowRight className=" opacity-60" />
        <h1 className=""> Case Studies</h1>
        <FiArrowRight />
      </div>
    </div>
  );
};

export default BodyHeader;
