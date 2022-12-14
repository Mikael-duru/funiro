import React from "react";

const Contact = () => {
  return (
    <div className="md:pr-2.2 xxl:w-1/5">
      <h3 className="font-bold text-2xl text-black pb-4"><a href="/">Funiro.</a></h3>
      <ul className="flex flex-col gap-1.5 text-lightGray font-normal text-base">
        <li className="lg:w-contact">Worldwide furniture store since 2020. We sell over 1000+ branded products on our website</li>
        <li>Sawojajar Malang, Indonesia</li>
        <li><a className="hover:text-primary text-lightGray" href="tel:+6289 456 3455">+6289 456 3455</a></li>
        <li><a className="hover:text-primary text-lightGray" href="/">www.funiro.com</a></li>
      </ul>
    </div>
  );
}

export default Contact;