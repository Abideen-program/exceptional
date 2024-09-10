import React from "react";
import { iconImages } from "../../Utils/images";

const DeveloperItem = () => {
  return (
    <div className="relative rounded-2xl w-fit">
      <img src={iconImages.Big} alt="" className="" />

      <div className="absolute bottom-8 left-8 flex flex-col gap-1">
        <h3 className="text-[32px] text-white font-[500]">
          PrimewaterView Limited
        </h3>
        <div className="w-[75%]">
          <p className="text-sm text-white font-[500]">
            Specializing in high-end residential properties, PrimewaterView
            Limited has established itself as a leader in luxury living.
          </p>
        </div>
        <button className="mt-5 w-[184px] py-[18px] px-[43px] bg-white flex flex-col items-center justify-center text-sm font-bold rounded-2xl">
          View Projects
        </button>
      </div>
    </div>
  );
};

export default DeveloperItem;
