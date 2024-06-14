import React from 'react';
import { FaMemory, FaHdd, FaWifi, FaNetworkWired } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa6";
import { MdBackup } from "react-icons/md";

import Icon from "../../img/Home/Panel.png";

export default function Packages() {
  return (
    <div className='w-screen flex flex-col justify-center items-center'>
      <div className='text-2xl text-white pt-3 font-bold'>Databázové balíčky</div>
      <div className='w-[160px] h-[1px] mt-2 bg-white'></div>

      <div className='flex flex-row'> {/* PACKAGES-1 START*/}
          
          <div className='flex mt-5 justify-center'>
              <div className='w-[300px] h-[500px] bg-gray-700 mr-3 rounded-xl flex flex-col justify-start items-center'>
                <div className='h-[64px] flex justify-center items-start mt-3'>
                  <img src={Icon} alt="" className=' rounded-xl w-[64px]'/>
                </div>
                <div className='text-2xl text-white pt-3 font-bold'>Basic</div>
                <div className='text-xl font-bold text-white '>75Kč/měsíc </div>
                <div className='mt-2 -translate-x-2'>
                  <h1 className='text-xl text-white pt-3 flex flex-row items-center'><FaMicrochip style={{ marginRight: '5px' }} /> 0,5x vCPU</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaMemory style={{ marginRight: '5px' }} /> 1GB Ram</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaHdd style={{ marginRight: '5px' }} /> 5GB Disk</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaWifi style={{ marginRight: '5px' }} /> 1x Hlavní port</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaNetworkWired  style={{ marginRight: '5px' }} /> 0x přídavný port</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><MdBackup  style={{ marginRight: '5px' }} /> 0x Záloha</h1>
                </div>
                <button className=' bg-red-400 px-5 py-2 rounded-xl mt-5'> <a href="/client">Zakoupit</a></button>
              </div>
              </div>
              <div className='flex mt-5 justify-center'>
              <div className='w-[300px] h-[500px] bg-gray-700 mr-3 rounded-xl flex flex-col justify-start items-center'>
                <div className='h-[64px] flex justify-center items-start mt-3'>
                  <img src={Icon} alt="" className='w-[64px] h-[64px]'/>
                </div>
                <div className='text-2xl text-white pt-3 font-bold'>Advanced</div>
                <div className='text-xl font-bold text-white '>95Kč/měsíc </div>
                <div className='mt-2 -translate-x-2'>
                  <h1 className='text-xl text-white pt-3 flex flex-row items-center'><FaMicrochip style={{ marginRight: '5px' }} /> 1x vCPU</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaMemory style={{ marginRight: '5px' }} /> 2GB Ram</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaHdd style={{ marginRight: '5px' }} /> 10GB Disk</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaWifi style={{ marginRight: '5px' }} /> 1x Hlavní port</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaNetworkWired  style={{ marginRight: '5px' }} /> 1x přídavný port</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><MdBackup  style={{ marginRight: '5px' }} /> 1x Záloha</h1>
                  </div>
                <button className=' bg-red-400 px-5 py-2 rounded-xl mt-5'> <a href="/client">Zakoupit</a></button>
              </div>
              </div>
              <div className='flex mt-5 justify-center'>
              <div className='w-[300px] h-[500px] bg-gray-700 mr-3 rounded-xl flex flex-col justify-start items-center'>
                <div className='h-[64px] flex justify-center items-start mt-3'>
                  <img src={Icon} alt="" className='w-[64px] h-[64px]'/>
                </div>
                <div className='text-2xl text-white pt-3 font-bold'>Profi</div>
                <div className='text-xl font-bold text-white '>125Kč/měsíc </div>
                <div className='mt-2 -translate-x-2'>
                  <h1 className='text-xl text-white pt-3 flex flex-row items-center'><FaMicrochip style={{ marginRight: '5px' }} /> 2x vCPU</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaMemory style={{ marginRight: '5px' }} /> 3GB Ram</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaHdd style={{ marginRight: '5px' }} /> 15GB Disk</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaWifi style={{ marginRight: '5px' }} /> 1x Hlavní port</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaNetworkWired  style={{ marginRight: '5px' }} /> 2x přídavný port</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><MdBackup  style={{ marginRight: '5px' }} /> 2x Záloha</h1>
                  </div>
                <button className=' bg-red-400 px-5 py-2 rounded-xl mt-5'> <a href="/client">Zakoupit</a></button>
              </div>
              </div>
              
            
  
          </div>{/* PACKAGES-1 END*/}     
        </div>
  );
}
