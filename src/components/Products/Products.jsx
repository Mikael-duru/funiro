import React from "react";
import ProductData from "../../data/productData";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Show More Button Navigation
const Product = () => {

  // Product Mapping
  const PdtData = ProductData.map((data) => (
    <div className="relative group" key={data.id}>
      <div className="bg-[#F4F5F7] Card">
        <img alt="Avatar" src={data.image} />
        <div className="pl-5 py-5">
          <h2 className="text-2xl font-bold py-5 max-sm:text-xl lg:text-xl text-left">
            {data.name}
          </h2>
          <p className="text-lg font-bold text-[#898989] sm:text-lg lg:text-lg text-left">
            {data.des}
          </p>
          <div className="flex mt-3">
            <p className="mr-3 text-2xl font-bold sm:text-lg lg:text-lg">
              {data.currentPrice}
            </p>
            <p>
              <del className="font-bold ml-5 text-[#B0B0B0] sm:text-sm lg:text-sm">
                {data.previousPrice}
              </del>
            </p>
          </div>
        </div>
      </div>

      {/* Product On Hover*/}
      <div className="absolute top-0 w-full left-0 h-0 flex justify-center items-center  bg-[rgba(0,0,0,.5)] opacity-0 group-hover:h-full group-hover:opacity-100 duration-500 transition ease-in-out ">
        <button className="bg-white text-[#e89f71] font-bold py-5 group-hover:opacity-100 rounded group-hover:bg-white px-20">
          Add to Cart
        </button>
      </div>
    </div>
  ));

  return (
    // PRODUCT SECTION
    <div className="container mx-auto">
      <div className="ProductContainer grid place-content-center lg:pl-[45px] xl:pl-[100px] xl:pr-[104px] text-center">
        <h2 className="font-bold text-4xl text-center my-10">Our Products</h2>
        <div className="grid gap-4 lg:grid-cols-3 lg:mx-6 xl:grid-cols-4 md:grid-cols-2">
          {PdtData}
        </div>

        {/* Show More Button */}
        <div className="flex justify-center my-8">
          <button
            className="px-16 py-4 border-2 border-[#E89F71] text-[#E89F71] font-bold"
          >
            <Link to="/AllProducts">Show More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
