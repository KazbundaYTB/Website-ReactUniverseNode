import React from 'react';
import Benefits from './Home/Benefits';
import NavBar from './Home/NavBar';
import Partners from './Home/Partners';
import ServicePreview from './Home/ServicePreview';
import Footer from './Home/Footer';

export function Home() {
  return (
    <div className=' overflow-x-hidden'>
      <div className='bg-neutral-950 w-screen h-[75px]'>
        <NavBar />
      </div>

      <div className='bg-neutral-800  w-screen h-[780px] '>
        <ServicePreview />
      </div>
      <div className='bg-neutral-900 w-screen h-[350px] '>
        <Benefits />
      </div>
      <div className='bg-neutral-900 w-screen h-[250px] '>
        <Partners />
      </div>

      <div className='bg-gray-800 w-screen h-[75px]'>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
