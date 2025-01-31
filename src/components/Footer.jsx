import React from 'react'
import Me from "../assets/my-image.png"
import GDSC from "../assets/gdsc.png"
import College from "../assets/iiitkota.png"
import Network from "../assets/network.png"

const Footer = () => {
  return (
    <div className='w-screen h-[25rem] max-md:h-[30rem] bg-[#0C1137] '>

      <div className='w-full h-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] flex flex-col p-8'>
        <div className='w-full h-2/3 flex max-md:h-3/4 max-md:flex-col-reverse border-b-2 border-white'>
          <div className='w-2/3 h-full max-md:w-full flex flex-col max-md:text-center max-md:items-center justify-end gap-2'>
            <h1 className='w-full text-3xl text-blue-500'>Hiteshwar Kaushik</h1>
            <p className='w-full text-gray-300 text-md'>President - IIITians Network | Placement Trainee - IIIT Kota | Google DSC PR - Outreach Lead | B.Tech. CSE IIITK'26 | MERN Stack Dev | Web Team'23 - IIIT Kota</p>
            <div className='w-full h-auto flex justify-start max-md:justify-center gap-2 mb-4'>
              <img src={College} className='w-[60px] h-[60px]' alt="" />
              <img src={GDSC} className='w-[60px] h-[60px]' alt="" />
              <img src={Network} className='w-[60px] h-[60px]' alt="" />
            </div>
          </div>
          <div className='w-1/3 h-full max-md:w-full max-md:justify-center flex justify-end items-center'>
            <img src={Me} className='border border-white rounded-full w-[150px] h-[150px]' alt="" />
          </div>
        </div>
        <br className='text-white w-full' />
        <div className='w-full h-1/3 max-md:h-1/4 flex justify-center items-start text-gray-300 max-md:text-center'>
          Copyright © 2024. Made by Hiteshwar Kaushik.
        </div>
      </div>
      
    </div>
  )
}

export default Footer
