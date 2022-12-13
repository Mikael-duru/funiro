import trophy from "../images/trophy.svg";
import guarantee from "../images/guarantee.svg";
import shippingIcon from "../images/shipping-icon.svg";
import customerSupport from "../images/customer-support.svg";

const Features = () => {
  return (
    <section className="md:pt-10">
      <div className="pl-5 xxl:pl-12 pt-16">
        <div className="flex flex-col md:flex-row gap-8 md:gap-20 xxl:gap-28 xl:flex-nowrap flex-wrap justify-center items-center">
          <div className="flex gap-6 items-center w-72">
            <div className="w-10">
              <img src={trophy} alt="" />
            </div>
            <div>
              <h3 className="font-black text-lg text-darkGray">High Quality</h3>
              <p className="font-black text-base text-grayThree">crafted from top materials</p>
            </div>
          </div>
          <div className="flex gap-6 items-center pr-1 w-72 xl:w-64">
            <div className="w-10">
              <img src={guarantee} alt="" />
            </div>
            <div>
              <h3 className="font-black text-lg text-darkGray">Warranty Protection</h3>
              <p className="font-black text-base text-grayThree">Over 2 years</p>
            </div>
          </div>
          <div className="flex gap-6 items-center pr-2 w-72 xl:w-52">
            <div className="w-10">
              <img src={shippingIcon} alt="" />
            </div>
            <div>
              <h3 className="font-black text-lg text-darkGray">Free Shipping</h3>
              <p className="font-black text-base text-grayThree">Order over 150 $</p>
            </div>
          </div>
          <div className="flex gap-6 items-center w-72 xl:w-56">
            <div className="w-10">
              <img src={customerSupport} alt="" />
            </div>
            <div>
              <h3 className="font-black text-lg text-darkGray">24 / 7 Support</h3>
              <p className="font-black text-base text-grayThree">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;