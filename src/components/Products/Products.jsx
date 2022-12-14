import React from "react";
import "./Products.css";
import ProductData from "../../data/ProductData";
import Funiro from "./Funiro";
import { useNavigate } from "react-router-dom";

// Show More Button Navigation
const Product = () => {
  const navigate = useNavigate();

  // !Product Mapping
  const PdtData = ProductData.map((data, index) => (
    <div className="relative group">
      <div className="bg-[#F4F5F7] Card" key={index}>
        <img alt="Avatar" src={data.image} />
        <div className="pl-5 py-5">
          <h2 className="text-2xl font-bold py-5">{data.name}</h2>
          <p className="text-lg font-bold text-[#898989]">{data.des}</p>
          <div className="flex mt-3">
            <p className="mr-3 text-2xl font-bold">{data.currentPrice}</p>
            <p>
              <del className="font-bold ml-5 text-[#B0B0B0]">
                {data.previousPrice}
              </del>
            </p>
          </div>
        </div>
      </div>


      {/* Product On Hover*/}
      <div className="absolute top-0 w-full left-0 h-0 flex justify-center items-center  bg-black opacity-0 group-hover:h-full group-hover:opacity-60 duration-500 transition ease-in-out ">
        <button className="bg-white text-[#e89f71] font-bold py-5 group-hover:opacity-100 rounded px-20">
          Add to Cart
        </button>
      </div>
    </div>
  ));

  return (
    // PRODUCT SECTION
    <div>
      <div className="ProductContainer">
        <h2 className="font-bold text-4xl text-center my-10">Our Products</h2>
        <div className="PdtCard grid grid-cols-4 gap-4 w-max">{PdtData}</div>

        {/* Show More Button */}
        <div className="flex justify-center my-10">
          <button
            onClick={() => navigate("AllProducts")}
            className="px-16 py-4 border-2 border-[#E89F71] text-[#E89F71] font-bold"
          >
            Show More
          </button>
        </div>

        <Funiro />
      </div>
    </div>
  );
};

export default Product;
