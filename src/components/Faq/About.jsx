import React from 'react';
import Databaze from "../../img/Home/Databaze.png";


export default function About() {
  return (
    <div className="h-[480px] bg-gray-200 flex justify-center items-center">
          <div className="relative w-full h-full flex justify-center items-center">
            <img src={Databaze} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className=" w-full h-[480px] bg-black bg-opacity-50 p-4 text-white text-center relative flex flex-col justify-center items-center">
              <h1 className="text-7xl font-bold">FAQ</h1>
              <p className="text-xl mt-2">Nejčastěji kladené otázky.</p>
            </div>
          </div>
    </div>
  );
}
