import React from "react";
import { FirstCards, Landing, Navbar } from "./components";
function App() {
  return (
    <>
      <div className="w-full h-screen bg-[#FFFFFF]">
        <Navbar />
        <Landing />
        <FirstCards />
      </div>
    </>
  );
}

export default App;
