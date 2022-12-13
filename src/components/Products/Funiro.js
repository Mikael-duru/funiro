import React from "react";
import "./Funiro.css";
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
      <div
     className="FuniroContainer" 
     data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"
>
        <div className="FuniroContent">
          <p className="p text-2xl leading-8 font-black text-center text-[#616161]">
            Share your setup with
          </p>
          <h1 className="text-4xl font-bold font-black text-center">
            #FuniroFurniture
          </h1>
        </div>
        <div className="ImgContainer">
          <div className="ImageContainer-1">
            <img id="Share1" alt="Product-Image1" src={Share1} />
            <img id="Share2" alt="Product-Image2" src={Share2} />
            <img id="Share3" alt="Product-Image3" src={Share3} />
          </div>

          <div className="ImageContainer-2">
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


