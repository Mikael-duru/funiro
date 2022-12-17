import React from 'react';

const Account = () => {
  let url = "#";
  return (
    <div className="xxl:w-1.5/12 md:mr-16 xxl:mr-14">
      <h3 className="font-bold text-2xl text-black pb-4">Account</h3>
      <ul className="flex flex-col gap-4 font-black text-base text-lightGray">
        <li><a className='hover:text-primary' href={url}>My Account</a></li>
        <li><a className='hover:text-primary' href="/checkout">Checkout</a></li>
        <li><a className='hover:text-primary' href="/cart">Cart</a></li>
        <li><a className='hover:text-primary' href={url}>My Catalog</a></li>
      </ul>
    </div>
  );
}

export default Account;