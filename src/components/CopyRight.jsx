import React from "react";
import { FaGithub } from "react-icons/fa";

function CopyRight() {
  return (
    <div className="w-full my-16 flex justify-center items-center">
      <div className="w-1/3 bg-zinc-800 text-zinc-100 px-2 rounded-full py-4 shadow-xl">
        <a
          className="text-lg  font-semibold flex justify-center items-center gap-10"
          href="https://github.com/piyush289kumar"
          target="_blank"
        >
          UI Clone By - Piyush Kumar Raikwar
          <FaGithub size={35} />
        </a>
      </div>
    </div>
  );
}

export default CopyRight;
