import React from "react";

function ChilCards({ urlOne, urlTwo }) {
  return (
    <div className="w-full h-full px-16 mb-40 flex justify-center items-center gap-8">
      <div className="w-1/2 h-full rounded-3xl bg-cover bg-center bg-[#E3EEFC] flex justify-between items-center flex-col overflow-hidden relative">
        <div className="w-full h-1/2 flex flex-col justify-center items-center px-24 -mt-16">
          <p className="text-zinc-800">Pixel Buds Pro</p>

          <h1 className="text-zinc-700 font-bold text-4xl leading-none tracking-tight py-1 text-center">
            Premium sound, <br></br>pristine calls.
          </h1>
          <button className="mt-6 bg-transparent font-semibold text-zinc-700 border-2 border-zinc-700 px-3 py-1 pb-2 rounded-md tracking-tight hover:bg-zinc-700 hover:text-zinc-200 cursor-pointer">
            Learn more
          </button>
        </div>

        <div className="w-full h-full absolute top-[22%] scale-[1.3]">
          <div
            className={`w-full h-full bg-cover bg-no-repeat bg-[url(https://lh3.googleusercontent.com/x1CI2fDPyouo8AyUNusv1Wpcc-sIKDHyrt84_Mv2z9x9oUsi_dKGEzhPiiN4J-Bqb3Akaaejp0EFaqdTPLQ203rKfn17MlenPh9v)]`}
          ></div>
        </div>
      </div>

      <div className="w-1/2 h-full rounded-3xl bg-cover bg-center bg-[#E3EEFC] flex justify-between items-center flex-col overflow-hidden relative">
        <div className="w-full h-1/2 flex flex-col justify-center items-center px-24 -mt-16">
          <p className="text-zinc-800">Pixel Buds A-series</p>

          <h1 className="text-zinc-700 font-bold text-4xl leading-none tracking-tight py-1 text-center">
            Rich sound, always.
          </h1>
          <button className="mt-6 bg-transparent font-semibold text-zinc-700 border-2 border-zinc-700 px-3 py-1 pb-2 rounded-md tracking-tight hover:bg-zinc-700 hover:text-zinc-200 cursor-pointer">
            Learn more
          </button>
        </div>

        <div className="w-full h-full absolute top-[22%] scale-[1.3]">
          <div
            className={`w-full h-full bg-cover bg-no-repeat bg-[url(https://lh3.googleusercontent.com/x1CI2fDPyouo8AyUNusv1Wpcc-sIKDHyrt84_Mv2z9x9oUsi_dKGEzhPiiN4J-Bqb3Akaaejp0EFaqdTPLQ203rKfn17MlenPh9v)]`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ChilCards;
