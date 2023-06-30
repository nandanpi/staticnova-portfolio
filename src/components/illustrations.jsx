import React, {useState} from "react";
import {HiMenu} from "react-icons/hi";
import {AiOutlineClose} from "react-icons/ai";
import here from "../assets/img/here.png";
import kristina from "../assets/img/kristina.png";
import preuniq from "../assets/img/preuniq.png";
import thisillus from "../assets/img/thisillus.png";
import akkochan from "../assets/img/akkochan.png";
import eren from "../assets/img/eren_final.png";
import firstpage from "../assets/img/first_page.png";
import haikyuu from "../assets/img/haikyuu.png";
import anya from "../assets/img/anya_sketch.png";
import bold from "../assets/img/bold.png";
import mikey from "../assets/img/mikey.png";
import {HashLink} from "react-router-hash-link";
import ScrollToTopButton from "./scrollToTop";


const Illustrations = () => {
    const [nav,setNav] = useState(false);
    function toggleNav(){
        setNav(!nav);
    }
    return(
        <>
            <div className="text-white">
                <div className="flex justify-between">
                    <div className="px-10 py-6">
                        <h1 className="text-4xl arialb"><HashLink to="/" >Staticnova</HashLink></h1>
                    </div>
                    <div className={!nav ? "px-10 py-6" : "hidden"}>
                        <HiMenu size={50} onClick={toggleNav} className="cursor-pointer"/>
                    </div>
                </div>

                <div className="block pb-20">
                    <div className="flex">
                        <span className="ocra text-4xl mx-10 py-5">ILLUSTRATIONS</span>
                    </div>
                    <div className="flex justify-center">
                        <span className="ocra text-4xl">Vector Illustrations</span>
                    </div>
                    <div className="py-10 grid grid-cols-3 mx-24 gap-20">
                        <img src={thisillus} alt="" className="py-3 "/>
                        <img src={preuniq} alt="" className="col-span-2"/>
                        <img src={here} alt=""/>
                        <img src={bold} alt=""/>
                        <img src={kristina} alt=""/>
                    </div>
                    <div className="flex justify-center py-14">
                        <span className="ocra text-4xl">Digital Art</span>
                    </div>
                    <div className="flex mx-24 space-x-16">
                        <div className="grid grid-rows-2">
                            <img src={haikyuu} alt="" className="row-span-2"/>
                        </div>
                        <div className="grid grid-cols-2 gap-20">
                            <img src={mikey} alt=""/>
                            <img src={akkochan} alt=""/>
                            <img src={anya} alt=""/>
                            <img src={eren} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={nav ? "fixed z-50 top-0 right-0 w-screen h-screen backdrop-blur-lg" : "hidden"}>
                <div className="flex w-full justify-end">
                    <AiOutlineClose size={50} onClick={toggleNav} className="cursor-pointer text-black  mx-10 my-6"/>
                </div>
                <div className="flex text-black justify-center h-screen">
                    <ul className="justify-center items-center space-y-5 mt-24 text-center arialb">
                        <li className="border-b-2 pb-5 border-b-black ">
                            <HashLink smooth to="/" onClick={toggleNav} className="text-4xl ">Home</HashLink>
                        </li>
                        <li className="border-b-2 pb-5 border-b-black ">
                            <HashLink smooth to="/illustrations" onClick={toggleNav} className="text-4xl ">Illustrations</HashLink>
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
            <div className="text-white"><ScrollToTopButton /></div>
        </>
    );
}

export default Illustrations;