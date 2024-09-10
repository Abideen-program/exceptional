import { useState } from "react";
import { iconImages } from "../../Utils/images";
import Items from "./Items/Items";
import { motion } from "framer-motion";

const Project = () => {
  const [filter, setFilter] = useState("all");

  return (
    <div className="px-20 py-10">
      <div className="flex flex-col gap-8">
        <div className="border-[0.8px] border-[#E3E3E7] h-[58px] rounded-3xl p-1 flex items-center relative">
          <input
            type="text"
            placeholder="Search property state or city"
            className="border-r border-[#E3E3E7] basis-[40%] h-full px-10 rounded-l-3xl placeholder:text-[#7D7F88] focus:outline-none"
          />

          <input
            type="text"
            placeholder="Search all filters"
            className="border-l border-[#E3E3E7] basis-[60%] h-full px-5 rounded-r-3xl placeholder:text-[#7D7F88] focus:outline-none"
          />
          <img
            src={iconImages.Search}
            alt="search"
            className="absolute top-[17px] left-3"
          />
          <div className="absolute top-[13px] right-3 bg-[#007BFF] h-[30px] w-[30px] rounded-lg flex items-center justify-center cursor-pointer">
            <img src={iconImages.Filter} alt="filter" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="text-[#000000] text-[40px] tracking-wide"
          >
            Featured Projects{" "}
          </motion.h2>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeIn" }}
            className="w-[75%]"
          >
            <p className="text-[17px] text-[#667185] tracking-wide">
              Discover your dream property from your favorite developers.
              Explore our premium listings and find the perfect home or
              investment opportunity tailored to your preferences. Start Your
              Search Today.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeIn" }}
          className="border-b flex items-center gap-2 w-fit"
        >
          <div
            onClick={() => setFilter("all")}
            className={`${
              filter === "all"
                ? "border-b border-[#007BFF] text-[#007BFF]"
                : "text-[#667185]"
            } px-4 py-2 flex items-center justify-center cursor-pointer`}
          >
            <p className="text-sm">All</p>
          </div>

          <div
            onClick={() => setFilter("lekki")}
            className={`${
              filter === "lekki"
                ? "border-b border-[#007BFF] text-[#007BFF]"
                : "text-[#667185]"
            } px-4 py-2 flex items-center justify-center gap-2 cursor-pointer`}
          >
            <p className="text-sm">Lekki Gardens</p>
            <div
              className={`text-xs text-white ${
                filter === "lekki" ? "bg-[#007BFF]" : "bg-[#667185]"
              } rounded-xl px-2 py-0 flex items-center justify-center`}
            >
              80
            </div>
          </div>

          <div
            onClick={() => setFilter("ocean")}
            className={`${
              filter === "ocean"
                ? "border-b border-[#007BFF] text-[#007BFF]"
                : "text-[#667185]"
            } px-4 py-2 flex items-center justify-center gap-2 cursor-pointer`}
          >
            <p className="text-sm">Ocean lake</p>
            <div
              className={`text-xs text-white ${
                filter === "ocean" ? "bg-[#007BFF]" : "bg-[#667185]"
              } rounded-xl px-2 py-0 flex items-center justify-center`}
            >
              10
            </div>
          </div>

          <div
            onClick={() => setFilter("swiss")}
            className={`${
              filter === "swiss"
                ? "border-b border-[#007BFF] text-[#007BFF]"
                : "text-[#667185]"
            } px-4 py-2 flex items-center justify-center cursor-pointer`}
          >
            <p className="text-sm">Swiss village</p>
          </div>

          <div
            onClick={() => setFilter("banana")}
            className={`${
              filter === "banana"
                ? "border-b border-[#007BFF] text-[#007BFF]"
                : "text-[#667185]"
            } px-4 py-2 flex items-center justify-center gap-2 cursor-pointer`}
          >
            <p className="text-sm">Banana Max express</p>
            <div
              className={`text-xs text-white ${
                filter === "banana" ? "bg-[#007BFF]" : "bg-[#667185]"
              } rounded-xl px-2 py-0 flex items-center justify-center`}
            >
              0
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-3 gap-10">
            <Items />
            <Items />
            <Items />
            <Items />
            <Items />
            <Items />
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="text-white bg-[#007BFF] px-6 py-4 rounded-[10px] w-[160px] mx-auto text-lg shadow-lg shadow-[#007BFF33]"
          >
            Load more
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Project;
