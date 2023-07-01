import React from "react";
import {HashLink} from "react-router-hash-link";
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
import ellipse from "../assets/svg/Ellipse_gd.svg";
import arrow from "../assets/svg/arrow.svg";

const Gd = () => {
    return(
        <>
            <div className="text-white pb-10">
                {/*<div className="flex justify-between">*/}
                {/*    <div className="px-10 py-6">*/}
                {/*        <h1 className="text-4xl logo"><HashLink to="/" >Staticnova</HashLink></h1>*/}
                {/*    </div>*/}
                {/*    <div className={!nav ? "px-10 py-6" : "hidden"}>*/}
                {/*        <HiMenu size={50} onClick={toggleNav} className="cursor-pointer"/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="flex">
                    <div className="flex w-screen">
                        <div className="flex justify-center items-center  w-full mt-64 z-20">
                            <div className="grid grid-rows-2 text-center">
                                <span className="text-white text-8xl gtek">graphic design</span>
                                <span className="text-white text-2xl ocra">Instagram carousels, Merchs, Logos, Thumbnails & more</span>
                            </div>
                        </div>
                    </div>
                    <div className="absolute z-10 flex justify-center w-full pt-36">
                        <img src={ellipse} alt=""/>
                    </div>
                </div>
                <div className="mt-16 animate-bounce flex justify-center">
                    <HashLink smooth to="/graphicdesign#gd">
                        <img src={arrow} alt=""/>
                    </HashLink>
                </div>

                <div className="px-20 py-4" id="gd">
                    <div className="grid grid-rows-2 gap-10 py-4 pb-14">
                        <HashLink smooth to="https://www.instagram.com/p/CmLp7-DB7AA/"><img src={carpost} alt="" className="hover:scale-105 duration-100"/></HashLink>
                        <HashLink smooth to="https://www.instagram.com/p/CrQ2nGsJhFQ/"><img src={recruit} alt="" className="hover:scale-105 duration-100"/></HashLink>
                    </div>
                    <div className="grid grid-cols-2 gap-72 pb-14">
                        <img src={merchb} alt="" className="hover:scale-110 duration-200"/>
                        <img src={merchf} alt="" className="hover:scale-110 duration-200"/>
                    </div>
                    <div className="grid grid-cols-2 pb-14 gap-20">
                        <img src={fluid} alt="" className="hover:scale-110 duration-200"/>
                        <img src={oplogo} alt="" className="hover:scale-110 duration-200"/>
                    </div>
                    <div className="ocra space-y-4 grid grid-rows-2">
                        <span className="text-4xl">Clubs, Organizations and clients</span>
                        <span className="text-xl">Most of my projects were a part of students' clubs in my university.</span>
                    </div>
                    <div className="grid grid-cols-3 gap-72 py-16">
                        <img src={post} alt="" className="object-fill hover:scale-110 duration-200"/>
                        <img src={ghg} alt="" className="object-contain hover:scale-110 duration-200"/>
                        <img src={acmw} alt="" className="object-contain hover:scale-110 duration-200"/>
                    </div>
                </div>
            </div>
            <div className="block md:hidden">

            </div>
            <div className="text-white"><ScrollToTopButton /></div>
        </>
    );
}
export default Gd;