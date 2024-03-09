import { motion } from "framer-motion";
import React from "react";

function FirstCards() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 2, ease: "easeOut" }}
      className="relative w-full h-auto py-8 px-16"
    >
      <div className="w-full h-[88vh] rounded-3xl bg-cover bg-center bg-[#E3EEFC] flex justify-between items-center flex-row-reverse overflow-hidden">
        <div className="w-1/2 h-full flex flex-col justify-center items-start px-24">
          <p className="text-zinc-800 my-3">Google Pixel Watch 2</p>
          {["Help by Google.", "Health by Fitbit.", "Made for you."].map(
            (item, idx) => (
              <h1
                key={idx}
                className="text-zinc-700 font-bold text-5xl leading-none tracking-tight py-1"
              >
                {item}
              </h1>
            )
          )}

          <p className="text-zinc-800 mt-5">
            Get personalised help for your health, safety and <br></br>{" "}
            productivity.
          </p>
          <button className="mt-6 bg-transparent font-bold text-zinc-700 border-2 border-zinc-700 px-6 py-2 pb-3 rounded-md tracking-tight hover:bg-zinc-700 hover:text-zinc-200 cursor-pointer">
            Learn more
          </button>
        </div>

        <div className="w-1/2 h-full relative">
          <div className='w-full h-[80vh] absolute top-[19%] left-[2%] bg-contain bg-no-repeat bg-[url("https://lh3.googleusercontent.com/m-EKuG8rRZ_CUm0F7TgRiVCEnZ6gcEZAN93Qu_Gun5HDvjmwphPeDYeZ9kkVAEPEjISWFxojQCcUG6D8jkKa2FRB_gDZCwJmW7E=rw-e365-w1200")]'></div>
        </div>
      </div>
    </motion.div>
  );
}

export default FirstCards;
