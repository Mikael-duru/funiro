import React from "react";
import "./Funiro.css";
import "../../App.css"
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
        <div className="FuniroContent w-full mt-20">
          <p className="p text-2xl leading-8 font-black text-center text-[#616161] max-sm:text-xl">
            Share your setup with
          </p>
          <h1 className="text-4xl font-bold font-black text-center max-sm:text-2xl">
            #FuniroFurniture
          </h1>
        </div>
        <div className="ImgContainer px-1 mx-auto">
          <div className="ImageContainer-1 max-lg:grid max-lg:grid-cols-3 max-sm:flex-col max-sm:mt-20">
            <img id="Share1" alt="Product-Image1" src={Share1} />
            <img id="Share2" alt="Product-Image2" src={Share2} />
            <img id="Share3" alt="Product-Image3" src={Share3} />
          </div>

          <div className="ImageContainer-2 mt-5 max-lg:grid max-lg:grid-cols-2 max-lg:w-fit max-sm:flex-col">
            <img id="Share4" alt="Product-Image4" src={Share4} />
            <img id="Share5" alt="Product-Image5" src={Share5} />
            <img id="Share6" alt="Product-Image6" src={Share6} />
            <img id="Share7" alt="Product-Image7 " src={Share7} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funiro;


