import { motion } from "framer-motion";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div className="">
      <Header />
      <div className="relative w-full h-screen md:h-[calc(100vh_+_88px)]  bg-[url('/images/hero.png')] bg-no-repeat bg-cover">
        <div className="w-full h-full bg-black bg-opacity-60 flex flex-col px-5 md:px-20">
          <div className="w-full h-full flex flex-col justify-center gap-3 md:gap-6">
            <motion.h1
              initial={{ scale: 0, rotate: "0deg" }}
              animate={{ scale: 1, rotate: "360deg" }}
              transition={{ duration: 0.5, ease: "backInOut" }}
              className="text-white font-[500] text-[30px] md:text-[40px] xl:text-[60px] 2xl:text-[72px] xl:leading-[70px] 2xl:leading-[90px] tracking-tight"
            >
              Exceptional Real Estate Projects by Leading Developers
            </motion.h1>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="xl:w-[85%] 2xl:w-[75%]"
            >
              <p className="text-white text-[15px] xl:text-xl 3xl:text-2xl md:leading-[23px] xl:leading-[30px] tracking-tight">
                Explore premier real estate developments from top professionals,
                featuring luxurious condos, serene retreats, and cutting-edge
                commercial spaces. Experience the finest craftsmanship,
                innovative designs, and unmatched quality by renowned
                developers.
              </p>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99, rotate: "2.5deg" }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="xl:h-[82px] h-fit w-fit xl:w-[217px] border border-white text-white px-10 py-2 md:py-4 xl:p-10 xl:text-2xl rounded-3xl xl:rounded-[72px] flex flex-col items-center justify-center tracking-tight animate-pulse"
            >
              Explore
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
