import React from 'react';

import NavBar from './Minecraft/NavBar';
import About from './Minecraft/About';
import Packages from './Minecraft/Packages';
import Footer from './Minecraft/Footer';

export function Minecraft() {
  return (
    <div className=' overflow-x-hidden'>
      <div className='bg-neutral-950 w-screen h-[75px]'>
        <NavBar />
      </div>

      <div className='bg-neutral-800  w-screen h-[480px] '>
        <About />
      </div>
      <div className='bg-neutral-900 w-screen h-[1150px] '>
        <Packages />
      </div>

      <div className='bg-gray-800 w-screen h-[75px]'>
        <Footer />
      </div>
    </div>
  );
}

export default Minecraft;
