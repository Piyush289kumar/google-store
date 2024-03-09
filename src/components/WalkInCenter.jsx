import React from "react";
import { FaStore } from "react-icons/fa";

function WalkInCenter() {
  return (
    <div className="w-full px-52 my-8 pt-16">
      <div className="w-full h-[300px] bg-[#F8F9FA] rounded-[40px]">
        <div className="w-full h-full flex flex-col justify-center items-center px-24 -mt-16">
          <FaStore color="#8430CE" size={30}/>
          <p className="text-zinc-800 text-xl font-semibold">
            Google Pixel Walk-in Centres.
          </p>
          <button className="mt-6 bg-transparent font-semibold text-zinc-700 border-2 border-zinc-700 px-3 py-1 pb-2 rounded-md tracking-tight hover:bg-zinc-700 hover:text-zinc-200 cursor-pointer">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

export default WalkInCenter;
