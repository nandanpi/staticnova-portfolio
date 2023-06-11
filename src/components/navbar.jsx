import React,{useState} from "react";
import {HashLink} from "react-router-hash-link";
const Navbar = () => {
    const [nav,setNav] = useState(false);
    function toggleNav(){
        setNav(!nav);
    }
    return(
        <>
            <div className="hidden md:flex justify-between text-white">
                <div className="px-6 py-4">
                    <span className="arialb text-3xl">Staticnova</span>
                </div>
                <div className="px-6 py-4">
                    <ul className="flex space-x-6 text-3xl ocra">
                        <li><HashLink smooth to="/#works">Works</HashLink></li>
                        <li><HashLink smooth to="/#about">About Me</HashLink></li>
                        <li><HashLink smooth to="/#contact">Contact</HashLink></li>
                    </ul>
                </div>
            </div>
        </>
    );

}
export default Navbar;