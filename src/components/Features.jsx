import trophy from "../images/trophy.svg";
// import guarantee from "../images/guarantee.svg";
// import shippingIcon from "../images/shipping-icon.svg";
// import customerSupport from "../images/customer-support.svg";

const Features = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="">
          <div>
            <div>
              <img src={trophy} alt="" />
            </div>
            <div className="">
              <h3 className="font-black text-lg text-grayOne">High Quality</h3>
              <p className="font-black text-base">crafted from top materials</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;