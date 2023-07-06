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
            <div className="navbar-load">
                <div className="hidden md:flex justify-between text-white">
                    <div className="px-6 py-4">
                        <HashLink smooth to="/"><span className="logo text-4xl">Staticnova</span></HashLink>
                    </div>
                    <div className="p-6">
                        <ul className="flex space-x-16 text-xl bord">
                            <li className="hover:border-b-2 pb-1"><HashLink smooth to="/#works">Works</HashLink></li>
                            <li className="hover:border-b-2 pb-1"><HashLink smooth to="/#about">About</HashLink></li>
                            <li className="hover:border-b-2 pb-1"><HashLink smooth to="/#contact">Contact</HashLink></li>
                        </ul>
                    </div>
                </div>
                <div className="block md:hidden text-white z-0">
                    <div className="flex justify-between py-4 px-6">
                        <span className="logo text-2xl pt-1"><HashLink smooth to="/">Staticnova</HashLink></span>
                        <HiMenu size={40} onClick={toggleNav} className={nav ? "hidden" : "block"}/>
                    </div>
                </div>
            </div>

            <div className={nav ? "fixed z-50 top-0 right-0 w-screen h-screen backdrop-blur-lg bg-[#0B1544] bg-opacity-20" : "hidden"}>
                <div className="flex w-full justify-end">
                    <AiOutlineClose size={40} onClick={toggleNav} className="cursor-pointer text-white  mx-6 my-4"/>
                </div>
                <div className="flex justify-center text-white h-screen">
                    <ul className="justify-center h-screen items-center space-y-5 mt-24 text-center ocra">
                        <li className="py-2">
                            <HashLink smooth to="/#works2" onClick={toggleNav} className="text-4xl ">Works</HashLink>
                        </li>
                        <div className="flex justify-center">
                            <hr className="w-80 p-[2px] bg-white rounded-full"/>
                        </div>
                        <li className="py-2">
                            <HashLink smooth to="/#about2" onClick={toggleNav} className="text-4xl ">About</HashLink>
                        </li>
                        <div className="flex justify-center">
                            <hr className="w-80 p-[2px] bg-white rounded-full"/>
                        </div>
                        <li className="py-2">
                            <HashLink smooth to="/#contact2" onClick={toggleNav} className="text-4xl ">Contact</HashLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Navbar;