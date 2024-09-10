import { useSwiper } from "swiper/react";
import { motion } from "framer-motion";
import { iconImages } from "../../Utils/images";

const SliderButton = () => {
  const swiper = useSwiper();

  return (
    <div className="flex items-center justify-between mt-6">
      <motion.div
        initial={{ scale: 1 }}
        whileTap={{ scale: 0.9, rotate: "-4deg" }}
        className="w-12 h-12 rounded-full flex flex-col items-center justify-center bg-[#F5F5F5A3] cursor-pointer border"
        onClick={() => swiper.slidePrev()}
      >
        <img src={iconImages.Prev} alt="arrow" />
      </motion.div>

      <motion.div
        initial={{ scale: 1 }}
        whileTap={{ scale: 0.9, rotate: "4deg" }}
        className="w-12 h-12 rounded-full flex flex-col items-center justify-center bg-[#007BFF] cursor-pointer"
        onClick={() => swiper.slideNext()}
      >
        <img src={iconImages.Next} alt="arrow" />
      </motion.div>
    </div>
  );
};

export default SliderButton;
