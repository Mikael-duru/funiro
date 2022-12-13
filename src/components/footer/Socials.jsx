import React from 'react';

const Socials = () => {
  let url = "#";
  return (
    <div className="xxl:w-2/12">
      <h3 className="font-bold text-2xl text-black pb-4">Stay Connected</h3>
      <ul className="flex flex-col gap-4 font-black text-base text-lightGray">
        <li><a className='hover:text-primary' href={url}>Facebook</a></li>
        <li><a className='hover:text-primary' href={url}>Instagram</a></li>
        <li><a className='hover:text-primary' href={url}>Twitter</a></li>
      </ul>
    </div>
  );
}

export default Socials;