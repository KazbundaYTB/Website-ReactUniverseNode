import React from 'react';
import Servery from "../../img/Home/Servery.png";
import Ceny from "../../img/Home/Cena.png";
import Panel from "../../img/Home/Panel.png";
import Podpora from "../../img/Home/Podpora.png";
import Dostupnost from "../../img/Home/Dostupnost.png";
import Nastaveni from "../../img/Home/Nastaveni.png";


export default function Benefits() {
  return (
    <div className='w-screen flex flex-col justify-center items-center'>
      <div className='text-2xl text-white pt-3 font-bold'>Proč vybrat zrovna naše služby?</div>
      <div className=' w-[260px] h-[1px] mt-2 bg-white'></div>




      <div className=' flex mt-5 justify-center'>

        <div className='w-[350px] h-[100px] bg-gray-700 mr-3 rounded-xl flex'>
          <div className=' flex justify-center items-center '>
          <img src={Servery} alt="" className=' w-[64px] h-[64px] ml-3 mr-3'/>
          <h1 className=' text-xl font-bold text-white'>VÝKONNÉ SERVERY</h1>
          </div>
        </div>
        
        <div className='w-[350px] h-[100px] bg-gray-700 mr-3 rounded-xl flex flex-row'>
          <div className=' flex justify-center items-center'>
          <img src={Ceny} alt="" className=' w-[64px] h-[64px] ml-3 mr-3'/>
          <h1 className=' text-xl font-bold text-white'>NÍZKÉ CENY</h1>
          </div>

        </div>
        
        <div className='w-[350px] h-[100px] bg-gray-700 mr-3 rounded-xl flex flex-row'>
          <div className=' flex justify-center items-center'>
          <img src={Panel} alt="" className=' w-[64px] h-[64px] ml-3 mr-3'/>
          <h1 className=' text-xl font-bold text-white'>PŘEHLEDNÝ PANEL</h1>
          </div>

        </div>
      </div>







      <div className=' flex mt-3 justify-center'>

      <div className='w-[350px] h-[100px] bg-gray-700 mr-3 rounded-xl flex flex-row'>
        <div className=' flex justify-center items-center'>
          <img src={Podpora} alt="" className=' w-[64px] h-[64px] ml-3 mr-3'/>
          <h1 className=' text-xl font-bold text-white'>KVALITNÍ PODPORA</h1>
          </div>

        </div>
        <div className='w-[350px] h-[100px] bg-gray-700 mr-3 rounded-xl flex flex-row'>
          <div className=' flex justify-center items-center'>
          <img src={Dostupnost} alt="" className=' w-[64px] h-[64px] ml-3 mr-3'/>
          <h1 className=' text-xl font-bold text-white'>VYSOKÁ DOSTUPNOST</h1>
          </div>

        </div>
        
        <div className='w-[350px] h-[100px] bg-gray-700 mr-3 rounded-xl flex flex-row'>
        <div className=' flex justify-center items-center'>
          <img src={Nastaveni} alt="" className=' w-[64px] h-[64px] ml-3 mr-3'/>
          <h1 className=' text-xl font-bold text-white'>OKAMŽITÉ NASTAVENÍ</h1>
          </div>

        </div>
        
      </div>
    </div>
  );
}
