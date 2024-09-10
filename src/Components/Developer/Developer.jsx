import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import DeveloperItem from "./DeveloperItem";
import SliderButton from "./SliderButton";

import { motion } from "framer-motion";

const Developer = () => {
  return (
    <div className="px-20 py-5">
      <div className="flex flex-col">
        <div className="flex flex-col gap-4">
          <motion.h2
            initial={{ x: "50%", opacity: 0 }}
            whileInView={{ x: 0.4, opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="text-[#000000] text-[40px] tracking-wide"
          >
            Top Real Estate Developers
          </motion.h2>
          <div className="w-[60%]">
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
              className="text-[17px] text-[#667185] tracking-wide"
            >
              Discover projects from leading developers in Lagos, offering
              exceptional properties tailored to your lifestyle and investment
              goals.
            </motion.p>
          </div>
        </div>

        <div className="mt-5">
          <Swiper
            className="swiper-container w-full"
            spaceBetween={20}
            centeredSlides={false}
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1024: {
                slidesPerView: 2,
                // spaceBetween: 100,
              },
            }}
          >
            <SwiperSlide>
              <DeveloperItem />
            </SwiperSlide>

            <SwiperSlide>
              <DeveloperItem />
            </SwiperSlide>

            <SwiperSlide>
              <DeveloperItem />
            </SwiperSlide>
            <SliderButton />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Developer;
