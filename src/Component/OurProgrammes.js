import React from "react";

const OurProgrammes = () => {
  return (
    <div className=" mx-10">
      <div className=" w-fit ">
        <h1 className=" font-semibold mt-8 tex md:text-xl ">Our Programmes</h1>

        <hr className=" border-b-2 border-[#2D83EE] mt-1"></hr>
      </div>


  <div className=" flex flex-col md:flex-row items-center justify-center gap-x-4 ">

  
      <div className="  w-full text-center md:w-fit rounded-md mt-4 p-3 bg-gradient-to-r from-[#4F37EE] via-[#3F7AF0] to-[#7184FD] md:px-6 font-semibold ">
      Refer-Earn-Secure
      </div>

      <div className=" w-full text-center md:w-fit rounded-md mt-4 p-3 bg-gradient-to-r from-[#4F37EE] via-[#3F7AF0] to-[#7184FD] px-6 font-semibold">
      WAGSI Grants
      </div>


      <div className="w-full text-center md:w-fit rounded-md mt-4 p-3 bg-gradient-to-r from-[#4F37EE] via-[#3F7AF0] to-[#7184FD] px-6 font-semibold">
      Ambassador Program
      </div>

      <div className="w-full text-center md:w-fit rounded-md mt-4 p-3 bg-gradient-to-r from-[#4F37EE] via-[#3F7AF0] to-[#7184FD] px-6 font-semibold">
      Partnership Program
      </div>

      </div>
    </div>
    
  );
};

export default OurProgrammes;
