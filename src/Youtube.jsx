// import React from 'react'
import { RiLightbulbFill } from "react-icons/ri";
import { GiTeamIdea } from "react-icons/gi";
import Image1 from '../src/assets/you (1).png'
function Youtube() {
  return (
    <div className='flex  w-12/12 p-10 bg-blue-900'>
        <div className='text-justify w-6/12'>
            <h2 className='text-3xl font-bold text-slate-300 py-3'>0ur Video Introductions</h2>
            <p className='text-lg text-gray-400'>Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.</p>

            <div className='w-5/6 '>
                <div className='flex justify-center items-center gap-3 py-3'>
                <div className='bg-orange-500 p-4 rounded-full'><RiLightbulbFill className='text-xl text-slate-100' /></div>
                <div> <h3 className='text-xl text-slate-300 font-bold'>Explore ideas together</h3>
                <p className='text-lg text-gray-400'>Engage audience segments and finally create actionable insights. Amplify vertical integration</p>
                </div>
               </div>
                <div className='flex justify-center items-center gap-3 py-3'>
                <div className='bg-orange-500 p-4 rounded-full  '><GiTeamIdea className='text-xl text-slate-100'/></div>
                <div> <h3 className='text-xl text-slate-300 font-bold '>Bring those ideas to life</h3>
                      <p className='text-lg text-gray-400 '>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                </div>
                   </div>
            </div>
        </div>
        <div>
           <img className='w-11/12 m-auto rounded-lg' src={Image1} alt="" />
        </div>
    </div>
  )
}

export default Youtube