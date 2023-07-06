import React from "react";
import Main from "./components/Main";
import {Route, Routes} from "react-router-dom";
import Illustrations from "./components/illustrations";
import Gd from "./components/gd";
import Uiux from "./components/uiux";
import Footer from "./components/footer";
import NotFound from "./components/404";
import Navbar from "./components/navbar";
import Navbar2 from "./components/navbar2";

function App() {
  return (
    <>
        <Routes>
            <Route exact path="/" element={<><div className="bg-gradient-to-b from-[#030B31] to-[#33439C] w-full h-full"><Navbar /><Main /></div></>}></Route>
            <Route exact path="/illustrations" element={<><div className="bg-[#0B1544] text-white w-full h-full"><Navbar2 /><Illustrations /><Footer /></div></>}></Route>
            <Route exact path="/graphicdesign" element={<><div className="bg-[#0B1544] text-white w-full h-full"><Navbar2 /><Gd /><Footer /></div></>}></Route>
            <Route exact path="/uiux" element={<><div className="bg-[#0B1544] text-white w-full h-full"><Navbar2 /><Uiux /><Footer /></div></>}></Route>
            <Route path="*" element={<><div className="bg-[#0B1544] text-white w-full h-full"><Navbar /><NotFound /><Footer /></div></>}></Route>
        </Routes>
    </>
  );
}

export default App;
