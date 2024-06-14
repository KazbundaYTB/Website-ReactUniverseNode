import React from 'react';

import NavBar from './WebHost/NavBar';
import About from './WebHost/About';
import Packages from './WebHost/Packages';
import Footer from './WebHost/Footer';

export function WebHost() {
  return (
    <div className=' overflow-x-hidden'>
      <div className='bg-neutral-950 w-screen h-[75px]'>
        <NavBar />
      </div>

      <div className='bg-neutral-800  w-screen h-[480px] '>
        <About />
      </div>
      <div className='bg-neutral-900 w-screen h-[650px] '>
        <Packages />
      </div>

      <div className='bg-gray-800 w-screen h-[75px]'>
        <Footer />
      </div>
    </div>
  );
}

export default WebHost;
