import React, {useState} from "react";
import {HashLink} from "react-router-hash-link";
import {HiMenu} from "react-icons/hi";

const Navbar = () => {
    const [nav,setNav] = useState(false);
    function toggleNav(){
        setNav(!nav);
    }
    return(
        <>
            <div className="hidden md:flex justify-between text-white">
                <div className="px-6 py-4">
                    <HashLink smooth to="/"><span className="logo text-4xl">Staticnova</span></HashLink>
                </div>
                <div className="px-6 py-4">
                    <ul className="flex space-x-12 text-2xl bord">
                        <li><HashLink smooth to="/#works">Works</HashLink></li>
                        <li><HashLink smooth to="/#about">About</HashLink></li>
                        <li><HashLink smooth to="/#contact">Contact</HashLink></li>
                    </ul>
                </div>
            </div>
            <div className="block md:hidden text-white z-0">
                <div className="flex justify-between py-4 px-6">
                    <span className="logo text-2xl">Staticnova</span>
                    <HiMenu size={40} onClick={toggleNav} className={nav ? "hidden" : "block"}/>
                </div>
            </div>
        </>
    );
}
export default Navbar;