import React from "react";
import { iconImages } from "../../Utils/images";
import { motion } from "framer-motion";

const DeveloperItem = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeIn" }}
      className="relative rounded-2xl xl:w-fit"
    >
      <img src={iconImages.Big} alt="" className="" />

      <div className="absolute bottom-8 left-8 flex flex-col gap-1 pr-3">
        <h3 className="text-xl xl:text-[30px] 2xl:text-[32px] 3xl:text-[40px] text-white font-[500] mb-0 3xl:mb-2">
          PrimewaterView Limited
        </h3>
        <div className="xl:w-[75%]">
          <p className="text-xs xl:text-sm 3xl:text-xl text-white xl:font-[500]">
            Specializing in high-end residential properties, PrimewaterView
            Limited has established itself as a leader in luxury living.
          </p>
        </div>
        <button className="mt-2 xl:mt-5 w-[184px] xl:py-[18px] p-2 xl:px-[43px] bg-white flex flex-col items-center justify-center text-sm font-bold rounded-md xl:rounded-2xl">
          View Projects
        </button>
      </div>
    </motion.div>
  );
};

export default DeveloperItem;
