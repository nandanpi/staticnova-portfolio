import React, {useState} from "react";
import {HashLink} from "react-router-hash-link";
import {HiMenu} from "react-icons/hi";
import {AiOutlineClose} from "react-icons/ai";

const Navbar2 = () => {
    const [nav,setNav] = useState(false);
    function toggleNav(){
        setNav(!nav);
    }
    return(
        <>
            <div className="navbar-load max-w-[1920px] mx-auto">
                <div className="hidden md:flex justify-between text-white">
                    <div className="px-6 py-4">
                        <HashLink smooth to="/"><span className="logo text-4xl">Staticnova</span></HashLink>
                    </div>
                    <div className="p-6">
                        <ul className="flex space-x-12 text-xl bord">
                            <li className="hover:border-b-2 pb-1"><HashLink to="/">Home</HashLink></li>
                            <li className="hover:border-b-2 pb-1"><HashLink to="/illustrations#top">Illustrations</HashLink></li>
                            <li className="hover:border-b-2 pb-1"><HashLink to="/graphicdesign#top">Graphic Design</HashLink></li>
                            <li className="hover:border-b-2 pb-1"><HashLink to="/uiux#top">UI/UX</HashLink></li>
                        </ul>
                    </div>
                </div>
                <div className="block md:hidden text-white z-0">
                    <div className="flex justify-between py-4 px-6">
                        <span className="logo text-2xl pt-1"><HashLink to="/">Staticnova</HashLink></span>
                        <HiMenu size={40} onClick={toggleNav} className={nav ? "hidden" : "block"}/>
                    </div>
                </div>
            </div>


            <div className={nav ? "fixed z-50 top-0 right-0 w-screen h-screen backdrop-blur-lg bg-[#0B1544] bg-opacity-20" : "hidden"}>
                <div className="flex w-full justify-end">
                    <AiOutlineClose size={40} onClick={toggleNav} className="cursor-pointer text-white  mx-6 my-4"/>
                </div>
                <div className="flex justify-center text-white h-screen pt-16">
                    <ul className="justify-center items-center space-y-5 mt-24 text-center ocra">
                        <li className="py-2">
                            <HashLink to="/" onClick={toggleNav} className="text-4xl ">Home</HashLink>
                        </li>
                        <div className="flex justify-center">
                            <hr className="w-80 p-[2px] bg-white rounded-full"/>
                        </div>
                        <li className="py-2">
                            <HashLink to="/illustrations#top" onClick={toggleNav} className="text-4xl ">Illustrations</HashLink>
                        </li>
                        <div className="flex justify-center">
                            <hr className="w-80 p-[2px] bg-white rounded-full"/>
                        </div>
                        <li className="py-2">
                            <HashLink to="/graphicdesign#top" onClick={toggleNav} className="text-4xl ">Graphic Design</HashLink>
                        </li>
                        <div className="flex justify-center">
                            <hr className="w-80 p-[2px] bg-white rounded-full"/>
                        </div>
                        <li>
                            <HashLink to="/uiux" onClick={toggleNav} className="text-4xl ">UI/UX</HashLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Navbar2;