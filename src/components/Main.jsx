import React from "react";
import {HashLink} from "react-router-hash-link";
import gd_banner from "../assets/img/gd_banner.png";
import illustration_banner from "../assets/img/illustration_banner.png";
import {SiAdobexd , SiAdobephotoshop , SiAdobeillustrator} from "react-icons/si";
import pfp from "../assets/img/pfp.png";
import arrow from "../assets/img/arrow-down.png";



const Main = () => {
    return (
        <div className="hidden md:block">
            <div className="flex">
                <div className="flex">
                    <div className="z-10 pt-4 pl-10 absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" width="298" height="278" viewBox="0 0 298 278" className="scale-75">
                            <defs>
                                <linearGradient id="linear-gradient" x1="1.071" y1="1.077" x2="0.206" y2="0.388" gradientUnits="objectBoundingBox">
                                    <stop offset="0" stopColor="#951cd1"/>
                                    <stop offset="1" stopColor="#2222b9"/>
                                </linearGradient>
                            </defs>
                            <ellipse id="Ellipse_1" data-name="Ellipse 1" cx="149" cy="139" rx="149" ry="139" opacity="0.79" fill="url(#linear-gradient)"/>
                        </svg>
                    </div>
                    <div className="flex justify-normal z-20 pl-[13rem] pt-4">
                        <div className="ocra text-white pt-[12rem]">
                            <p className="text-6xl">Hi, I'm Staticnova</p>
                            <p className="text-2xl">An Illustrator and graphic designer</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex flex-col">
                <div className="flex">
                    <div className="flex">
                        <div className="pl-[26rem] pt-[9.5rem] pb-8 flex z-30">
                            <HashLink smooth to="/#works"><img src={arrow} alt="" className="animate-bounce w-[8rem] h-[8rem]"/></HashLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-4" id="works">
                <div className="flex">
                    <div className="px-6 mt-5">
                        <h1 className="text-6xl arialb  text-white">Works</h1>
                    </div>
                </div>
                <div className="grid grid-cols-3 ml-24 mt-[6.6rem] scale-[85%]">
                    <div className=" max-w-sm rounded-[40px] group px-5">
                            <div className="relative">
                                <img src={illustration_banner} alt="" className="rounded-[40px]"/>
                                <HashLink smooth to="/illustrations">
                                    <div className="absolute top-0 left-0 h-full w-full rounded-[40px] bg-black opacity-0 group-hover:opacity-60  transition-all duration-300 flex">
                                            <div className="flex justify-center items-center h-full w-full">
                                                <h1 className="text-3xl text-white arialb">Illustrations</h1>
                                            </div>
                                    </div>
                                </HashLink>
                            </div>

                    </div>
                    <div className="max-w-sm rounded-[40px] group px-5">
                        <div className="relative">
                            <img src={gd_banner} alt="" className="rounded-[40px]"/>
                            <HashLink smooth to="/graphicdesign">
                                <div className="absolute top-0 left-0 h-full w-full rounded-[40px] bg-black opacity-0 group-hover:opacity-60  transition-all duration-300 flex">
                                    <div className="flex justify-center items-center h-full w-full">
                                        <h1 className="text-3xl text-white arialb">Graphic Design</h1>
                                    </div>
                                </div>
                            </HashLink>
                        </div>
                    </div>
                    <div className="max-w-sm rounded-[40px] group px-5">
                        <div className="relative">
                            <img src={gd_banner} alt="" className="rounded-[40px]"/>
                            <HashLink smooth to="/uiux">
                                <div className="absolute top-0 left-0 h-full w-full rounded-[40px] bg-black opacity-0 group-hover:opacity-60  transition-all duration-300 flex">
                                    <div className="flex justify-center items-center h-full w-full">
                                        <h1 className="text-3xl text-white arialb">UI/UX</h1>
                                    </div>
                                </div>
                            </HashLink>
                        </div>
                    </div>
                </div>
            </div>

            <div id="about" className="pt-10 mt-2 px-6 space-y-6">
                <div>
                    <h1 className="text-6xl arialb text-white">About Me</h1>
                </div>
                <div className="grid grid-cols-2 pt-20 pb-16">
                    <div className=" rounded-full h-[18rem] w-[18rem] ml-[6rem]">
                        <img src={pfp} alt=""/>
                    </div>
                    <div>
                        <p className="text-white ocra text-4xl max-w-3xl mr-[6rem] pt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda cumque distinctio itaque iure maiores minima omnis perferendis quis similique.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center pb-8">
                    <ul className="flex space-x-24">
                        <li><SiAdobephotoshop size={70} className="text-white"/></li>
                        <li><SiAdobeillustrator size={70} className="text-white"/></li>
                        <li><SiAdobexd size={70} className="text-white"/></li>
                    </ul>
                </div>
                <div id="contact">
                    <div className="pb-14">
                        <h1 className="text-6xl arialb text-white">Contact</h1>
                    </div>
                    <div className="flex justify-center mx-auto w-7/12 md:max-w-4xl pb-[8rem]">
                        <form action="https://getform.io/f/f57e8d00-2912-4a86-ac0a-82092cb72a80" method="POST" className="flex flex-col w-full md:w-7/12">
                            <div className="space-y-3">
                                <div>
                                    <input type="text" name="name" placeholder="Name" className="p-2 bg-transparent border-2 focus:outline-none rounded-md text-black w-full"/>
                                </div>
                                <div>
                                    <input type="email" name="email" placeholder="Email" className="p-2 bg-transparent border-2 focus:outline-none rounded-md text-black w-full"/>
                                </div>
                                <div>
                        <textarea name="message" placeholder="Your message" rows="10"
                                  className="w-full p-2  bg-transparent border-2 focus:outline-none resize-none rounded-md text-black "></textarea>
                                </div>
                                <button type="submit" className="px-2 py-1 bg-contactbutton text-white rounded-md hover:scale-125 duration-500">Work With Me</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Main;