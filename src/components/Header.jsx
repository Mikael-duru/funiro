import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import cart from '../images/Cart.svg';
import userPic from '../images/user.svg';
import searchIcon from '../images/search-icon.svg'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="container mx-auto">
      <nav className="bg-[#F9F1E7]">
        <div className="px-4 sm:px-6 lg:px-6 xxl:pl-[6.5625rem] xxl:pr-[2.875rem] py-8 xxl:pt-10 xxl:pb-14">
          <div className="flex items-center justify-between gap-10 h-[45px]">
            <div className="flex-shrink-0">
              <h3 className="font-bold text-2xl text-black"><a href="/">Funiro.</a></h3>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center gap-8 lg:gap-[3.1943rem]">
                <a href="/products" className="font-black hover:scale-105 text-darkGray text-base">
                  Products
                </a>
                <form className="flex items-center border-1 bg-white shadow-sm">
                  <div className="pt-[0.9581rem] px-[1.0031rem] pb-[1.0206rem] ">
                    <button className="flex items-center justify-center">
                      <img src={searchIcon} alt="" />
                    </button>
                  </div>
                  <input className="w-full md:pr-16 lg:pr-[15.7018rem] text-sm font-normal text-lightGray focus:outline-none" id="search" type="text" placeholder="Search for minimalist chair" />
                </form>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center gap-[2.1562rem]">
                <a href="/cart" className="hover:scale-110"><img src={cart} alt="" /></a>
                <a href="/"><img src={userPic} alt="" /></a>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden absolute bg-[#F9F1E7] w-full" id="mobile-menu">
              <ul ref={ref} className="flex flex-col gap-5 px-2 pt-2 pb-6 space-y-1 sm:px-3">
                <li className="px-3">
                  <a href="/products" className="font-black hover:text-primary text-darkGray text-base">
                    Products
                  </a>
                </li>

                <li className="px-3">
                  <form className="flex items-center border-1 bg-white shadow-sm">
                    <div className="pt-[0.9581rem] px-[1.0031rem] pb-[1.0206rem] ">
                      <button className="flex items-center justify-center">
                        <img src={searchIcon} alt="" />
                      </button>
                    </div>
                    <input className="w-full md:pr-16 lg:pr-[15.7018rem] text-sm font-normal text-lightGray focus:outline-none" id="search" type="text" placeholder="Search for minimalist chair" />
                  </form>
                </li>

                <li className="px-3">
                  <a href="/cart" className="hover:scale-110"><img src={cart} alt="" /></a>
                </li>

                <li className="px-3">
                  <a href="/"><img src={userPic} alt="" /></a>
                </li>
              </ul>
            </div>
          )}
        </Transition>
      </nav>
    </header>
  );
}

export default Header;
