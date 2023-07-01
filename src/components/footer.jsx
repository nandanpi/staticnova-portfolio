import React from "react";
import {HashLink} from "react-router-hash-link";
import {SiGmail, SiBehance, SiInstagram, SiTwitter} from "react-icons/si";

const Footer = () => {
    return(
        <>
            <div className="bg-black">
                <div className="py-10 md:py-16">
                    <div className="grid grid-rows-2 text-center gap-10">
                        <HashLink smooth to="/#about"><span className="text-2xl md:text-3xl arialb hover:line-through">About</span></HashLink>
                        <HashLink smooth to="/#contact"><span className="text-2xl md:text-3xl arialb hover:line-through">Contact</span></HashLink>
                    </div>

                    <div className="flex justify-center pt-10">
                        <ul className="flex space-x-12 md:space-x-16">
                            <HashLink smooth to="mailto:yashmithashailesh@gmail.com" target="_blank"><li className="hover:scale-125 duration-200"><SiGmail size={30}/></li></HashLink>
                            <HashLink smooth to="https://instagram.com/staticnovaa?igshid=NGExMmI2YTkyZg==" target="_blank"><li className="hover:scale-125 duration-200"><SiInstagram size={30}/></li></HashLink>
                            <HashLink smooth to="https://www.behance.net/yashmitha?tracking_source=search_projects%7Cyashmitha" target="_blank"><li className="hover:scale-125 duration-200"><SiBehance size={35}/></li></HashLink>
                            <HashLink smooth to="https://twitter.com/staticnovas?t=AmUV2UiDfLRtd0KoCsIaxw&s=09" target="_blank"><li className="hover:scale-125 duration-200"><SiTwitter size={30}/></li></HashLink>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center pb-4">
                    <span className="text-sm">© 2023 Yashmitha S. All Rights Reserved.</span>
                </div>
            </div>
        </>
    );
}

export default Footer;