import React from "react";
import { LuBird } from "react-icons/lu";
const Welcome = () => {
  return (
    <div className="grid grid-cols-3 gap-4 my-5 mx-8">
      {/* 1st col */}
      <div className="border rounded-2xl p-10 text-white min-h-screen bg-[#3b37ff]">
        <p className="text-xs font-bold tracking-wider text-white mb-28">
          <LuBird className="inline-block text-white text-lg"></LuBird> CRIFORM
        </p>
        <h1 className="text-4xl font-extrabold my-7">
          Start your<br></br> journey with us
        </h1>
        <p className="text-slate-200 w-3/4">
          Boost Productivity: Craft Tailored Forms Effortlessly React-Powered
          Form Builder.
        </p>
      </div>
      {/* 2nd col */}
      <div className="border rounded-lg min-h-screen col-span-2">text</div>
    </div>
  );
};

export default Welcome;
