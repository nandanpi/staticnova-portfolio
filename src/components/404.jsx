import React from "react";
import image from "../assets/svg/404.svg";
import {HashLink} from "react-router-hash-link";

const NotFound = () => {
    return(
        <>
            <div className="flex justify-center ">
                <img src={image} alt=""/>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-rows-2 text-center gap-5">
                    <span className="text-4xl ocra">There is nothing here....</span>
                    <span className="text-2xl ocra">...maybe the page you're looking for is not found or never existed</span>
                </div>
            </div>
            <div className="py-[5.98rem] flex justify-center">
                <HashLink smooth to="/">
                    <span className="ocra text-3xl bg-black py-4 px-6 rounded-md">Home Page</span>
                </HashLink>
            </div>
        </>
    );
}
export default NotFound;