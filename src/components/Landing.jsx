import React from "react";

function Landing() {
  return (
    <div className="w-full h-[120vh] pt-20 px-16 overflow-hidden rounded-3xl">
      <div className='w-full h-full rounded-3xl bg-cover bg-center bg-[url("https://lh3.googleusercontent.com/kXTkBFmo_WeR6EoftfsZrswuhhya-ulHWbd3ic3dHpHEC0_W96WSp6_PQHMEPO6CFDVHsM8yr8cZl1tMpz-pMNU0_3VgDrOJV-s=rw-e365-nu-w1750")]'>
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-zinc-700 font-bold text-6xl leading-none tracking-tight mt-4">
            Now in Mint.
          </h1>
          <p className="text-zinc-800 mt-5">
            Get Pixel 8 in the limited-edition colour.*
          </p>
          <button className="mt-6 bg-blue-600 font-bold text-white px-6 py-2 pb-3 rounded-md tracking-tight hover:bg-blue-700 cursor-pointer">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
