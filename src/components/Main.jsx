import React, {useState} from "react";
import {HashLink} from "react-router-hash-link";
import gd_banner from "../assets/img/gd_banner.png";
import illustration_banner from "../assets/img/illustration_banner.png";
import {SiAdobexd , SiAdobephotoshop , SiAdobeillustrator} from "react-icons/si";
import pfp from "../assets/img/pfp.png";
import arrow from "../assets/img/arrow-down.png";
import ellipse from "../assets/img/ellipse.png";
import ui_banner from "../assets/img/banneruiux.png";
import {HiMenu} from "react-icons/hi";
import {SiGmail, SiBehance, SiInstagram, SiTwitter} from "react-icons/si";
import ScrollToTopButton from "./scrollToTop";




const Main = () => {
    const [nav,setNav] = useState(false);
    function toggleNav(){
        setNav(!nav);
    }
    return (
        <>
            <div className="hidden md:flex justify-between text-white">
                <div className="px-6 py-4">
                    <span className="arialb text-3xl">Staticnova</span>
                </div>
                <div className="px-6 py-4">
                    <ul className="flex space-x-12 text-3xl ocra">
                        <li><HashLink smooth to="/#works">Works</HashLink></li>
                        <li><HashLink smooth to="/#about">About Me</HashLink></li>
                        <li><HashLink smooth to="/#contact">Contact</HashLink></li>
                    </ul>
                </div>
            </div>


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

                <div className="pt-4 pb-12" id="works">
                    <div className="flex">
                        <div className="px-6 mt-5">
                            <h1 className="text-6xl arialb  text-white">Works</h1>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="grid grid-cols-3 mt-6 scale-[85%] gap-16">
                            <div className=" max-w-sm rounded-[40px] group px-5">
                                <div className="relative">
                                    <img src={illustration_banner} alt="" className="rounded-[40px] group-hover:scale-110 duration-200"/>
                                    <HashLink smooth to="/illustrations#top">
                                        <div className="absolute top-0 left-0 h-full w-full rounded-[40px] group-hover:scale-110 duration-200 bg-black opacity-60 flex">
                                            <div className="flex justify-center items-center h-full w-full">
                                                <h1 className="text-3xl text-white arialb">Illustrations</h1>
                                            </div>
                                        </div>
                                    </HashLink>
                                </div>

                            </div>
                            <div className="max-w-sm rounded-[40px] group px-5">
                                <div className="relative">
                                    <img src={gd_banner} alt="" className="rounded-[40px] group-hover:scale-110 duration-200"/>
                                    <HashLink  to="/graphicdesign#top">
                                        <div className="absolute top-0 left-0 h-full w-full rounded-[40px] group-hover:scale-110 duration-200 bg-black opacity-60 flex">
                                            <div className="flex justify-center items-center h-full w-full">
                                                <h1 className="text-3xl text-white arialb">Graphic Design</h1>
                                            </div>
                                        </div>
                                    </HashLink>
                                </div>
                            </div>
                            <div className="max-w-sm rounded-[40px] group px-5">
                                <div className="relative">
                                    <img src={ui_banner} alt="" className="rounded-[40px] group-hover:scale-110 duration-200"/>
                                    <HashLink smooth to="/uiux">
                                        <div className="absolute top-0 left-0 h-full w-full rounded-[40px] group-hover:scale-110 duration-200 bg-black opacity-60  flex">
                                            <div className="flex justify-center items-center h-full w-full">
                                                <h1 className="text-3xl text-white arialb">UI/UX</h1>
                                            </div>
                                        </div>
                                    </HashLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="about" className="pt-9 mt-14 px-6 space-y-6">
                    <div>
                        <h1 className="text-6xl arialb text-white">About Me</h1>
                    </div>
                    <div className="grid grid-cols-2 pt-10 pb-10 px-[10rem]">
                        <div className="max-w-[20rem] mr-10">
                            <img src={pfp} alt=""/>
                        </div>
                        <div className="max-w-xl pt-16">
                            <span className="text-3xl text-white ocra">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam commodi deleniti eaque fugiat illo minus sunt. At dicta perferendis provident.</span>
                        </div>
                    </div>
                    <div className="flex justify-center items-center pb-14">
                        <ul className="flex space-x-24">
                            <li><SiAdobephotoshop size={70} className="text-white"/></li>
                            <li><SiAdobeillustrator size={70} className="text-white"/></li>
                            <li><SiAdobexd size={70} className="text-white"/></li>
                        </ul>
                    </div>
                    <div id="contact" className="pb-[8rem] pt-6">
                        <div className="pb-14">
                            <h1 className="text-6xl arialb text-white">Contact</h1>
                        </div>
                        <div className="grid grid-cols-2 mx-10">
                            <div className="border-r border-r-bordergray ">
                                <div className="max-w-sm my-6">
                                    <form action="https://getform.io/f/1d08161d-d11d-4601-b3bd-5c8f6ff1e2e3" method="POST" className="ocra">
                                        <div className="pb-3 pt-6">
                                            <input type="text" name="name" placeholder="Name" className="border-none p-2 rounded-md text-black w-full focus:outline-none" required={true}/>
                                        </div>
                                        <div className="pb-3">
                                            <input type="text" name="email" placeholder="Email" className="border-none p-2 rounded-md text-black w-full focus:outline-none" required={true}/>
                                        </div>
                                        <div className="pb-3">
                                            <textarea name="message" placeholder="Your Message" rows="10" className="border-none resize-none w-full rounded-md text-black focus:outline-none p-2" required={true}/>
                                        </div>
                                        <div>
                                            <button type="submit" className="px-2 py-1 bg-contactbutton text-white rounded-md hover:scale-125 duration-500">Work With Me</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="mx-20 my-10">
                                <ul className="text-white grid grid-rows-4 gap-16">
                                    <HashLink smooth to="mailto:yashmithashailesh@gmail.com" target="_blank">
                                        <li className="flex space-x-14 hover:scale-105 duration-100">
                                            <span><SiGmail size={50}/></span>
                                            <span className="text-xl text-white ocra pt-2">yashmithashailesh@gmail.com</span>
                                        </li>
                                    </HashLink>
                                    <HashLink smooth to="https://instagram.com/staticnovaa?igshid=NGExMmI2YTkyZg==" target="_blank">
                                        <li className="flex space-x-14 hover:scale-105 duration-100">
                                            <span><SiInstagram size={50}/></span>
                                            <span className="text-xl text-white ocra pt-2">staticnovaa</span>
                                        </li>
                                    </HashLink>
                                    <HashLink smooth to="https://www.behance.net/yashmitha?tracking_source=search_projects%7Cyashmitha" target="_blank">
                                        <li className="flex space-x-14 hover:scale-105 duration-100">
                                            <span><SiBehance size={50}/></span>
                                            <span className="text-xl text-white ocra pt-2">yashmitha s</span>
                                        </li>
                                    </HashLink>
                                    <HashLink smooth to="https://twitter.com/staticnovas?t=AmUV2UiDfLRtd0KoCsIaxw&s=09" target="_blank">
                                        <li className="flex space-x-14 hover:scale-105 duration-100">
                                            <span><SiTwitter size={50}/></span>
                                            <span className="text-xl text-white ocra pt-2">staticnovas</span>
                                        </li>
                                    </HashLink>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="block md:hidden text-white z-0">
                <div className="flex justify-between py-4 px-6">
                    <span className="arialb text-2xl">Staticnova</span>
                    <HiMenu size={40} onClick={toggleNav} className={nav ? "hidden" : "block"}/>
                </div>
                <div className="mx-8">
                    <div className="mt-20 pb-12">
                        <div className="z- absolute z-10">
                            <img src={ellipse} alt=""/>
                        </div>
                        <div className="ocra text-[3rem] grid grid-rows-3 px-7 pt-9 z-20">
                            <span >Hi,</span>
                            <span>I'm</span>
                            <span>Staticnova</span>
                        </div>
                    </div>

                    <div className="max-w-min flex pb-20">
                        <span className="text-3xl text-right ocra ml-[7rem]">An Illustrator and Graphic Designer</span>
                    </div>

                    <div className="flex justify-center pb-14">
                        <HashLink smooth to="/#works2"><img src={arrow} alt="" className="w-[7rem] h-[7rem] animate-bounce"/></HashLink>
                    </div>

                    <div id="works2">
                        <div>
                            <span className="arialb text-3xl">Works</span>
                        </div>
                        <div className="flex justify-center">
                            <div className="grid grid-rows-3 py-16 gap-10">
                                <div className="relative">
                                    <img src={illustration_banner} alt="" className="rounded-[40px] max-w-[14rem]"/>
                                    <HashLink smooth to="/illustrations#top">
                                        <div className="absolute top-0 left-0 h-full w-full rounded-[40px] bg-black opacity-60  transition-all duration-300 flex">
                                            <div className="flex justify-center items-center h-full w-full">
                                                <h1 className="text-2xl text-white arialb">Illustrations</h1>
                                            </div>
                                        </div>
                                    </HashLink>
                                </div>
                                <div className="relative">
                                    <img src={gd_banner} alt="" className="rounded-[40px] max-w-[14rem]"/>
                                    <HashLink smooth to="/graphicdesign#top">
                                        <div className="absolute top-0 left-0 h-full w-full rounded-[40px] bg-black opacity-60  transition-all duration-300 flex">
                                            <div className="flex justify-center items-center h-full w-full">
                                                <h1 className="text-2xl text-white arialb max-w-min text-center">Graphic Design</h1>
                                            </div>
                                        </div>
                                    </HashLink>
                                </div>
                                <div className="relative">
                                    <img src={ui_banner} alt="" className="rounded-[40px] max-w-[14rem]"/>
                                    <HashLink smooth to="/uiux">
                                        <div className="absolute top-0 left-0 h-full w-full rounded-[40px] bg-black opacity-60  transition-all duration-300 flex">
                                            <div className="flex justify-center items-center h-full w-full">
                                                <h1 className="text-2xl text-white arialb">UI/UX</h1>
                                            </div>
                                        </div>
                                    </HashLink>
                                </div>
                            </div>
                        </div>

                        <div id="about2">
                            <div>
                                <span className="arialb text-3xl">About Me</span>
                            </div>
                            <div className="py-16 flex justify-center">
                                <img src={pfp} alt="" className="max-w-[14rem] "/>
                            </div>
                            <div className="pb-16 flex">
                                <span className="ocra text-3xl max-w-sm text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae corporis ducimus iste non odit, officia quis quos veritatis? Dolor ducimus error molestiae mollitia, natus temporibus?</span>
                            </div>
                            <div className="flex justify-center pb-16">
                                <ul className="flex space-x-10">
                                    <li><SiAdobephotoshop size={50} className="text-white"/></li>
                                    <li><SiAdobeillustrator size={50} className="text-white"/></li>
                                    <li><SiAdobexd size={50} className="text-white"/></li>
                                </ul>
                            </div>
                        </div>

                        <div id="contact2">
                            <div>
                                <span className="arialb text-3xl">Contact</span>
                            </div>
                            <div className="pt-16 pb-10 flex justify-center">
                                <form action="https://getform.io/f/1d08161d-d11d-4601-b3bd-5c8f6ff1e2e3" method="POST" >
                                    <div className="pb-3 pt-6">
                                        <input type="text" name="name" placeholder="Name" className="border-none p-2 rounded-md text-black w-full focus:outline-none" required={true}/>
                                    </div>
                                    <div className="pb-3">
                                        <input type="text" name="email" placeholder="Email" className="border-none p-2 rounded-md text-black w-full focus:outline-none" required={true}/>
                                    </div>
                                    <div className="pb-3">
                                        <textarea name="message" placeholder="Your Message" rows="10" className="border-none resize-none w-full rounded-md text-black focus:outline-none p-2" required={true}/>
                                    </div>
                                    <div>
                                        <button type="submit" className="px-2 py-1 bg-contactbutton text-white rounded-md hover:scale-125 duration-500">Work With Me</button>
                                    </div>
                                </form>
                            </div>
                            <div className="flex justify-center pb-10">
                                <hr className="border w-[16rem] flex justify-center rounded-full border-bordergray"/>
                            </div>
                            <div className="mx-4 pb-16">
                                <ul className="text-white grid grid-rows-4 gap-16">
                                    <HashLink smooth to="mailto:yashmithashailesh@gmail.com" target="_blank">
                                        <li className="flex space-x-6 hover:scale-105 duration-100">
                                            <span><SiGmail size={30}/></span>
                                            <span className="text-md text-white ocra pt-1">yashmithashailesh@gmail.com</span>
                                        </li>
                                    </HashLink>
                                    <HashLink smooth to="https://instagram.com/staticnovaa?igshid=NGExMmI2YTkyZg==" target="_blank">
                                        <li className="flex space-x-6 hover:scale-105 duration-100">
                                            <span><SiInstagram size={30}/></span>
                                            <span className="text-md text-white ocra pt-1">staticnovaa</span>
                                        </li>
                                    </HashLink>
                                    <HashLink smooth to="https://www.behance.net/yashmitha?tracking_source=search_projects%7Cyashmitha" target="_blank">
                                        <li className="flex space-x-6 hover:scale-105 duration-100">
                                            <span><SiBehance size={30}/></span>
                                            <span className="text-md text-white ocra pt-1">yashmitha s</span>
                                        </li>
                                    </HashLink>
                                    <HashLink smooth to="https://twitter.com/staticnovas?t=AmUV2UiDfLRtd0KoCsIaxw&s=09" target="_blank">
                                        <li className="flex space-x-6 hover:scale-105 duration-100">
                                            <span><SiTwitter size={30}/></span>
                                            <span className="text-md text-white ocra pt-1">staticnovas</span>
                                        </li>
                                    </HashLink>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-black text-white">
                    <div>
                        <div className="flex justify-center py-12">
                            <ul className="flex space-x-10">
                                <HashLink smooth to="mailto:yashmithashailesh@gmail.com" target="_blank"><li className="hover:scale-125 duration-200"><SiGmail size={30}/></li></HashLink>
                                <HashLink smooth to="https://instagram.com/staticnovaa?igshid=NGExMmI2YTkyZg==" target="_blank"><li className="hover:scale-125 duration-200"><SiInstagram size={30}/></li></HashLink>
                                <HashLink smooth to="https://www.behance.net/yashmitha?tracking_source=search_projects%7Cyashmitha" target="_blank"><li className="hover:scale-125 duration-200"><SiBehance size={30}/></li></HashLink>
                                <HashLink smooth to="https://twitter.com/staticnovas?t=AmUV2UiDfLRtd0KoCsIaxw&s=09" target="_blank"><li className="hover:scale-125 duration-200"><SiTwitter size={30}/></li></HashLink>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center pb-4">
                        <span className="text-sm">© 2023 Yashmitha S. All Rights Reserved.</span>
                    </div>
                </div>
            </div>
            <div className="text-white"><ScrollToTopButton /></div>
        </>
    );
}
export default Main;