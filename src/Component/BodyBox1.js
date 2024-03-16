import React from "react";

const BodyBox1 = () => {
  return (
    <div className=" flex flex-col md:flex-row mt-16 mx-auto w-8/12 ">
      <div className=" mt-4">
        <div className=" bg-[#FFABC9] ">
          <h1 className=" font-semibold">Before QuillAudits</h1>
        </div>

        <p className="  mt-4">
          Exploits like reentrancy and front-running can let attackers withdraw
          extra funds and manipulate transaction timing for unfair gains
        </p>

        <p className=" text-wrap mt-6">
          Vulnerabilities could allow users to mint CDP tokens or pension shares
          indefinitely, disrupting the system's economic balance.
        </p>
      </div>

      <vr className=" border-2 mx-16"></vr>

      <div className=" mt-4">
        <div className=" bg-[#ABCDFF] ">
          <h1 className=" font-semibold">After QuillAudits</h1>
        </div>

        <p className="  mt-4">
          Implementation of reentrancy protection mechanisms.
        </p>

        <p className=" mt-12 ">
          Ensure precision in decimal handling with standard libraries,
          recalculate accurately, fix logic errors, and secure referral systems
          against exploitation.
        </p>
      </div>
    </div>
  );
};

export default BodyBox1;
