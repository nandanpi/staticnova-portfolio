import React, {useState} from "react";
import {HashLink} from "react-router-hash-link";
import {HiMenu} from "react-icons/hi";
import {AiOutlineClose} from "react-icons/ai";

const Navbar = () => {
    const [nav,setNav] = useState(false);
    function toggleNav(){
        setNav(!nav);
    }
    return(
        <>
            <div className="hidden md:flex justify-between text-white">
                <div className="px-6 py-4">
                    <HashLink smooth to="/"><span className="logo text-4xl">Yashmitha</span></HashLink>
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
                    <span className="logo text-2xl pt-1">Staticnova</span>
                    <HiMenu size={40} onClick={toggleNav} className={nav ? "hidden" : "block"}/>
                </div>
            </div>
            <div className={nav ? "fixed z-50 top-0 right-0 w-screen h-screen backdrop-blur-lg" : "hidden"}>
                <div className="flex w-full justify-end">
                    <AiOutlineClose size={50} onClick={toggleNav} className="cursor-pointer text-white  mx-10 my-6"/>
                </div>
                <div className="flex justify-center text-black h-screen">
                    <ul className="justify-center items-center space-y-5 mt-24 text-center ocra">
                        <li className="border-b-2 pb-5 border-b-black ">
                            <HashLink smooth to="/" onClick={toggleNav} className="text-4xl ">Home</HashLink>
                        </li>
                        <li className="border-b-2 pb-5 border-b-black ">
                            <HashLink smooth to="/illustrations#top" onClick={toggleNav} className="text-4xl ">Illustrations</HashLink>
                        </li>
                        <li className="border-b-2 pb-5 border-b-black ">
                            <HashLink smooth to="/graphicdesign#top" onClick={toggleNav} className="text-4xl ">Graphic Design</HashLink>
                        </li>
                        <li>
                            <HashLink smooth to="/uiux" onClick={toggleNav} className="text-4xl ">UI/UX</HashLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Navbar;