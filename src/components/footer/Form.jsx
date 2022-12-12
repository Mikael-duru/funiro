import React from "react";
import sendArrow from "../../images/sendArrow.svg"

const Form = () => {
  return (
    <div className="2xl:w-1/4">
      <h3 className="font-bold text-2xl text-black pb-4">Stay Updated</h3>
      <form className="flex gap-1 justify-center">
        <input type="email" placeholder="Enter your email" className="bg-lightBg w-full font-normal text-base text-midGray outline-none focus:ring-1 focus:ring-primary md:max-w-form pt-2.1 pb-2.2 pl-3.1" />
        <button className="bg-primary cursor-pointer w-formButton grid place-content-center pt-3.1 pb-3.2 hover:scale-y-95"><img src={sendArrow} alt="" /></button>
      </form>
    </div>
  );
}

export default Form;