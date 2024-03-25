import React from "react";
import { bazaarlogo } from "../assets/index";
import { cart } from "../assets/index";
import { user } from "../assets/index"
const Header = () => {
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div>
          <img className="w-28" src={bazaarlogo} alt="bazaarlogo" />
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Home</li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Pages</li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Shop</li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Element</li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Blog</li>
          </ul>
            <div className="relative">
                <img  className="w-7" src={cart} alt="" />
                <span className="absolute w-6 top-2 left-0.5 text-sm flex items-center justify-center font-semibold font-titleFont">0</span>
            </div>
            <img src={user} className="w-7" alt="userlogo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
