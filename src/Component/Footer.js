import React from "react";
import backgroundImg from "../Assest/image_2023-01-30_17-13-46 (1).png";

import logo from "../Assest/Logo.png";
import AboutSection from "./AboutSection";
import AuditServices from "./AuditServices";
import QuillEcosystem from "./QuillEcosystem";
import OtherServices from "./OtherServices";
import QuickLinks from "./QuickLinks";
import OurProgrammes from "./OurProgrammes";
import SocialLinks from "./SocialLinks";
import CopyRight from "./CopyRight";

const Footer = () => {
  return (
    <div className=" text-xs md:text-sm bg-blue-950 md:-z-20">
      {/* backgroundImg */}
      <div className=" absolute -z-10">
        <img
          src={backgroundImg}
          alt="BackGorund"
          className=" hidden md:block object-cover bg-black  "
        />
      </div>

      <img src={logo} alt="Logo" className=" mx-10 h-16 md:ml-36 mt-8 " />

      {/* content table */}
      <div className=" mx-auto md:mx-24  text-[#F1F1F1]  flex flex-col md:flex-row justify-center items-center md:justify-around  ">
        <div className=" flex flex-row  items-center  justify-center md:justify-between mx-10 w-10/12 md:w-4/12 ">
          <AboutSection />
          <AuditServices />
        </div>

        <span className=" flex flex-col ">
          <div className=" flex flex-row gap-4 mx-10 md:mx-0 md:gap-32 ">
            <QuillEcosystem />
            <OtherServices />
            <QuickLinks />
          </div>
          <OurProgrammes />
        </span>
      </div>

   
        <SocialLinks />
    

      <hr className=" opacity-10  border-[1px] mx-14 md:mx-40 mt-4"></hr>
      <CopyRight />
    </div>
  );
};

export default Footer;
