import React from "react";
import { ChilCards, FirstCards, Landing, Navbar } from "./components";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="w-full h-screen bg-[#FFFFFF]">
        <Navbar />
        <Landing />
        <FirstCards />
        <ChilCards urlOne={'https://lh3.googleusercontent.com/x1CI2fDPyouo8AyUNusv1Wpcc-sIKDHyrt84_Mv2z9x9oUsi_dKGEzhPiiN4J-Bqb3Akaaejp0EFaqdTPLQ203rKfn17MlenPh9v'} />
      </div>
    </>
  );
}

export default App;
