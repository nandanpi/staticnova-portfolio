import React, {useState} from "react";
import {HashLink} from "react-router-hash-link";
import {HiMenu} from "react-icons/hi";
import {AiOutlineClose} from "react-icons/ai";
import acmw from "../assets/img/acmwlogo.png";
import carpost from "../assets/img/carpost.png";
import ghg from "../assets/img/ghg.png";
import merchf from "../assets/img/merchf.png";
import merchb from "../assets/img/merchb.png";
import oplogo from "../assets/img/oplogo.png";
import post from "../assets/img/post.png";
import recruit from "../assets/img/recruit.png";
import fluid from "../assets/img/fluid.png";
import ScrollToTopButton from "./scrollToTop";

const Gd = () => {
    const [nav,setNav] = useState(false);
    function toggleNav(){
        setNav(!nav);
    }
    return(
        <>
            <div className="text-white pb-10">
                <div className="flex justify-between">
                    <div className="px-10 py-6">
                        <h1 className="text-4xl arialb"><HashLink to="/" >Staticnova</HashLink></h1>
                    </div>
                    <div className={!nav ? "px-10 py-6" : "hidden"}>
                        <HiMenu size={50} onClick={toggleNav} className="cursor-pointer"/>
                    </div>
                </div>

                <div className="px-20 py-4">
                    <div className="grid grid-rows-2">
                        <span className="ocra text-4xl">GRAPHIC DESIGN</span>
                        <span className="ocra text-xl">Instagram carousels, Merchs, Logos, Thumbnails & more</span>
                    </div>
                    <div className="grid grid-rows-2 gap-10 py-4 pb-14">
                        <HashLink smooth to="https://www.instagram.com/p/CmLp7-DB7AA/"><img src={carpost} alt="" className="hover:scale-105 duration-100"/></HashLink>
                        <HashLink smooth to="https://www.instagram.com/p/CrQ2nGsJhFQ/"><img src={recruit} alt="" className="hover:scale-105 duration-100"/></HashLink>
                    </div>
                    <div className="grid grid-cols-2 gap-72 pb-14">
                        <img src={merchb} alt=""/>
                        <img src={merchf} alt=""/>
                    </div>
                    <div className="grid grid-cols-2 pb-14 gap-20">
                        <img src={fluid} alt=""/>
                        <img src={oplogo} alt=""/>
                    </div>
                    <div className="ocra space-y-4 grid grid-rows-2">
                        <span className="text-4xl">Clubs, Organizations and clients</span>
                        <span className="text-xl">Most of my projects were a part of students' clubs in my university.</span>
                    </div>
                    <div className="grid grid-cols-3 gap-72 py-16">
                        <img src={post} alt="" className="object-fill"/>
                        <img src={ghg} alt="" className="object-contain"/>
                        <img src={acmw} alt="" className="object-contain"/>
                    </div>
                </div>
            </div>

            <div className={nav ? "fixed z-50 top-0 right-0 w-screen h-screen backdrop-blur-lg" : "hidden"}>
                <div className="flex w-full justify-end">
                    <AiOutlineClose size={50} onClick={toggleNav} className="cursor-pointer text-white  mx-10 my-6"/>
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
            <div className="text-black"><ScrollToTopButton /></div>
        </>
    );
}
export default Gd;