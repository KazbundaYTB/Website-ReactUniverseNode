import React from 'react';
import Minecraft from "../../img/Home/Minecraft.png";


export default function About() {
  return (
    <div className="h-[480px] bg-gray-200 flex justify-center items-center">
          <div className="relative w-full h-full flex justify-center items-center">
            <img src={Minecraft} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className=" w-full h-[480px] bg-black bg-opacity-50 p-4 text-white text-center relative flex flex-col justify-center items-center">
              <h1 className="text-7xl font-bold">Minecraft Server Hosting</h1>
              <p className="text-xl mt-2">Rozjeďte svůj vlastní Minecraftový server již od 60Kč / €2,43.</p>
            </div>
          </div>
    </div>
  );
}
