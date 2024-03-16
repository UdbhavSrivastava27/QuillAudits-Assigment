import React from "react";
import BodyMainContent from "./BodyMainContent";

const BodyBox3 = () => {
  return (
    <div className=" flex flex-col-reverse md:flex-row mt-14 justify-between gap-4 items-center md:items-start">
      <BodyMainContent />

      <div className=" border-2 m-2 md:mt-14 p-6 rounded-lg border-[#7184FD] text-center md:text-start w-8/12 md:w-4/12 h-fit shadow-md shadow-slate-500 ">
        <h3 className=" text-[#808080]">Headquarters</h3>
        <h1>Switzerland</h1>

        <h3 className=" text-[#808080] mt-10">Chain</h3>
        <h1>Pulse Blockchain</h1>
      </div>
    </div>
  );
};

export default BodyBox3;
