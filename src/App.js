import React from "react";
import Main from "./components/Main";
import Navbar from "./components/navbar";
function App() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#030B31] to-[#33439C]">
        <Navbar />
        <Main />
      </div>
    </>
  );
}

export default App;
