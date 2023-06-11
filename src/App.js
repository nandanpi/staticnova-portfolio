import React from "react";
import Main from "./components/Main";
import Navbar from "./components/navbar";
import {Route, Routes} from "react-router-dom";
import Illustrations from "./components/illustrations";
import Gd from "./components/gd";
import Uiux from "./components/uiux";

function App() {
  return (
    <>
        <Routes>
            <Route exact path="/" element={<><div className="bg-gradient-to-b from-[#030B31] to-[#33439C]"><Navbar /><Main /></div></>}></Route>
            <Route exact path="/illustrations" element={<><Illustrations /></>}></Route>
            <Route exact path="/graphicdesign" element={<><Gd /></>}></Route>
            <Route exact path="/uiux" element={<><Uiux /></>}></Route>
        </Routes>
    </>
  );
}

export default App;
