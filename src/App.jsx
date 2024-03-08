import React from "react";
import { ChilCards, FirstCards, Landing, Navbar, WalkInCenter } from "./components";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="w-full h-screen bg-[#FFFFFF]">
        <Navbar />
        <Landing />
        <FirstCards />
        <ChilCards/>
        <WalkInCenter />

        <ChilCards/>      
        <FirstCards />
      </div>
    </>
  );
}

export default App;
