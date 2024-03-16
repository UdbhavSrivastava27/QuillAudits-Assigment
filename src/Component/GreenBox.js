import React from "react";

import carpeDiemImg from "../Assest/CD-Pension.png";

const GreenBox = () => {
  return (
    <div>
      <div className=" bg-gradient-to-l from-transparent to-black md:rounded-lg bg-green-800 w-screen md:w-[500px] h-[300px] md:h-[430px]  flex flex-col items-center justify-center p-10 relative ">
       
        <div className="  ">
          <img src={carpeDiemImg} alt="img" />
        </div>

        <div className=  " md:absolute md:bottom-6 md:pr-56  md:mx-10 mt-6 md:mt-0">
          <p className="text-white text-left text-sm">
            Carpe Diem Pension, a blockchain-based retirement fund, offers
            permanent payouts through CDP deposits, with a 4.32% annual
            inflation claimable by depositors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GreenBox;
