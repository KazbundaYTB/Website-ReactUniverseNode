import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Minecraft from "../../img/Home/Minecraft.png";
import WebHosting from "../../img/Home/Website.png";
import Databaze from "../../img/Home/Databaze.png";

export default function ServicePreview() {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 1 second
    pauseOnHover: true,
  };

  const slides = [
    {
      title: "Minecraft Server Hosting",
      description: "Rozjeďte svůj vlastní Minecraftový server již od 60Kč / €2,43.",
      link: "/minecraft",
      linkText: "Více informací",
      image: Minecraft,
    },
    {
      title: "Web Hosting",
      description: "Rozjeďte svůj vlastní Webovou stránku již od 35Kč / €1,42.",
      link: "/web",
      linkText: "Více informací",
      image: WebHosting,
    },
    {
      title: "Databázový Hosting",
      description: "Rozjeďte svůj vlastní Minecraftový server již od 75Kč / €3,04.",
      link: "/databaze",
      linkText: "Více informací",
      image: Databaze,
    }
  ];

  return (
    <div className="h-[780px] bg-gray-200 flex justify-center items-center">
      <Slider {...settings} className="w-full h-full">
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-full flex justify-center items-center">
            <img src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />

            <div className=" w-full h-[780px] bg-black bg-opacity-50 p-4 text-white text-center relative flex flex-col justify-center items-center">
              <h1 className="text-7xl font-bold">{slide.title}</h1>
              <p className="text-xl mt-2">{slide.description}</p>
              {slide.link && (
                <a className="inline-block mt-8 text-xl bg-blue-600 py-2 px-4 rounded hover:bg-blue-500" href={slide.link}>
                  {slide.linkText}
                </a>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
