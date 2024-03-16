import React from "react";
import BodyBox1 from "./BodyBox1";
import BodyBox2 from "./BodyBox2";
import BodyBox3 from "./BodyBox3";
import BodyBox4 from "./BodyBox4";

const Body = () => {
  return (
    <div>
      <div className=" md:mx-72">
        <BodyBox1 />
        <BodyBox2 />
        <BodyBox3 />
      </div>
      <BodyBox4 />
    </div>
  );
};

export default Body;
