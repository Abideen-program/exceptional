import { iconImages } from "../../Utils/images";

const Footer = () => {
  return (
    <div className="p-6">
      <div className="px-[56px] py-[40px] bg-[#000000] rounded-[20px] flex flex-col gap-[40px]">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-xs font-[500] text-[#F7F9FC]">CONVINCED?</p>
          <h3 className="text-white text-[28px] font-bold">
            Let’s create magic together
          </h3>
          <p className="text-[#F7F9FC] text-center">
            Let us unleash our creativity and <br /> expertise to create designs
            that deliver <br /> extraordinary results.
          </p>
        </div>

        <div className="border-t border-[#1D2739] flex flex-col py-4">
          <div className="mx-auto flex items-center justify-center gap-6">
            <div className="h-6 w-6 flex items-center justify-center rounded-full bg-[#007BFFF5] cursor-pointer">
              <img src={iconImages.Facebook} alt="facebook" />
            </div>

            <div className="h-6 w-6 flex items-center justify-center rounded-full bg-[#007BFFF5] cursor-pointer">
              <img src={iconImages.Twitter} alt="facebook" />
            </div>

            <div className="h-6 w-6 flex items-center justify-center rounded-full bg-[#007BFFF5] cursor-pointer">
              <img src={iconImages.Instagram} alt="facebook" />
            </div>

            <div className="h-6 w-6 flex items-center justify-center rounded-full bg-[#007BFFF5] cursor-pointer">
              <img src={iconImages.LinkedIn} alt="facebook" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
