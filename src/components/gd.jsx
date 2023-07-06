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
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import {BsChevronRight} from "react-icons/bs";


const Gd = () => {
    const slider = [
        require("../assets/img/carpost1.png"),
        require("../assets/img/carpost2.png"),
        require("../assets/img/carpost3.png"),
        require("../assets/img/carpost4.png")
    ]

    const slider1 = [
        require("../assets/img/recruit1.png"),
        require("../assets/img/recruit2.png"),
        require("../assets/img/recruit3.png"),
    ]

    const slider2 = [
        require("../assets/img/merchf.png"),
        require("../assets/img/merchb.png")
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
    const [currentImageIndex2, setCurrentImageIndex2] = useState(0);

    useEffect(() => {
        // Interval for auto sliding
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === slider.length - 1 ? 0 : prevIndex + 1
            );
            setCurrentImageIndex1((prevIndex1) =>
                prevIndex1 === slider1.length - 1 ? 0 : prevIndex1 + 1
            );
            setCurrentImageIndex2((prevIndex2) =>
                prevIndex2 === slider2.length - 1 ? 0 : prevIndex2 + 1
            );
        }, 3000);

        return () => {
            // Clear the interval when component is unmounted
            clearInterval(interval);
        };
    }, [slider.length, slider1.length, slider2.length]);

    const previousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? slider.length - 1 : prevIndex - 1
        );
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === slider.length - 1 ? 0 : prevIndex + 1
        );
    };

    const previousImage1 = () => {
        setCurrentImageIndex1((prevIndex1) =>
            prevIndex1 === 0 ? slider1.length - 1 : prevIndex1 - 1
        );
    };

    const nextImage1 = () => {
        setCurrentImageIndex1((prevIndex1) =>
            prevIndex1 === slider1.length - 1 ? 0 : prevIndex1 + 1
        );
    };

    const previousImage2 = () => {
        setCurrentImageIndex2((prevIndex2) =>
            prevIndex2 === 0 ? slider2.length - 1 : prevIndex2 - 1
        );
    };

    const nextImage2 = () => {
        setCurrentImageIndex2((prevIndex2) =>
            prevIndex2 === slider2.length - 1 ? 0 : prevIndex2 + 1
        );
    };

    return(
        <>
            <div className="text-white pb-10 hidden md:block">
                <div className="flex">
                    <div className="flex w-screen">
                        <div className="flex justify-center items-center  w-full mt-64 z-20">
                            <div className="grid grid-rows-2 text-center">
                                <span className="text-white text-8xl gtek">graphic design</span>
                                <span className="text-white text-2xl ocra">Instagram carousels, Merchs, Logos, Thumbnails & more</span>
                            </div>
                        </div>
                    </div>
                    <div className="absolute z-10 flex justify-center w-full pt-36 growsmall">
                        <img src={ellipse} alt=""/>
                    </div>
                </div>
                <div className="mt-16 animate-bounce flex justify-center">
                    <HashLink smooth to="/graphicdesign#gd">
                        <img src={arrow} alt=""/>
                    </HashLink>
                </div>

                <div className="px-20 py-10" id="gd">
                    <div className="space-y-16 py-4 pb-14">

                        <div className="relative group">
                            <img src={carpost} alt="" className="group-hover:scale-105 duration-300"/>
                            <div className="absolute top-0 right-0 bg-black h-full w-full bg-opacity-0 group-hover:bg-opacity-70 group-hover:scale-105 duration-300">
                                <div className="mx-10 my-5">
                                    <div className="hidden group-hover:block">
                                        <h1 className="bord text-4xl">DROWN</h1>
                                    </div>
                                    <div className="hidden group-hover:block pt-16 pb-10">
                                        <span className="text-xl ocra">
                                            I collaborated with writer Sowmya on this project to create captivating artwork and writing inspired by the song "Birthday" by TEN LEE from a curated Spotify playlist. My main role was to bring the visuals to life through artwork and graphic design, crafting a stunning carousel that beautifully complemented Sowmya's writing. Our goal was to create an immersive and captivating experience that captured the essence of the song.
                                        </span>
                                    </div>
                                    <div className="justify-center hidden group-hover:flex">
                                        <div className="ocra bg-[#485C6A] rounded-full">
                                            <HashLink smooth to="https://www.instagram.com/p/CmLp7-DB7AA/" target="_blank">
                                                <div className="flex py-4 px-6 space-x-4">
                                                    <span>View on Instagram</span>
                                                    <BsChevronRight className="pt-1" size={20}/>
                                                </div>
                                            </HashLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <img src={recruit} alt="" className="group-hover:scale-105 duration-300"/>
                            <div className="absolute top-0 right-0 bg-black h-full w-full bg-opacity-0 group-hover:bg-opacity-70 group-hover:scale-105 duration-300">
                                <div className="m-10">
                                    <div className="hidden group-hover:block">
                                        <h1 className="bord text-4xl">NEW RECRUIT</h1>
                                    </div>
                                    <div className="hidden group-hover:block pt-20 pb-12">
                                        <span className="text-xl ocra">
                                            I had the opportunity to work on an exciting project announcing the results of new recruits for our club. With valuable feedback from the Design head, Akansha Singh, I refined the design to create an impressive final product. It was a rewarding experience to have the creative freedom to design every aspect from scratch.
                                        </span>
                                    </div>
                                    <div className="justify-center hidden group-hover:flex">
                                        <div className="ocra bg-[#485C6A] rounded-full">
                                            <HashLink smooth to="https://www.instagram.com/p/CrQ2nGsJhFQ/" target="_blank">
                                                <div className="flex py-4 px-6 space-x-4">
                                                    <span>View on Instagram</span>
                                                    <BsChevronRight className="pt-1" size={20}/>
                                                </div>
                                            </HashLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="grid grid-cols-2 gap-72 pb-14">
                        <img src={merchb} alt="" className="hover:scale-110 duration-200"/>
                        <img src={merchf} alt="" className="hover:scale-110 duration-200"/>
                    </div>
                    <div className="grid grid-cols-2 pb-14 gap-20">
                        <img src={fluid} alt="" className="hover:scale-110 duration-200"/>
                        <img src={oplogo} alt="" className="hover:scale-110 duration-200"/>
                    </div>
                    <div className="space-y-4 grid grid-rows-2">
                        <span className="bord text-4xl">Clubs, Organizations and clients</span>
                        <span className="ocra text-xl">Most of my projects were a part of students' clubs in my university.</span>
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
                        <div className="relative justify-center">
                            <div className="justify-center z-10 py-12 duration-700">
                                <div className="group-hover:scale-110">
                                    <img src={slider[currentImageIndex]} alt=""/>
                                </div>
                                <HashLink smooth to="https://www.instagram.com/p/CmLp7-DB7AA/">
                                    <div className="bg-black p-3">
                                        <span>View on Instagram</span>
                                    </div>
                                </HashLink>
                            </div>
                            <div className="absolute translate-y-[-290px] left-1 bg-black bg-opacity-30 py-1 rounded-md" onClick={previousImage}>
                                <BsChevronCompactLeft size={30}/>
                            </div>
                            <div className="absolute translate-y-[-290px] right-1 bg-black bg-opacity-30 py-1 rounded-md" onClick={nextImage}>
                                <BsChevronCompactRight size={30}/>
                            </div>
                        </div>

                        <div className="relative justify-center">
                            <div className="justify-center z-10 py-12 duration-700">
                                <div className="group-hover:scale-110">
                                    <img src={slider1[currentImageIndex1]} alt=""/>
                                </div>
                                <HashLink smooth to="https://www.instagram.com/p/CrQ2nGsJhFQ/">
                                    <div className="bg-black p-3">
                                        <span>View on Instagram</span>
                                    </div>
                                </HashLink>
                            </div>
                            <div className="absolute translate-y-[-290px] left-1 bg-black bg-opacity-30 py-1 rounded-md" onClick={previousImage1}>
                                <BsChevronCompactLeft size={30}/>
                            </div>
                            <div className="absolute translate-y-[-290px] right-1 bg-black bg-opacity-30 py-1 rounded-md" onClick={nextImage1}>
                                <BsChevronCompactRight size={30}/>
                            </div>
                        </div>

                        <div className="relative justify-center">
                            <div className="justify-center z-10 py-12 duration-700">
                                <div className="group-hover:scale-110">
                                    <img src={slider2[currentImageIndex2]} alt=""/>
                                </div>
                            </div>
                            <div className="absolute translate-y-[-220px] left-1 bg-black bg-opacity-30 py-1 rounded-md" onClick={previousImage2}>
                                <BsChevronCompactLeft size={30}/>
                            </div>
                            <div className="absolute translate-y-[-220px] right-1 bg-black bg-opacity-30 py-1 rounded-md" onClick={nextImage2}>
                                <BsChevronCompactRight size={30}/>
                            </div>
                        </div>

                        <div className=" py-12">
                            <img src={fluid} alt="" className="pb-12"/>
                            <img src={oplogo} alt="" className="pt-12"/>
                        </div>

                        <div className="pt-6 pb-12 flex justify-center">
                            <span className="ocra text-3xl text-center">Clubs, Organizations and clients</span>
                        </div>
                        <div className="flex justify-center pb-16">
                            <div className="space-y-12 max-w-[10rem]">
                                <img src={post} alt=""/>
                                <img src={ghg} alt=""/>
                                <img src={acmw} alt=""/>
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