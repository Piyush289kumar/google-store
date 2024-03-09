import React from "react";
import { BsTagFill  } from "react-icons/bs";

function WalkInCenter() {
  return (
    <div className="w-full px-16 my-8 pt-16">
      <div className="w-full h-[450px] bg-[#F8F9FA] rounded-[40px]">
        <div className="w-full h-full flex flex-col justify-center items-center px-24 -mt-16">
          <BsTagFill  color="#1967D2" size={45} className="rotate-90"/>
          {['Keep me updated about devices,', 'news, tips and offers from Google', 'Store.'].map((item,idx)=>(
            <h1 key={idx} className="font-bold text-4xl text-zinc-800">{item}</h1>
          ))}
          
          <button className="mt-6 bg-transparent font-semibold text-zinc-700 border-2 border-zinc-700 px-3 py-1 pb-2 rounded-md tracking-tight hover:bg-zinc-700 hover:text-zinc-200 cursor-pointer">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default WalkInCenter;
