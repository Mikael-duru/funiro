import React from 'react';

const Menus = () => {
  let url = "#";
  return (
    <div className='xxl:w-1.5/12'>
      <h3 className="font-bold text-2xl text-black pb-3.3">Menu</h3>
      <ul className="flex flex-col gap-3.3 font-black text-base text-lightGray">
        <li><a className="hover:text-primary" href="/Products">Products</a></li>
        <li><a className="hover:text-primary" href={url}>Rooms</a></li>
        <li><a className="hover:text-primary" href={url}>Inspirations</a></li>
        <li><a className="hover:text-primary" href={url}>About Us</a></li>
        <li><a className="hover:text-primary" href={url}>Terms & Policy</a></li>
      </ul>
    </div>
  );
}

export default Menus;