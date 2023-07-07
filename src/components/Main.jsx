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
import ellipseph from "../assets/svg/Ellipseph.svg";
import arrow from "../assets/svg/arrow.svg";




const Main = () => {

    return (
        <>
            <div className="hidden md:block max-w-[1920px] mx-auto">
                <div className="flex relative">
                    <div className="flex w-screen">
                        <div className="flex justify-center items-center  w-full mt-32 z-20">
                            <div className="grid grid-rows-3 text-center">
                                <span className="text-left text-white text-2xl ocra pt-20">Hey, I'm</span>
                                <span className="text-white text-8xl gtek pt-2">yashmitha</span>
                                <span className="text-white text-2xl ocra pt-1">An Illustrator and Graphic Designer</span>
                            </div>
                        </div>
                    </div>
                    <div className="absolute z-10 flex justify-center w-full pt-36 growsmall">
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
                    <div className="flex justify-center pt-14">
                        <div className="grid grid-cols-3 mt-6 scale-[85%] gap-16">
                            <div className=" max-w-sm rounded-[40px] group px-5">
                                <div className="relative">
                                    <img src={illustration_banner} alt="" className="rounded-[40px] group-hover:scale-110 duration-200"/>
                                    <HashLink to="/illustrations#top">
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
                                    <HashLink to="/uiux#top">
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

                <div id="about" className="pt-7 mt-14 px-6 space-y-6 pb-10">
                    <div>
                        <h1 className="text-6xl bord text-white">About Me</h1>
                    </div>

                    <div className="pt-14 flex justify-center">
                       <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-l-full">
                            <div className="p-5 hover:scale-110 duration-200 pt-20 px-16">
                                <img src={pfp} alt="" className="max-w-[18rem] pt-1"/>
                            </div>
                       </div>
                        <div className="max-w-xl bg-black bg-opacity-40 backdrop-blur-md py-10">
                            <p className="ocra text-white text-2xl text-center pr-10">
                                I'm Yashmitha, <span className="text-[#D645D6]">a freelance illustrator and graphic designer</span>. I specialise in creating captivating visuals, including <span className="text-[#1CAAF3]">vectorizing, logo design, branding, digital art, and more</span>. With expertise in industry-standard software like <span className="text-[#AB64F3]">Adobe Photoshop and Illustrator</span>, I bring your ideas to life with <span className="text-[#F4F895]">high-quality and engaging designs</span>. Let's collaborate to make your vision stand out.
                            </p>
                        </div>
                        <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-r-2xl py-6 pl-16">
                            <div className="border-l-2 border-l-white flex h-full justify-center pt-14">
                                <div className=" grid grid-rows-3 px-20">
                                    <div className="hover:scale-110 duration-200"><SiAdobephotoshop className="text-white" size={60}/></div>
                                    <div className="hover:scale-110 duration-200"><SiAdobeillustrator className="text-white" size={60}/></div>
                                    <div className="hover:scale-110 duration-200"><SiAdobexd className="text-white" size={60}/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="contact" className="pb-10 pt-10 px-6 mt-10">
                    <div className="pb-14 pt-2">
                        <h1 className="text-6xl bord text-white">Contact</h1>
                    </div>
                    <div className="grid grid-cols-2 mx-20">
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

                <div className="p-2 flex justify-center bg-black">
                    <span className="text-white">© 2023 Yashmitha S. All Rights Reserved.</span>
                </div>
            </div>


            <div className="block md:hidden text-white z-0">
                <div className="mx-8">
                    <div className="block pt-20">
                        <div className="flex pt-20 justify-center">
                            <div className="flex justify-center z-10 pt-8 pb-52">
                                <div className="grid grid-rows-3">
                                    <span className="ocra text-2xl text-left ml-8 mt-4">Hey, I'm</span>
                                    <span className="gtek text-5xl ml-8">yashmitha</span>
                                    <span className="ocra text-2xl text-center">An Illustrator and Graphic Designer</span>
                                </div>
                            </div>
                            <div className="absolute flex justify-center growsmall">
                                <img src={ellipseph} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center pb-14">
                        <HashLink smooth to="/#works2"><img src={arrow} alt="" className="w-[7rem] h-[7rem] animate-bounce"/></HashLink>
                    </div>

                    <div id="works2">
                        <div className="pt-10">
                            <span className="bord text-3xl">Works</span>
                        </div>
                        <div className="flex justify-center">
                            <div className="grid grid-rows-3 py-16 gap-10">
                                <div className="relative">
                                    <img src={illustration_banner} alt="" className="rounded-[40px] max-w-[16rem]"/>
                                    <HashLink to="/illustrations#top">
                                        <div className="absolute top-0 left-0 h-full w-full rounded-[40px] bg-black opacity-60  transition-all duration-300 flex">
                                            <div className="flex justify-center items-center h-full w-full">
                                                <h1 className="text-2xl text-white bord">Illustrations</h1>
                                            </div>
                                        </div>
                                    </HashLink>
                                </div>
                                <div className="relative">
                                    <img src={gd_banner} alt="" className="rounded-[40px] max-w-[16rem]"/>
                                    <HashLink to="/graphicdesign#top">
                                        <div className="absolute top-0 left-0 h-full w-full rounded-[40px] bg-black opacity-60  transition-all duration-300 flex">
                                            <div className="flex justify-center items-center h-full w-full">
                                                <h1 className="text-2xl text-white bord max-w-min text-center">Graphic Design</h1>
                                            </div>
                                        </div>
                                    </HashLink>
                                </div>
                                <div className="relative">
                                    <img src={ui_banner} alt="" className="rounded-[40px] max-w-[16rem]"/>
                                    <HashLink to="/uiux#top">
                                        <div className="absolute top-0 left-0 h-full w-full rounded-[40px] bg-black opacity-60  transition-all duration-300 flex">
                                            <div className="flex justify-center items-center h-full w-full">
                                                <h1 className="text-2xl text-white bord">UI/UX</h1>
                                            </div>
                                        </div>
                                    </HashLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="about2" className="justify-center pb-20 ">
                        <div>
                            <span className="bord text-3xl">About Me</span>
                        </div>

                        <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-t-full flex justify-center mt-10">
                            <div className="max-w-[13rem] py-10 ">
                                <img src={pfp} alt=""/>
                            </div>
                        </div>

                        <div className="flex justify-center px-4 bg-black bg-opacity-40 backdrop-blur-md pb-10">
                            <div className="flex justify-center">
                                <p className="ocra text-white text-md pr-10 justify-center ml-10">
                                    I'm Yashmitha, <span className="text-[#D645D6]">a freelance illustrator and graphic designer</span>. I specialise in creating captivating visuals, including <span className="text-[#1CAAF3]">vectorizing, logo design, branding, digital art, and more</span>. With expertise in industry-standard software like <span className="text-[#AB64F3]">Adobe Photoshop and Illustrator</span>, I bring your ideas to life with <span className="text-[#F4F895]">high-quality and engaging designs</span>. Let's collaborate to make your vision stand out.
                                </p>
                            </div>
                        </div>
                        <div className="bg-black bg-opacity-40 backdrop-blur-md flex justify-center pb-6">
                            <hr className="w-[18rem] p-2"/>
                        </div>
                        <div className="flex justify-evenly bg-black bg-opacity-40 backdrop-blur-md pb-10 rounded-b-2xl">
                            <SiAdobephotoshop size={40} className="text-white"/>
                            <SiAdobeillustrator size={40} className="text-white"/>
                            <SiAdobexd size={40} className="text-white"/>
                        </div>
                    </div>

                    <div id="contact2">
                        <div>
                            <span className="bord text-3xl">Contact</span>
                        </div>
                        <div className="pt-16 pb-10 flex justify-center ocra">
                            <form action="https://getform.io/f/1d08161d-d11d-4601-b3bd-5c8f6ff1e2e3" method="POST" >
                                <div className="pb-4 pt-6">
                                    <input type="text" name="name" placeholder="Name" className="border-none p-2 rounded-md text-black w-full focus:outline-none" required={true}/>
                                </div>
                                <div className="pb-4">
                                    <input type="text" name="email" placeholder="Email" className="border-none p-2 rounded-md text-black w-full focus:outline-none" required={true}/>
                                </div>
                                <div className="pb-4">
                                    <textarea name="message" placeholder="Your Message" rows="10" className="border-none resize-none w-full rounded-md text-black focus:outline-none p-2" required={true}/>
                                </div>
                                <div>
                                    <button type="submit" className="px-2 py-1 bg-contactbutton text-white rounded-md hover:scale-125 duration-500">Work With Me</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="bg-black text-white">
                    <div>
                        <div className="flex justify-center py-12">
                            <ul className="flex space-x-12">
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