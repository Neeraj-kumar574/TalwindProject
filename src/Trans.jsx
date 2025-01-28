// import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Image1 from './assets/Image.png'
import Image2 from './assets/Image (1).png'
import Image3 from './assets/Image (2).png'
import Image4 from './assets/Image (3).png'
import Image5 from './assets/Image (4).png'
import Image6 from './assets/Image (5).png'

const Trans = () => {
  return (
    <>
    <div className='grid grid-cols-1  py-5'>
            <p className='max-sm:text-xs text-sm text-orange-500 py-3'>EXPLORE OUR BLOGS</p>
            <h2 className='max-sm:text-xl max-md:text-2xl text-3xl font-bold'>Accelerate Digital Transformation</h2>
        </div>
    <div className='p-10 gap-10 w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1'>
        
        <div className='w-full col-4 text-justify'>
            <img className='' src={Image1} alt="" />
            <p className='text-sm text-gray-500 py-2'>Prabhash Mishra • 1 Jan 2023 • Today</p>
            <h2 className='max-sm:text-base text-lg font-bold py-2'>Small business & Startup </h2>
            <p className='text-sm text-gray-500 py-2'>Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</p>
            <button className='p-1 rounded-2xl bg-sky-400/25 text-xs me-4'>Tax & Audit</button>
            <button className='p-1 rounded-2xl bg-orange-400/25 text-xs '>Management</button> 
        </div>
       <div className=' col-4 gap-4 text-justify'>
            <div className=' w-full'><img className='' src={Image2} alt="" />
            <p className='text-sm text-gray-500 py-2'>Mahesh Kumar • 1 Jan 2023</p>
            <h2 className='max-sm:text-base text-lg font-bold py-2'>Scale-Up Company Offer</h2>
            <p className='text-sm text-gray-500 py-2'>Mental models are simple expressions of complex processes or relationships.</p>
            <button className='p-1 rounded-2xl bg-sky-400/25 text-xs me-4'>Tax</button>
            <button className='p-1 rounded-2xl bg-orange-400/25 text-xs me-4'>Research</button> 
            <button className='p-1 rounded-2xl bg-red-400/25 text-xs '>Complience</button> 
       </div> </div>
       <div className=' col-4 gap-4 text-justify'>
            <div className=' w-full'><img className='' src={Image3} alt="" />
            <p className='text-sm text-gray-500 py-2'>Rakhi Verma • 1 Jan 2023</p>
            <h2 className='max-sm:text-base text-lg font-bold py-2'>Growing Business Package</h2>
            <p className='text-sm text-gray-500 py-2'>Introduction to Wireframing and its Principles. Learn from the best in the industry.</p>
            <button className='p-1 rounded-2xl bg-sky-400/25 text-xs me-4'>Audit</button>
            <button className='p-1 rounded-2xl bg-orange-400/25 text-xs'>Money Back</button> 
       </div> </div>
       <div className=' col-4 gap-4 text-justify'>
            <div className=' w-full'><img className='' src={Image4} alt="" />
            <p className='text-sm text-gray-500 py-2'>Karan Kumar • 1 Jan 2023</p>
            <h2 className='max-sm:text-base text-lg font-bold py-2'>Scale-Up Company Offer</h2>
            <p className='text-sm text-gray-500 py-2'>Collaboration can make our teams stronger, and our individual designs better.</p>
            <button className='p-1 rounded-2xl bg-sky-400/25 text-xs me-4'>Money</button>
            <button className='p-1 rounded-2xl bg-orange-400/25 text-xs'>Management</button> 
       </div> </div>
       <div className=' col-4 gap-4 text-justify'>
            <div className=' w-full'><img className='' src={Image5} alt="" />
            <p className='text-sm text-gray-500 py-2'>Richa Singh • 1 Jan 2023</p>
            <h2 className='max-sm:text-base text-lg font-bold py-2'>Scale-Up Company Offer </h2>
            <p className='text-sm text-gray-500 py-2'>JavaScript frameworks make development easy with extensive features and functionalities.</p>
            <button className='p-1 rounded-2xl bg-sky-400/25 text-xs me-4'>Tax Return</button>
            <button className='p-1 rounded-2xl bg-orange-400/25 text-xs me-4'>News</button>
            <button className='p-1 rounded-2xl bg-red-400/25 text-xs '>Audit</button>  
       </div> </div>
       <div className=' col-4 gap-4 text-justify'>
            <div className=' w-full'><img className='' src={Image6} alt="" />
            <p className='text-sm text-gray-500 py-2'>Miss Nora• 1 Jan 2023</p>
            <h2 className='max-sm:text-base text-lg font-bold py-2'>Scale-Up Company Offer</h2>
            <p className='text-sm text-gray-500 py-2'>Starting a community doesn’t need to be complicated, but how do you get started?</p>
            <button className='p-1 rounded-2xl bg-sky-400/25 text-xs me-4'>Private Limited Company</button>
            <button className='p-1 rounded-2xl bg-orange-400/25 text-xs'>Customer Success</button> 
       </div> </div>
        
    </div>
    <div className=' py-5'>
            <button className='bg-blue-950 max-sm:text-base px-6 flex justify-center items-center m-auto gap-3 py-2 rounded-xl text-slate-100 '>Show more blogs<FaArrowRight /></button>
         </div>
    </>
  )
}

export default Trans