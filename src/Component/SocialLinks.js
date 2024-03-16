import React from "react";
import socialLinkImg2 from "../Assest/Image 1.png";
import socialLinkImg1 from "../Assest/Image 2.png";

import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { GrReddit } from "react-icons/gr";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className=" mx-20  md:mx-40 mt-8  md:flex flex-row items-center md:justify-between">
      <div className="hidden md:flex flex-row items-center  justify-start">
        <img src={socialLinkImg1} alt="advtisment" className=" w-32 " />
        <img src={socialLinkImg2} alt="advtisment" className=" w-36 mx-8" />
      </div>

      <div className=" text-white flex flex-row text-2xl space-x-6 mt-4">
        <FaXTwitter />
        <FaLinkedin />
        <FaTelegramPlane />
        <FaMedium />
        <GrReddit />
        <FaDiscord />
        <FaYoutube />
      </div>
    </div>
  );
};

export default SocialLinks;
