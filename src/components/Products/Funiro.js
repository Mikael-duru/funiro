import React from "react";
import "./Funiro.css";
import "../../App.css";
import Share1 from "../../images/share1.png";
import Share2 from "../../images/share2.png";
import Share3 from "../../images/share3.png";
import Share4 from "../../images/share4.png";
import Share5 from "../../images/share5.png";
import Share6 from "../../images/share6.png";
import Share7 from "../../images/share7.png";

const Funiro = () => {
  return (
    <div>
      <div className="FuniroContainer">
        <div className="FuniroContent w-full mt-20 lg:mt-[115px]">
          <p className="p text-2xl leading-8 font-black text-center text-[#616161] sm:text-xl">
            Share your setup with
          </p>
          <h1 className="text-4xl font-bold font-black text-center">
            #FuniroFurniture
          </h1>
        </div>


        <div className="ImgContainer px-5  mx-auto ">
          <div className="ImageContainer-1 lg:grid lg:grid-cols-3 lg:justify-center items-center flex flex-col mt-10 gap-4">
            <img alt="Product-Image1" src={Share1} />
            <img alt="Product-Image2" src={Share2} />
            <img alt="Product-Image3" src={Share3} />
          </div>

          <div className="ImageContainer-2 lg:grid lg:grid-cols-4 lg:justify-center lg:mx-10 mt-5 flex flex-col gap-4">
            <img alt="Product-Image4" src={Share4} />
            <img alt="Product-Image5" src={Share5} />
            <img alt="Product-Image6" src={Share6} />
            <img alt="Product-Image7 " src={Share7} />
          </div>
        </div>


       
      </div>
    </div>
  );
};

export default Funiro;
