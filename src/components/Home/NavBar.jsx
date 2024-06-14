import React from 'react';
import { FaHome, FaQuestion, FaDatabase  } from "react-icons/fa";
import { TbBrandMinecraft } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";


export default function NavBar() {
  return (
    <div className='flex justify-center items-center h-full text-white'>
      <ul className='flex flex-row space-x-4'>
        <li className='flex flex-row items-center'>
          <a href="/"><button className='flex items-center space-x-2 font-bold'> <FaHome /> <span>Home</span> </button></a></li>
        <li><a href="/minecraft"><button className='flex items-center space-x-2 font-bold'> <TbBrandMinecraft /> <span>Minecraft</span> </button></a></li>
        <li><a href="/webhost"><button className='flex items-center space-x-2 font-bold'> <CgWebsite /> <span>WebHost</span> </button></a></li>
        <li><a href="/databaze"><button className='flex items-center space-x-2 font-bold'> <FaDatabase /> <span>Databáze</span> </button></a></li>
        {/* <li><a href="/faq"><button className='flex items-center space-x-2 font-bold'> <FaQuestion /> <span>FAQ</span> </button></a></li> */}
      </ul>
    </div>
  );
}
