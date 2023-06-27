import React, {useState} from "react";
import {HiMenu} from "react-icons/hi";
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


const Illustrations = () => {
    const [nav,setNav] = useState(false);
    function toggleNav(){
        setNav(!nav);
    }
    return(
        <>
            <div className="text-black">
                <div className="flex justify-between">
                    <div className="px-10 py-6">
                        <h1 className="text-4xl arialb"><HashLink to="/" >Staticnova</HashLink></h1>
                    </div>
                    <div className={!nav ? "px-10 py-6" : "hidden"}>
                        <HiMenu size={50} onClick={toggleNav} className="cursor-pointer"/>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex ml-14 mb-20">
                        <ol className="relative border-l border-black">
                            <li className="mb-10 ml-4">
                                <div
                                    className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-black"></div>
                                <h1 className="ocra text-3xl">ILLUSTRATIONS</h1>
                            </li>
                            <li className="mb-10 ml-4">
                                <div
                                    className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-black"></div>
                                <h1 className="ocra text-3xl">Vector Illustrations</h1>
                                <div className="grid grid-cols-3 max-w-7xl ml-16 ">
                                    <img src={thisillus} alt="" className="max-h-[460px] my-14"/>
                                    <img src={preuniq} alt="" className="col-span-2 max-h-[460px] ml-24 my-10"/>
                                    <img src={here} alt="" className="max-h-[460px] "/>
                                    <img src={bold} alt="" className="max-h-[460px] ml-10"/>
                                    <img src={kristina} alt="" className="max-h-[460px] ml-20"/>
                                </div>
                            </li>
                            <li className="mb-10 ml-4">
                                <div
                                    className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-black"></div>
                                <h1 className="ocra text-3xl">Digital Art</h1>
                                <div className="grid grid-cols-3 gap-12 my-12 max-w-7xl ml-16">
                                    <img src={haikyuu} alt="" className="max-h-[350px]"/>
                                    <img src={firstpage} alt="" className="max-h-[350px]"/>
                                    <img src={eren} alt="" className="max-h-[350px]"/>
                                    <img src={mikey} alt="" className="max-h-[350px]"/>
                                    <img src={akkochan} alt="" className="max-h-[350px]"/>
                                    <img src={anya} alt="" className="max-h-[350px]"/>
                                </div>
                            </li>
                            <li className="mb-10 ml-4">
                                <div
                                    className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-black"></div>
                                <p className="ocra text-3xl hover:text-4xl duration-100 cursor-pointer inline-block"><HashLink to="/#contact">Contact</HashLink></p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Illustrations;