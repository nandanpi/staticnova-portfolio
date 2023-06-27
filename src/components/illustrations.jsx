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
                    <div className=" flex ml-14 mb-20">
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
                                <div className="grid-cols-2 mx-16">
                                    <div className="grid grid-cols-3  max-w-7xl justify-evenly py-10 gap-20">
                                        <div>
                                            <img src={thisillus} alt=""/>
                                        </div>
                                        <div className="col-span-2">
                                            <img src={preuniq} alt=""/>
                                        </div>
                                        <div>
                                            <img src={here} alt=""/>
                                        </div>
                                        <div>
                                            <img src={bold} alt=""/>
                                        </div>
                                        <div>
                                            <img src={kristina} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="mb-10 ml-4">
                                <div
                                    className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-black"></div>
                                <h1 className="ocra text-3xl">Digital Art</h1>
                                <div className="grid-cols-2 mx-16 space-y-24 pt-10">
                                    <div className="grid grid-cols-3 gap-20">
                                        <div>
                                            <img src={haikyuu} alt=""   />
                                        </div>
                                        <div>
                                            <img src={firstpage} alt=""/>
                                        </div>
                                        <div>
                                            <img src={eren} alt=""/>
                                        </div>
                                        <div>
                                            <img src={mikey} alt=""/>
                                        </div>
                                        <div>
                                            <img src={akkochan} alt=""/>
                                        </div>
                                        <div>
                                            <img src={anya} alt=""/>
                                        </div>
                                    </div>
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