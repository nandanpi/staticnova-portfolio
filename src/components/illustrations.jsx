import React from "react";
import here from "../assets/img/here.png";
import kristina from "../assets/img/kristina.png";
import preuniq from "../assets/img/preuniq.png";
import thisillus from "../assets/img/thisillus.png";
import akkochan from "../assets/img/akkochan.png";
import eren from "../assets/img/eren_final.png";
import haikyuu from "../assets/img/haikyuu.png";
import anya from "../assets/img/anya_sketch.png";
import bold from "../assets/img/bold.png";
import mikey from "../assets/img/mikey.png";
import {HashLink} from "react-router-hash-link";
import ScrollToTopButton from "./scrollToTop";
import ellipse from "../assets/svg/Ellipse_illus.svg";
import arrow from "../assets/svg/arrow.svg";
import ellipseph from "../assets/svg/Ellipse_illusph.svg";


const Illustrations = () => {
    return(
        <>
            <div className="text-white hidden md:block">
                <div className="block pb-20">
                    <div className="flex">
                        <div className="flex w-screen">
                            <div className="flex justify-center items-center  w-full mt-64 z-20">
                                <div className="grid grid-rows-2 text-center">
                                    <span className="text-white text-8xl gtek">illustrations</span>
                                    <span className="text-white text-2xl ocra">Vector illustrations, digital arts & anime fan arts</span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute z-10 flex justify-center w-full pt-36 growsmall">
                            <img src={ellipse} alt=""/>
                        </div>
                    </div>
                    <div className="mt-16 mb-2 animate-bounce flex justify-center">
                        <HashLink smooth to="/illustrations#illus">
                            <img src={arrow} alt=""/>
                        </HashLink>
                    </div>

                    <div className="flex justify-center pt-20 pb-10" id="illus">
                        <span className="bord text-4xl">Vector Illustrations</span>
                    </div>
                    <div className="py-10 grid grid-cols-3 mx-24 gap-20">
                        <img src={thisillus} alt="" className="py-3 hover:scale-110 duration-200"/>
                        <img src={preuniq} alt="" className="col-span-2 hover:scale-110 duration-200"/>
                        <img src={here} alt="" className="hover:scale-110 duration-200"/>
                        <img src={bold} alt="" className="hover:scale-110 duration-200"/>
                        <img src={kristina} alt="" className="hover:scale-110 duration-200"/>
                    </div>
                    <div className="flex justify-center py-14">
                        <span className="bord text-4xl">Digital Art</span>
                    </div>
                    <div className="flex mx-24 space-x-16">
                        <div className="grid grid-rows-2">
                            <img src={haikyuu} alt="" className="row-span-2 hover:scale-110 duration-200" />
                        </div>
                        <div className="grid grid-cols-2 gap-24 pt-2">
                            <img src={mikey} alt="" className="hover:scale-110 duration-200"/>
                            <img src={akkochan} alt="" className="hover:scale-110 duration-200"/>
                            <img src={anya} alt="" className="hover:scale-110 duration-200"/>
                            <img src={eren} alt="" className="hover:scale-110 duration-200"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block md:hidden pb-16">
                <div className="block pt-20 mx-4">
                    <div className="flex pt-20 justify-center">
                        <div className="flex justify-center z-10 pt-24 pb-52">
                            <div className="grid grid-rows-2">
                                <span className="gtek text-4xl text-center">illustrations</span>
                                <span className="ocra text-xl text-center">Vector illustrations, digital arts & anime fan arts</span>
                            </div>
                        </div>
                        <div className="absolute flex justify-center growsmall">
                            <img src={ellipseph} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center pb-14">
                    <HashLink smooth to="/illustrations#arts"><img src={arrow} alt="" className="w-[7rem] h-[7rem] animate-bounce"/></HashLink>
                </div>
                <div className="mx-4" id="arts">
                    <div className="flex justify-center py-6 text-center">
                        <span className="bord text-3xl">Vector Illustrations</span>
                    </div>

                    <div className="mx-4 pt-10">
                        <div className="space-y-10">
                            <img src={thisillus} alt=""/>
                            <img src={preuniq} alt=""/>
                            <img src={here} alt=""/>
                            <img src={bold} alt=""/>
                            <img src={kristina} alt=""/>
                        </div>
                    </div>

                    <div className="flex justify-center py-16">
                        <span className="bord text-3xl">Digital Art</span>
                    </div>

                    <div className="mx-4 pt-10">
                        <div className="space-y-10">
                            <img src={haikyuu} alt=""/>
                            <img src={anya} alt=""/>
                            <img src={mikey} alt=""/>
                            <img src={akkochan} alt=""/>
                            <img src={eren} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-white"><ScrollToTopButton /></div>
        </>
    );
}

export default Illustrations;