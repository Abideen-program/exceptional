import { useState } from "react";

import { motion } from "framer-motion";

import { iconImages } from "../../Utils/images";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="hidden h-[70px] px-[72px] py-6 xl:flex items-center bg-white fixed right-0 left-0 top-0 z-[999]">
        <div className="flex items-center justify-between w-[70%] ml-auto">
          <div className="inter">
            <ul className="flex items-center justify-center gap-6">
              <li className="flex flex-col items-center justify-center gap-2 cursor-pointer relative group">
                <div className="flex items-center justify-center gap-2">
                  <p className="text-sm font-semibold">Solutions</p>
                  <img
                    src={iconImages.ArrowDown}
                    alt="arrowdown"
                    className="h-[8px]"
                  />
                </div>
                <div className="h-[2px] w-full bg-[#007BFF] absolute -bottom-1 right-0 left-0 group-hover:opacity-100"></div>
              </li>

              <li className="cursor-pointer relative group">
                <p className="text-sm font-semibold">How it works</p>
                <div className="h-[2px] w-full opacity-0 bg-[#007BFF] absolute -bottom-1 right-0 left-0 group-hover:opacity-100"></div>
              </li>

              <li className="flex flex-col items-center justify-center gap-2 cursor-pointer relative group">
                <div className="flex items-center justify-center gap-2">
                  <p className="text-sm font-semibold">About</p>
                  <img
                    src={iconImages.ArrowDown}
                    alt="arrowdown"
                    className="h-[8px]"
                  />
                </div>
                <div className="h-[2px] opacity-0 w-full bg-[#007BFF] absolute -bottom-1 right-0 left-0 group-hover:opacity-100"></div>
              </li>

              <li className="cursor-pointer relative group">
                <p className="text-sm font-semibold">Resources</p>
                <div className="h-[2px] w-full opacity-0 bg-[#007BFF] absolute -bottom-1 right-0 left-0 group-hover:opacity-100"></div>
              </li>
            </ul>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="inter flex items-center justify-center text-sm font-semibold px-4 py-2 bg-[#007BFF] rounded-lg text-white"
          >
            Get Started
          </motion.button>
        </div>
      </div>

      <div className="flex items-center h-[50px] px-5 py-6 xl:hidden  bg-white fixed right-0 left-0 top-0 z-[999] =">
        <div>
          <img
            src={iconImages.Hambugger}
            width={20}
            height={18}
            alt="Logo"
            className="cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        </div>

        <ul
          className={`w-[60%] h-[100vh] absolute top-0 border bg-zinc-100 bg-opacity-100 flex flex-col items-start gap-5 py-12 px-[32px] z-[1000] transition-all duration-500 ease-in ${
            !menuOpen ? "right-[-100%]" : "right-[0%]"
          }`}
        >
          <div
            className="absolute right-6 top-3 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src={iconImages.Close}
              width={24}
              height={18}
              alt="Logo"
              className="cursor-pointer"
            />
          </div>

          <li className="cursor-pointer relative group">
            <p className="text-sm font-semibold">How it works</p>
            <div className="h-[2px] w-full opacity-0 bg-[#007BFF] absolute -bottom-1 right-0 left-0 group-hover:opacity-100"></div>
          </li>

          <li className="flex flex-col items-center justify-center gap-2 cursor-pointer relative group">
            <div className="flex items-center justify-center gap-2">
              <p className="text-sm font-semibold">About</p>
              <img
                src={iconImages.ArrowDown}
                alt="arrowdown"
                className="h-[8px]"
              />
            </div>
            <div className="h-[2px] opacity-0 w-full bg-[#007BFF] absolute -bottom-1 right-0 left-0 group-hover:opacity-100"></div>
          </li>

          <li className="flex flex-col items-center justify-center gap-2 cursor-pointer relative group">
            <div className="flex items-center justify-center gap-2">
              <p className="text-sm font-semibold">About</p>
              <img
                src={iconImages.ArrowDown}
                alt="arrowdown"
                className="h-[8px]"
              />
            </div>
            <div className="h-[2px] opacity-0 w-full bg-[#007BFF] absolute -bottom-1 right-0 left-0 group-hover:opacity-100"></div>
          </li>

          <li className="cursor-pointer relative group">
            <p className="text-sm font-semibold">Resources</p>
            <div className="h-[2px] w-full opacity-0 bg-[#007BFF] absolute -bottom-1 right-0 left-0 group-hover:opacity-100"></div>
          </li>

          <li>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="inter flex items-center justify-center text-sm font-semibold px-4 py-2 bg-[#007BFF] rounded-lg text-white"
            >
              Get Started
            </motion.button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
