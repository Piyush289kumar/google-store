import React from "react";

function FirstCards() {
  return (
    <div className="w-full h-auto py-8 px-16">
      <div className="w-full h-[88vh] rounded-3xl bg-cover bg-center bg-[#CEDBDF] flex justify-between items-center flex-row-reverse overflow-hidden">
        <div className="w-1/2 h-full flex flex-col justify-center items-start px-24">
          <p className="text-zinc-800 my-3">Nest Cam (battery)</p>
          {[" Peace of mind in", "more palces."].map(
            (item, idx) => (
              <h1
                key={idx}
                className="text-zinc-700 font-bold text-5xl leading-none tracking-tight py-1"
              >
                {item}
              </h1>
            )
          )}

        
          <button className="mt-6 bg-transparent font-bold text-zinc-700 border-2 border-zinc-700 px-6 py-2 pb-3 rounded-md tracking-tight hover:bg-zinc-700 hover:text-zinc-200 cursor-pointer">
            Learn more
          </button>
        </div>

        <div className="w-1/2 h-full relative">
          <div className='w-full h-[80vh] absolute top-[1%] left-[2%] bg-cover bg-no-repeat bg-[url("https://github.com/Piyush289kumar/google-store/blob/main/src/assets/images/CemegaPng.png?raw=true")]'></div>
        </div>

      </div>
    </div>
  );
}

export default FirstCards;
