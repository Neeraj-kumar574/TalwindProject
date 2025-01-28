// import React from 'react'
import { RiLightbulbFill } from "react-icons/ri";
import { GiTeamIdea } from "react-icons/gi";
import Image1 from '../src/assets/you (1).png'
function Youtube() {
  return (
    <div className=' grid grid-cols-2 max-lg:grid-cols-1  gap-10 m-auto w-full p-10 bg-blue-900'>
        <div className='text-justify w-full col-6'>
            <h2 className='max-sm:text-xl text-3xl font-bold text-slate-300 py-3'>0ur Video Introductions</h2>
            <p className='max-sm:text-base text-lg text-gray-400'>Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.</p>

            <div className=' w-3/4 '>
                <div className='flex col-6 justify-center items-center gap-3 py-3'>
                <div className='bg-orange-500 p-4 rounded-full'><RiLightbulbFill className='max-sm:text-lg text-xl text-slate-100' /></div>
                <div className="text-justify"> <h3 className='max-sm:text-lg text-xl text-slate-300 font-bold'>Explore ideas together</h3>
                <p className='max-sm:text-sm text-lg text-gray-400'>Engage audience segments and finally create actionable insights. Amplify vertical integration</p>
                </div>
               </div>
                <div className='flex  justify-center items-center gap-3 py-3'>
                <div className='bg-orange-500 p-4 rounded-full  '><GiTeamIdea className='max-sm:text-lg text-xl text-slate-100'/></div>
                <div> <h3 className='max-sm:text-lg text-xl text-slate-300 font-bold '>Bring those ideas to life</h3>
                      <p className='max-sm:text-sm text-lg text-gray-400 '>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                </div>
                   </div>
            </div>
        </div>
        <div className="col-6">
           <img className='w-full m-auto rounded-lg' src={Image1} alt="" />
        </div>
    </div>
  )
}

export default Youtube