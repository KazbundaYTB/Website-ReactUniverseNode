import React from 'react';

import NavBar from './Faq/NavBar';
import About from './Faq/About';
import Questions from './Faq/Questions';
import Footer from './Faq/Footer';

export function Faq() {
  return (
    <div className=' overflow-x-hidden'>
      <div className='bg-neutral-950 w-screen h-[75px]'>
        <NavBar />
      </div>

      <div className='bg-neutral-800  w-screen h-[480px] '>
        <About />
      </div>
      <div className='bg-neutral-900 w-screen h-[850px] '>
        <Questions />
      </div>

      <div className='bg-gray-800 w-screen h-[75px]'>
        <Footer />
      </div>
    </div>
  );
}

export default Faq;
