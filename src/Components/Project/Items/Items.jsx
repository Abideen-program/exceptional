import React from "react";
import { iconImages } from "../../../Utils/images";

const Items = () => {
  return (
    <div className="flex flex-col gap-2">
      <img src={iconImages.Small} alt="apartment" className="w-full transition duration-300 ease-in-out hover:scale-[1.01]" />
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-[#2C2C2C] font-bold text-[18px]">
            Grenadines Heights
          </p>

          <div className="flex items-center gap-1">
            <img src={iconImages.Love} alt="love" className="w-[14px]" />
            <p className="text-sm text-[#2C2C2C] font-semibold">890</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1">
            <img src={iconImages.Location} alt="love" className="w-[14px]" />
            <p className="text-sm text-[#2C2C2C] font-[400]">Ikeja, Lagos</p>
          </div>

          <div className="flex items-center gap-1">
            <img src={iconImages.Shower} alt="shower" className="w-[14px]" />
            <p className="text-sm text-[#2C2C2C] font-[400]">4 Baths</p>
          </div>

          <div className="flex items-center gap-1">
            <img src={iconImages.Bed} alt="love" className="w-[14px]" />
            <p className="text-sm text-[#2C2C2C] font-[400]">4 Beds</p>
          </div>
        </div>
        <p className="text-[#007BFF] mt-2 cursor-pointer font-semibold">
          View Details
        </p>
      </div>
    </div>
  );
};

export default Items;
