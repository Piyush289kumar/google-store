import React from "react";
import { Landing, Navbar } from "./components";
function App() {
  return (
    <>
      <div className="w-full h-screen bg-[#FFFFFF]">
        <Navbar />
        <Landing />
      </div>
    </>
  );
}

export default App;
