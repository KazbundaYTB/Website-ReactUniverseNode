import React from 'react';

import NavBar from './Databaze/NavBar';
import About from './Databaze/About';
import Packages from './Databaze/Packages';
import Footer from './Databaze/Footer';

export function Databaze() {
  return (
    <div className=' overflow-x-hidden'>
      <div className='bg-neutral-950 w-screen h-[75px]'>
        <NavBar />
      </div>

      <div className='bg-neutral-800  w-screen h-[480px] '>
        <About />
      </div>
      <div className='bg-neutral-900 w-screen h-[850px] '>
        <Packages />
      </div>

      <div className='bg-gray-800 w-screen h-[75px]'>
        <Footer />
      </div>
    </div>
  );
}

export default Databaze;
