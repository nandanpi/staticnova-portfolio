import React, { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/solid";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={handleClick}
      className={`${
        showButton ? "opacity-100" : "opacity-0"
      } fixed bottom-6 right-6 bg-gray-800 p-3 rounded-full transition-opacity duration-300 ease-in-out`}
    >
      <ChevronUpIcon className="h-8 w-8"/>
    </button>
  );
};

export default ScrollToTopButton;