import React from "react";
import { iconImages } from "../../Utils/images";

const Header = () => {
  return (
    <div className="border border-red-400 h-[70px] px-[72px] py-6 flex items-center bg-white fixed right-0 left-0 top-0 z-[999]">
      <div className="border border-blue-400 flex items-center justify-between w-[70%] ml-auto">
        <div className="inter">
          <ul className="flex items-center justify-center gap-6">
            <li className="flex items-center justify-center gap-2 cursor-pointer">
              <p className="text-sm font-semibold">Solutions</p>
              <img
                src={iconImages.ArrowDown}
                alt="arrowdown"
                className="h-[8px]"
              />
            </li>

            <li className="cursor-pointer">
              <p className="text-sm font-semibold">How it works</p>
            </li>

            <li className="flex items-center justify-center gap-2 cursor-pointer">
              <p className="text-sm font-semibold">About</p>
              <img
                src={iconImages.ArrowDown}
                alt="arrowdown"
                className="h-[8px]"
              />
            </li>

            <li className="cursor-pointer">
              <p className="text-sm font-semibold">Resources</p>
            </li>
          </ul>
        </div>

        <button className="inter flex items-center justify-center text-sm font-semibold px-4 py-2 bg-[#007BFF] rounded-lg text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;
