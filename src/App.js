import React from "react";
import Main from "./components/Main";
import {Route, Routes} from "react-router-dom";
import Illustrations from "./components/illustrations";
import Gd from "./components/gd";
import Uiux from "./components/uiux";
import Footer from "./components/footer";

function App() {
  return (
    <>
        <Routes>
            <Route exact path="/" element={<><div className="bg-gradient-to-b from-[#030B31] to-[#33439C] w-full h-full"><Main /></div></>}></Route>
            <Route exact path="/illustrations" element={<><div className="bg-[#0B1544] text-white w-full h-full"><Illustrations /><Footer /></div></>}></Route>
            <Route exact path="/graphicdesign" element={<><div className="bg-[#0B1544] text-white w-full h-full"><Gd /><Footer /></div></>}></Route>
            <Route exact path="/uiux" element={<><Uiux /></>}></Route>
        </Routes>
    </>
  );
}

export default App;
