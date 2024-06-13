import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Logo from "../../img/Logo.png";

export default function Partners() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // 2 seconds
    pauseOnHover: false,
  };

  return (
    <div className='w-screen flex flex-col justify-center items-center'>
      <div className='text-2xl text-white pt-3 font-bold'>Naše spolupráce</div>
      <div className=' w-[160px] h-[1px] mt-2 bg-white'></div>
      <div className='flex mt-5 justify-center w-full'>
        <Slider {...settings} className='w-full flex justify-center items-center'>
          <div className='flex justify-center items-center'>
            <img src={Logo} alt="" className='w-[128px] h-[128px] mx-[50px] opacity-60'/>
          </div>
          <div className='flex justify-center items-center'>
            <img src={Logo} alt="" className='w-[128px] h-[128px] mx-[50px] opacity-60'/>
          </div>
          <div className='flex justify-center items-center'>
            <img src={Logo} alt="" className='w-[128px] h-[128px] mx-[50px] opacity-60'/>
          </div>
          <div className='flex justify-center items-center'>
            <img src={Logo} alt="" className='w-[128px] h-[128px] mx-[50px] opacity-60'/>
          </div>
          <div className='flex justify-center items-center'>
            <img src={Logo} alt="" className='w-[128px] h-[128px] mx-[50px] opacity-60'/>
          </div>
          {/* Add more slides if needed */}
        </Slider>
      </div>
    </div>
  );
}
