import React from 'react';
import { FaMemory, FaHdd, FaWifi, FaNetworkWired } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa6";
import { MdBackup } from "react-icons/md";

import Coal from "../../img/Minecraft/Package-Icons/coal.png";
import Iron from "../../img/Minecraft/Package-Icons/iron.png";
import Gold from "../../img/Minecraft/Package-Icons/gold.png";
import Diamond from "../../img/Minecraft/Package-Icons/diamond.png";
import Emerald from "../../img/Minecraft/Package-Icons/emerald.png";
import Redstone from "../../img/Minecraft/Package-Icons/redstone.png";
import Netherite from "../../img/Minecraft/Package-Icons/netherite.png";
import Beacon from "../../img/Minecraft/Package-Icons/beacon.png";
export default function Packages() {
  return (
    <div className='w-screen flex flex-col justify-center items-center'>
      <div className='text-2xl text-white pt-3 font-bold'>Minecraft balíčky</div>
      <div className='w-[160px] h-[1px] mt-2 bg-white'></div>

      <div className='flex flex-row'> {/* PACKAGES-1 START*/}
          
          <div className='flex mt-5 justify-center'>
              <div className='w-[300px] h-[500px] bg-gray-700 mr-3 rounded-xl flex flex-col justify-start items-center'>
                <div className='h-[64px] flex justify-center items-start mt-3'>
                  <img src={Coal} alt="" className='w-[64px] h-[64px]'/>
                </div>
                <div className='text-2xl text-white pt-3 font-bold'>COAL</div>
                <div className='text-xl font-bold text-white '>60Kč/měsíc </div>
                <div className='mt-2 -translate-x-2'>
                  <h1 className='text-xl text-white pt-3 flex flex-row items-center'><FaMicrochip style={{ marginRight: '5px' }} /> 1x vCPU</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaMemory style={{ marginRight: '5px' }} /> 1GB Ram</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaHdd style={{ marginRight: '5px' }} /> 10GB Disk</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaWifi style={{ marginRight: '5px' }} /> 1x Hlavní port</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaNetworkWired  style={{ marginRight: '5px' }} /> 0x přídavný port</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><MdBackup  style={{ marginRight: '5px' }} /> 1x Záloha</h1>
                </div>
                <button className=' bg-red-400 px-5 py-2 rounded-xl mt-5'> <a href="/client">Zakoupit</a></button>
              </div>
              </div>
              <div className='flex mt-5 justify-center'>
              <div className='w-[300px] h-[500px] bg-gray-700 mr-3 rounded-xl flex flex-col justify-start items-center'>
                <div className='h-[64px] flex justify-center items-start mt-3'>
                  <img src={Iron} alt="" className='w-[64px] h-[64px]'/>
                </div>
                <div className='text-2xl text-white pt-3 font-bold'>Iron</div>
                <div className='text-xl font-bold text-white '>75Kč/měsíc </div>
                <div className='mt-2 -translate-x-2'>
                  <h1 className='text-xl text-white pt-3 flex flex-row items-center'><FaMicrochip style={{ marginRight: '5px' }} /> 1x vCPU</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaMemory style={{ marginRight: '5px' }} /> 2GB Ram</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaHdd style={{ marginRight: '5px' }} /> 15GB Disk</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaWifi style={{ marginRight: '5px' }} /> 1x Hlavní port</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaNetworkWired  style={{ marginRight: '5px' }} /> 1x přídavný port</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><MdBackup  style={{ marginRight: '5px' }} /> 2x Záloha</h1>
                  </div>
                <button className=' bg-red-400 px-5 py-2 rounded-xl mt-5'> <a href="/client">Zakoupit</a></button>
              </div>
              </div>
              <div className='flex mt-5 justify-center'>
              <div className='w-[300px] h-[500px] bg-gray-700 mr-3 rounded-xl flex flex-col justify-start items-center'>
                <div className='h-[64px] flex justify-center items-start mt-3'>
                  <img src={Gold} alt="" className='w-[64px] h-[64px]'/>
                </div>
                <div className='text-2xl text-white pt-3 font-bold'>Gold</div>
                <div className='text-xl font-bold text-white '>110Kč/měsíc </div>
                <div className='mt-2 -translate-x-2'>
                  <h1 className='text-xl text-white pt-3 flex flex-row items-center'><FaMicrochip style={{ marginRight: '5px' }} /> 3x vCPU</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaMemory style={{ marginRight: '5px' }} /> 3,5GB Ram</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaHdd style={{ marginRight: '5px' }} /> 35GB Disk</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaWifi style={{ marginRight: '5px' }} /> 1x Hlavní port</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaNetworkWired  style={{ marginRight: '5px' }} /> 2x přídavný port</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><MdBackup  style={{ marginRight: '5px' }} /> 3x Záloha</h1>
                  </div>
                <button className=' bg-red-400 px-5 py-2 rounded-xl mt-5'> <a href="/client">Zakoupit</a></button>
              </div>
              </div>
              
              <div className='flex mt-5 justify-center'>
              <div className='w-[300px] h-[500px] bg-gray-700 mr-3 rounded-xl flex flex-col justify-start items-center'>
                <div className='h-[64px] flex justify-center items-start mt-3'>
                  <img src={Diamond} alt="" className='w-[64px] h-[64px]'/>
                </div>
                <div className='text-2xl text-white pt-3 font-bold'>Diamond</div>
                <div className='text-xl font-bold text-white '>135Kč/měsíc </div>
                <div className='mt-2 -translate-x-2'>
                  <h1 className='text-xl text-white pt-3 flex flex-row items-center'><FaMicrochip style={{ marginRight: '5px' }} /> 4x vCPU</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaMemory style={{ marginRight: '5px' }} /> 4,5GB Ram</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaHdd style={{ marginRight: '5px' }} /> 40GB Disk</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaWifi style={{ marginRight: '5px' }} /> 1x Hlavní port</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaNetworkWired  style={{ marginRight: '5px' }} /> 3x přídavný port</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><MdBackup  style={{ marginRight: '5px' }} /> 3x Záloha</h1>
                  </div>
                <button className=' bg-red-400 px-5 py-2 rounded-xl mt-5'> <a href="/client">Zakoupit</a></button>
              </div>
              </div>
  
          </div>{/* PACKAGES-1 END*/}
          <div className='flex flex-row'> {/* PACKAGES-2 START*/}
          
          <div className='flex mt-5 justify-center'>
              <div className='w-[300px] h-[500px] bg-gray-700 mr-3 rounded-xl flex flex-col justify-start items-center'>
                <div className='h-[64px] flex justify-center items-start mt-3'>
                  <img src={Emerald} alt="" className='w-[64px] h-[64px]'/>
                </div>
                <div className='text-2xl text-white pt-3 font-bold'>Emerald</div>
                <div className='text-xl font-bold text-white '>150Kč/měsíc </div>
                <div className='mt-2 -translate-x-2'>
                  <h1 className='text-xl text-white pt-3 flex flex-row items-center'><FaMicrochip style={{ marginRight: '5px' }} /> 4x vCPU</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaMemory style={{ marginRight: '5px' }} /> 6GB Ram</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaHdd style={{ marginRight: '5px' }} /> 55GB Disk</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaWifi style={{ marginRight: '5px' }} /> 1x Hlavní port</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaNetworkWired  style={{ marginRight: '5px' }} /> 4x přídavný port</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><MdBackup  style={{ marginRight: '5px' }} /> 4x Záloha</h1>
                  </div>
                <button className=' bg-red-400 px-5 py-2 rounded-xl mt-5'> <a href="/client">Zakoupit</a></button>
              </div>
              </div>
              <div className='flex mt-5 justify-center'>
              <div className='w-[300px] h-[500px] bg-gray-700 mr-3 rounded-xl flex flex-col justify-start items-center'>
                <div className='h-[64px] flex justify-center items-start mt-3'>
                  <img src={Redstone} alt="" className='w-[64px] h-[64px]'/>
                </div>
                <div className='text-2xl text-white pt-3 font-bold'>Redstone</div>
                <div className='text-xl font-bold text-white '>250Kč/měsíc </div>
                <div className='mt-2 -translate-x-2'>
                  <h1 className='text-xl text-white pt-3 flex flex-row items-center'><FaMicrochip style={{ marginRight: '5px' }} /> 6x vCPU</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaMemory style={{ marginRight: '5px' }} /> 6,5GB Ram</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaHdd style={{ marginRight: '5px' }} /> 85GB Disk</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaWifi style={{ marginRight: '5px' }} /> 1x Hlavní port</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaNetworkWired  style={{ marginRight: '5px' }} /> 4x přídavný port</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><MdBackup  style={{ marginRight: '5px' }} /> 5x Záloha</h1>
                  </div>
                <button className=' bg-red-400 px-5 py-2 rounded-xl mt-5'> <a href="/client">Zakoupit</a></button>
              </div>
              </div>
              <div className='flex mt-5 justify-center'>
              <div className='w-[300px] h-[500px] bg-gray-700 mr-3 rounded-xl flex flex-col justify-start items-center'>
                <div className='h-[64px] flex justify-center items-start mt-3'>
                  <img src={Netherite} alt="" className='w-[64px] h-[64px]'/>
                </div>
                <div className='text-2xl text-white pt-3 font-bold'>Netherite</div>
                <div className='text-xl font-bold text-white '>300Kč/měsíc </div>
                <div className='mt-2 -translate-x-2'>
                  <h1 className='text-xl text-white pt-3 flex flex-row items-center'><FaMicrochip style={{ marginRight: '5px' }} /> 7x vCPU</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaMemory style={{ marginRight: '5px' }} /> 7GB Ram</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaHdd style={{ marginRight: '5px' }} /> 100GB Disk</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaWifi style={{ marginRight: '5px' }} /> 1x Hlavní port</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaNetworkWired  style={{ marginRight: '5px' }} /> 4x přídavný port</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><MdBackup  style={{ marginRight: '5px' }} /> 5x Záloha</h1>
                  </div>
                <button className=' bg-red-400 px-5 py-2 rounded-xl mt-5'> <a href="/client">Zakoupit</a></button>
              </div>
              </div>
              
              <div className='flex mt-5 justify-center'>
              <div className='w-[300px] h-[500px] bg-gray-700 mr-3 rounded-xl flex flex-col justify-start items-center'>
                <div className='h-[64px] flex justify-center items-start mt-3'>
                  <img src={Beacon} alt="" className='w-[64px] h-[64px]'/>
                </div>
                <div className='text-2xl text-white pt-3 font-bold'>Beacon</div>
                <div className='text-xl font-bold text-white '>350Kč/měsíc </div>
                <div className='mt-2 -translate-x-2'>
                  <h1 className='text-xl text-white pt-3 flex flex-row items-center'><FaMicrochip style={{ marginRight: '5px' }} /> 8x vCPU</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaMemory style={{ marginRight: '5px' }} /> 8GB Ram</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaHdd style={{ marginRight: '5px' }} /> 130GB Disk</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaWifi style={{ marginRight: '5px' }} /> 1x Hlavní port</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><FaNetworkWired  style={{ marginRight: '5px' }} /> 5x přídavný port</h1>
                  <h1 className='text-xl text-white pt-3 flex items-center'><MdBackup  style={{ marginRight: '5px' }} /> 6x Záloha</h1>
                  </div>
                <button className=' bg-red-400 px-5 py-2 rounded-xl mt-5'> <a href="/client">Zakoupit</a></button>
              </div>
              </div>
  
          </div>{/* PACKAGES-2 END*/}

          


        </div>
  );
}
