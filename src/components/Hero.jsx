import arrowRight from "../images/arrow-right.svg";

const Hero = () => {
  return (
    <section className="container mx-auto">
      <div className="bg-[#F9F1E7]">
        <div className="pt-6 sm:pt-20 px-[5px] sm:px-2 lg:pl-[5px] lg:pr-[13px] relative">
          <div className="bg-hero bg-no-repeat bg-left-bottom bg-cover object-contain h-[145px] sm:h-[250px] md:h-[300px] lg:h-[375px] xl:h-[500px] xxl:h-[553px] w-full">
            <div className="xxl:w-[294px] sm:absolute sm:right-4 sm:bottom-4 md:right-7 md:bottom-6 lg:right-20 lg:bottom-10 xl:right-[122px] xxl:right-[143px]">
              <div className="pt-4 pl-3 lg:pl-4 xl:pl-6  sm:pb-14 md:pb-16 lg:pb-20 xl:pb-28 xxl:pb-[138.52px]">
                <h2 className="font-black text-xl sm:text-[28px] lg:leading-[34px] text-darkGray ">Bohauss</h2>
                <p className="font-black text-sm md:text-base text-lightGray">Luxury big sofa 2-seat</p>
              </div>
              <button className="hidden font-black text-base md:text-lg lg:text-xl text-darkGray bg-[rgba(255,255,255,.72)] backdrop-filter backdrop-blur w-full sm:flex items-center justify-between lg:gap-10 p-3 lg:p-4 xl:pl-6 xl:pb-6 xl:pt-[23px] xl:pr-[28.39px] cursor-pointer hover:scale-95">
                Rp 17.000.000
                <img src={arrowRight} alt="" />
              </button>
            </div>
          </div>
          <div className="pt-10 pb-6 px-3 sm:py-0 sm:absolute sm:top-0 md:pl-4 xxl:pl-[100px]">
            <div className="mx-auto w-full sm:w-[270px] md:w-[304px] lg:w-[404px] xl:w-[494px] bg-[rgba(255,255,255,.72)] backdrop-filter backdrop-blur">
              <div className="py-6 px-6 sm:py-4 md:py-6 lg:p-9 xl:pl-12 xxl:py-[60px] xxl:pl-[60px]">
                <h1 className="font-bold text-2xl md:text-4xl lg:text-[40px] lg:leading-tight xl:text-[3.5rem] xl:leading-[4.1875rem] pb-3 lg:pb-4 text-darkGray">High-Quality Furniture Just For You</h1>
                <p className="font-black text-base lg:text-lg xl:text-xl text-grayThree xl:pr-[4.8125rem] pb-4 lg:pb-[1.125rem]">Our furniture is made from selected and best quality materials that are suitable for your dream home</p>
                <button className="py-3 px-10 lg:py-4 xl:py-6 xl:pl-[140px] xl:pr-[132px] bg-primary cursor-pointer hover:bg-transparent border-2 hover:border-primary hover:text-primary font-black text-white text-base lg:text-xl">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </section>
  );
}

export default Hero;