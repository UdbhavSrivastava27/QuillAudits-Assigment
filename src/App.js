import React from "react";
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";
import Body from "./Component/Body";
import BodyHeader from "./Component/BodyHeader";

const App = () => {
  return (
    <div className="flex flex-col">
      
      <div className=" flex flex-col  bg-gradient-to-r from-blue-900 to-black">
        <NavBar />
        <hr className=" opacity-10  border-[1px] mx-10 md:mx-20"></hr>
        <BodyHeader />
      </div>
 <Body/>
      <Footer />
    </div>
  );
};

export default App;
