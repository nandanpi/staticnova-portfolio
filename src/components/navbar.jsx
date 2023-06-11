import React from "react";
import {HashLink} from "react-router-hash-link";
const Navbar = () => {
    return(
        <>
            <div className="flex justify-between text-white">
                <div className="px-6 py-4">
                    <span className="arialb text-3xl">Staticnova</span>
                </div>
                <div className="px-6 py-4">
                    <ul className="flex space-x-6 text-3xl ocra">
                        <li><HashLink smooth to="/#works">Works</HashLink></li>
                        <li>About Me</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </>
    );

}
export default Navbar;