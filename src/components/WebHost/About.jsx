import React from 'react';
import WebHost from "../../img/Home/Website.png";


export default function About() {
  return (
    <div className="h-[480px] bg-gray-200 flex justify-center items-center">
          <div className="relative w-full h-full flex justify-center items-center">
            <img src={WebHost} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className=" w-full h-[480px] bg-black bg-opacity-50 p-4 text-white text-center relative flex flex-col justify-center items-center">
              <h1 className="text-7xl font-bold">Web Hosting</h1>
              <p className="text-xl mt-2">Rozjeďte svou vlastní webovou stránku již od 35Kč / €1,42.</p>
            </div>
          </div>
    </div>
  );
}
