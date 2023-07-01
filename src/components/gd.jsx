import React,{useState ,useEffect} from "react";
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
import ellipseph from "../assets/svg/Ellipse_gdph.svg";
import arrow from "../assets/svg/arrow.svg";
import { ChevronUpIcon } from "@heroicons/react/solid";



const Gd = () => {
    const slider = [
        require("../assets/img/carpost1.png"),
        require("../assets/img/carpost2.png"),
        require("../assets/img/carpost3.png"),
        require("../assets/img/carpost4.png")
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        // Interval for auto sliding
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === slider.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => {
            // Clear the interval when component is unmounted
            clearInterval(interval);
        };
    }, [slider.length]);

    return(
        <>
            <div className="text-white pb-10 hidden md:block">
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
                <div className="block pt-20 mx-4">
                    <div className="flex pt-20 justify-center">
                        <div className="flex justify-center z-10 pt-24 pb-52">
                            <div className="grid grid-rows-2">
                                <div className=" flex justify-center space-x-6">
                                    <span className="gtek text-3xl text-center">graphic</span>
                                    <span className="gtek text-3xl text-center">deisgn</span>
                                </div>
                                <span className="ocra text-xl text-center">Instagram carousels, Merchs, Logos, Thumbnails & more</span>
                            </div>
                        </div>
                        <div className="absolute flex justify-center">
                            <img src={ellipseph} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center pb-14">
                    <HashLink smooth to="/graphicdesign#arts"><img src={arrow} alt="" className="w-[7rem] h-[7rem] animate-bounce"/></HashLink>
                </div>

                <div className="block" id="arts">
                    <div className="mx-6 block">
                        <div className="flex justify-center">
                            <div className="flex justify-center z-10 py-24">
                                <img src={slider[currentImageIndex]} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-white"><ScrollToTopButton /></div>
        </>
    );
}
export default Gd;