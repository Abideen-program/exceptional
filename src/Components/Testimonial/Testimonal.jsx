import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import TestimonialItem from "./TestimonialItem";
import SliderButton from "../Developer/SliderButton";

const Testimonal = () => {
  return (
    <div className="px-20 py-5">
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-[#000000] text-[40px] tracking-wide">
            Testimonials
          </h2>

          <p className="text-[17px] text-[#667185] tracking-wide">
            Here's what our clients have to say about their real estate
            experiences with us.
          </p>
        </div>

        <div className="mt-10">
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
                slidesPerView: 3,
                // spaceBetween: 100,
              },
            }}
          >
            <SwiperSlide>
              <TestimonialItem
                name={"John Doe, Investor"}
                testimony={
                  "Investing with Stanbic IBTC was a game-changer for me. Their attention to detail and commitment to quality ensured my property not only met but exceeded my expectations. Highly recommended!"
                }
              />
            </SwiperSlide>

            <SwiperSlide>
              <TestimonialItem
                name={"Jane Smith, Homebuyer"}
                testimony={
                  "Finding my dream home was effortless with Stanbic IBTC. Their team guided me through every step, from property selection to finalizing the deal. I couldn't be happier with my new place"
                }
              />
            </SwiperSlide>

            <SwiperSlide>
              <TestimonialItem
                name={"David Johnson, Developer Partner"}
                testimony={
                  "Working with [Company Name] on our latest project was a pleasure. Their professionalism and expertise in real estate development made the entire process smooth and successful. Looking forward to future collaborations!"
                }
              />
            </SwiperSlide>

            <SwiperSlide>
              <TestimonialItem
                name={"John Doe, Investor"}
                testimony={
                  "Investing with Stanbic IBTC was a game-changer for me. Their attention to detail and commitment to quality ensured my property not only met but exceeded my expectations. Highly recommended!"
                }
              />
            </SwiperSlide>

            <SliderButton />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
