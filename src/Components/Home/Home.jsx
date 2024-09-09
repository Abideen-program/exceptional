import Header from "../Header/Header";

const Home = () => {
  return (
    <div className="">
      <Header />
      <div className="relative w-full h-[calc(100vh_+_88px)]  bg-[url('/images/hero.png')] bg-no-repeat bg-cover border border-blue-800 ">
        <div className="w-full h-full bg-black bg-opacity-60 flex flex-col px-20">
          <div className="w-full h-full flex flex-col justify-center gap-6">
            <h1 className="text-white font-[500] xl:text-[60px] 2xl:text-[72px] leading-[90px]">
              Exceptional Real Estate Projects by Leading Developers
            </h1>

            <div className="w-[75%]">
              <p className="text-white text-xl leading-[30px]">
                Explore premier real estate developments from top professionals,
                featuring luxurious condos, serene retreats, and cutting-edge
                commercial spaces. Experience the finest craftsmanship,
                innovative designs, and unmatched quality by renowned
                developers.
              </p>
            </div>

            <button className="h-[82px] w-[217px] border border-white text-white p-10 text-2xl rounded-[72px] flex flex-col items-center justify-center">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
