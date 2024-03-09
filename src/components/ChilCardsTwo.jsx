import React from "react";

function ChilCards() {

  return (
    <div className="w-full h-full pb-1 px-16 flex justify-center items-center gap-8">
      <div className="w-1/2 h-full rounded-3xl bg-cover bg-center bg-[#E3EEFC] flex justify-between items-center flex-col overflow-hidden relative">
        <div className="w-full h-1/2 flex flex-col justify-center items-center px-24 -mt-16">
          <p className="text-zinc-800 mt-5">Nest Mini (2nd gen)</p>

          <h1 className="text-zinc-700 font-bold text-4xl leading-none tracking-tight py-4 text-center">
            Still mini, Even, <br></br>more mighty.
          </h1>
          <button className="mt-6 bg-transparent font-semibold text-zinc-700 border-2 border-zinc-700 px-3 py-1 pb-2 rounded-md tracking-tight hover:bg-zinc-700 hover:text-zinc-200 cursor-pointer">
            Learn more
          </button>
        </div>

        <div className={`w-full h-full absolute top-[22%] scale-[1]`}>
          <div
            className={`w-full h-full bg-contain bg-no-repeat bg-[url(https://raw.githubusercontent.com/Piyush289kumar/google-store/main/src/assets/images/homeMini.png)]`}
          ></div>
        </div>
      </div>

      <div className="w-1/2 h-full rounded-3xl bg-cover bg-center bg-[#E3EEFC] flex justify-between items-center flex-col overflow-hidden relative">
        <div className="w-full h-1/2 flex flex-col justify-center items-center px-24 -mt-16">
          <p className="text-zinc-800 mt-5">Nest Audio</p>

          <h1 className="text-zinc-700 font-bold text-4xl leading-none tracking-tight py-4 text-center">
          Amazing sound. At <br></br>your command.
          </h1>
          <button className="mt-6 bg-transparent font-semibold text-zinc-700 border-2 border-zinc-700 px-3 py-1 pb-2 rounded-md tracking-tight hover:bg-zinc-700 hover:text-zinc-200 cursor-pointer">
            Learn more
          </button>
        </div>

        <div className={`w-full h-full absolute top-[22%] -left-10`}>
          <div
            className={`w-full h-full bg-center bg-contain bg-no-repeat bg-[url(https://raw.githubusercontent.com/Piyush289kumar/google-store/main/src/assets/images/Google%20Home.png)]`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ChilCards;
