import React from "react";
import {HashLink} from "react-router-hash-link";
import gd_banner from "../assets/img/gd_banner.png";
import illustration_banner from "../assets/img/illustration_banner.png";
import {SiAdobexd , SiAdobephotoshop , SiAdobeillustrator} from "react-icons/si";
import pfp from "../assets/img/pfp.png";
import ui_banner from "../assets/img/banneruiux.png";
import {SiGmail, SiBehance, SiInstagram, SiTwitter} from "react-icons/si";
import ScrollToTopButton from "./scrollToTop";
import ellipse from "../assets/svg/Ellipse.svg";
import arrow from "../assets/svg/arrow.svg";




const Main = () => {

    return (
        <>
            <div className="hidden md:block">
                <div className="flex">
                    <div className="flex w-screen">
                        <div className="flex justify-center items-center  w-full mt-64 z-20">
                            <div className="grid grid-rows-2 text-center">
                                <span className="text-white text-8xl gtek">staticnova</span>
                                <span className="text-white text-2xl ocra">An Illustrator and Graphic Designer</span>
                            </div>
                        </div>
                    </div>
                    <div className="absolute z-10 flex justify-center w-full pt-36">
                        <img src={ellipse} alt=""/>
                    </div>
                </div>
                <div className="mt-16 animate-bounce flex justify-center">
                    <HashLink smooth to="/#works">
                        <img src={arrow} alt=""/>
                    </HashLink>
                </div>
                <div className="pt-4 pb-12" id="works">
                    <div className="flex">
                        <div className="px-6 mt-5">
                            <h1 className="text-6xl bord  text-white">Works</h1>
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
                                                <h1 className="text-3xl text-white bord">Illustrations</h1>
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
                                                <h1 className="text-3xl text-white bord">Graphic Design</h1>
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
                                                <h1 className="text-3xl text-white bord">UI/UX</h1>
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
                        <h1 className="text-6xl bord text-white">About Me</h1>
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
                            <h1 className="text-6xl bord text-white">Contact</h1>
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
                                            <span><SiGmail size={40}/></span>
                                            <span className="text-xl text-white ocra pt-1">yashmithashailesh@gmail.com</span>
                                        </li>
                                    </HashLink>
                                    <HashLink smooth to="https://instagram.com/staticnovaa?igshid=NGExMmI2YTkyZg==" target="_blank">
                                        <li className="flex space-x-14 hover:scale-105 duration-100">
                                            <span><SiInstagram size={40}/></span>
                                            <span className="text-xl text-white ocra pt-1">staticnovaa</span>
                                        </li>
                                    </HashLink>
                                    <HashLink smooth to="https://www.behance.net/yashmitha?tracking_source=search_projects%7Cyashmitha" target="_blank">
                                        <li className="flex space-x-14 hover:scale-105 duration-100">
                                            <span><SiBehance size={40}/></span>
                                            <span className="text-xl text-white ocra pt-1">yashmitha s</span>
                                        </li>
                                    </HashLink>
                                    <HashLink smooth to="https://twitter.com/staticnovas?t=AmUV2UiDfLRtd0KoCsIaxw&s=09" target="_blank">
                                        <li className="flex space-x-14 hover:scale-105 duration-100">
                                            <span><SiTwitter size={40}/></span>
                                            <span className="text-xl text-white ocra pt-1">staticnovas</span>
                                        </li>
                                    </HashLink>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 flex justify-center">
                    <span className="text-white">© 2023 Yashmitha S. All Rights Reserved.</span>
                </div>
            </div>


            <div className="block md:hidden text-white z-0">
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
                            <span className="bord text-3xl">Works</span>
                        </div>
                        <div className="flex justify-center">
                            <div className="grid grid-rows-3 py-16 gap-10">
                                <div className="relative">
                                    <img src={illustration_banner} alt="" className="rounded-[40px] max-w-[14rem]"/>
                                    <HashLink smooth to="/illustrations#top">
                                        <div className="absolute top-0 left-0 h-full w-full rounded-[40px] bg-black opacity-60  transition-all duration-300 flex">
                                            <div className="flex justify-center items-center h-full w-full">
                                                <h1 className="text-2xl text-white bord">Illustrations</h1>
                                            </div>
                                        </div>
                                    </HashLink>
                                </div>
                                <div className="relative">
                                    <img src={gd_banner} alt="" className="rounded-[40px] max-w-[14rem]"/>
                                    <HashLink smooth to="/graphicdesign#top">
                                        <div className="absolute top-0 left-0 h-full w-full rounded-[40px] bg-black opacity-60  transition-all duration-300 flex">
                                            <div className="flex justify-center items-center h-full w-full">
                                                <h1 className="text-2xl text-white bord max-w-min text-center">Graphic Design</h1>
                                            </div>
                                        </div>
                                    </HashLink>
                                </div>
                                <div className="relative">
                                    <img src={ui_banner} alt="" className="rounded-[40px] max-w-[14rem]"/>
                                    <HashLink smooth to="/uiux">
                                        <div className="absolute top-0 left-0 h-full w-full rounded-[40px] bg-black opacity-60  transition-all duration-300 flex">
                                            <div className="flex justify-center items-center h-full w-full">
                                                <h1 className="text-2xl text-white bord">UI/UX</h1>
                                            </div>
                                        </div>
                                    </HashLink>
                                </div>
                            </div>
                        </div>

                        <div id="about2">
                            <div>
                                <span className="bord text-3xl">About Me</span>
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
                                <span className="bord text-3xl">Contact</span>
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