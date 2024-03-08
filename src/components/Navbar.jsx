import React from "react";
import { IoMdSearch } from "react-icons/io";
import { AiFillQuestionCircle } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="w-full">
      <nav className="w-full flex items-center justify-between px-14 py-4 shadow-lg fixed bg-zinc-100">
        <div className="w-1/2 flex items-center gap-6">
          <img
            className="w-7 h-7 bg-zinc-50 rounded-full"
            src="https://image.similarpng.com/very-thumbnail/2020/06/Logo-google-icon-PNG.png"
            alt="Google Icon"
          />
          {["Phones", "Earbuds", "Watches", "Accessories"].map((item, idx) => (
            <a
              key={idx}
              href="#"
              className="text-zinc-600 text-sm font-[600] leading-none"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="w-1/2 flex justify-end items-center gap-6">
          <IoMdSearch size={24} color="#5F6368"  className="cursor-pointer"/>
          <AiFillQuestionCircle size={24} color="#5F6368" className="cursor-pointer"/>
          <IoMdCart size={24} color="#5F6368" className="cursor-pointer" />
          <FaCircleUser size={24} color="#5F6368" className="cursor-pointer" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
