import React from 'react';


import Servery from "../../img/Home/Servery.png";
import Ceny from "../../img/Home/Cena.png";
import Panel from "../../img/Home/Panel.png";



export default function Questions() {
  return (
    <div className='w-screen flex flex-col justify-center items-center'> {/* Start*/}
      <div className='text-2xl text-white pt-3 font-bold'>Proč vybrat zrovna naše služby?</div>
      <div className=' w-[260px] h-[1px] mt-2 bg-white'></div>

      <div className=' flex mt-5 justify-center'>{/* S1 START*/}

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
      </div> {/* S1 END*/}

      <div className=' flex mt-5 justify-center'>{/* S2 START*/}

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
</div> {/* S2 END*/}


      

    </div>  /* END*/
  );
}
