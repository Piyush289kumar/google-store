import React from "react";
import {
  ChilCards,
  FirstCards,
  Landing,
  Navbar,
  WalkInCenter,
} from "./components";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="w-full h-screen bg-[#FFFFFF]">
        <Navbar />
        <Landing />
        <FirstCards />
        <ChilCards
          urlOne={
            "https://lh3.googleusercontent.com/ddnXIxSOJQW0UtM66qeBUq2JXVZk6sTsNGlT-jfqYzE3roYIerDfEAAdApbHYwbqBXN7ld_uSN6zEHnmsBUQhvM6lrypBa20KA=rj-w1000"
          }
          urlTwo={
            "https://lh3.googleusercontent.com/ma45T24iXhsnRxGAeCfNT7rUlNGWKYLEcqlP03E4p_u90GeuHymr4e5q96UP6yJxC-aM0IJYaPmZEniTbJiYI1RCthlmIq0EtdBy=rw-e365-nu-w563"
          }
        />
        <WalkInCenter />


        <ChilCards
          urlOne={
            "https://lh3.googleusercontent.com/x1CI2fDPyouo8AyUNusv1Wpcc-sIKDHyrt84_Mv2z9x9oUsi_dKGEzhPiiN4J-Bqb3Akaaejp0EFaqdTPLQ203rKfn17MlenPh9v"
          }
          urlTwo={
            "https://lh3.googleusercontent.com/ma45T24iXhsnRxGAeCfNT7rUlNGWKYLEcqlP03E4p_u90GeuHymr4e5q96UP6yJxC-aM0IJYaPmZEniTbJiYI1RCthlmIq0EtdBy=rw-e365-nu-w563"
          }
        />
        {/* <ChilCards
          urlOne={
            "https://lh3.googleusercontent.com/ddnXIxSOJQW0UtM66qeBUq2JXVZk6sTsNGlT-jfqYzE3roYIerDfEAAdApbHYwbqBXN7ld_uSN6zEHnmsBUQhvM6lrypBa20KA=rj-w1000"
          }
          urlTwo={"https://lh3.googleusercontent.com/ddnXIxSOJQW0UtM66qeBUq2JXVZk6sTsNGlT-jfqYzE3roYIerDfEAAdApbHYwbqBXN7ld_uSN6zEHnmsBUQhvM6lrypBa20KA=rj-w1000"}
        /> */}
        <FirstCards />
      </div>
    </>
  );
}

export default App;
