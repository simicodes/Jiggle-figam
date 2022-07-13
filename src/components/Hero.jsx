import React from "react";

import bgImg from "../assets/bg.png";
const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <img className="w-full h-full object-cover" src={bgImg} alt="BGimg" />;
      {/* OverLay........ */}
      <div className=" absolute w-full h-full top-0 left-0 bg-gray-900/70"></div>
      {/* Content........ */}
      <div className="absolute  w-[ 627px] h-[140px] top-[300px] md:top-[350px] flex flex-col justify-center left-[15px]  md:left-[84px]  text-white ">
        <h1 className="font-[600] md:font-bold md:leading-[70px] leading-[40px] text-[30px] md:text-[55px] not-italic">
          Introducing Jiggle
        </h1>
        <h1 className="font-[600] md:font-bold md:leading-[70px] leading-[40px] text-[30px] md:text-[55px] not-italic">
          Food insurance for Students
        </h1>
        <p className=" pb-6  font-[200] md:font-[400] text-[20px] md:text-[48px] leading-[40px]">
          Pay once , eat wherever and whenever
        </p>
        <div>
          <button className="btn1 m-2 font-[500] text-[#1EA6CC]">
            Sign Up Now
          </button>
          <button className=" btn2 m-2 font-[600]">Become a Vendor</button>
        </div>
        {/* <div className="absolute  border-2 border-[#ffffff] rounded-[18px] w-[55px] h-[71px] left-[350px] md:left-[691px] top-[200px] md:top-[240px]">
          <div className="tran z-10 absolute border-2 border-white w-[32px] h-[0px] left-[10px] top-[35px] "></div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
