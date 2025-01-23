// import React from 'react'
import Image1 from './assets/vector (1).png'
import Image2 from './assets/vector (2).png'
import Image3 from './assets/vector (3).png'
import Image4 from './assets/vector (4).png'
import Image5 from './assets/vector (5).png'
import Image6 from './assets/vector (6).png'
import { FaArrowCircleRight } from "react-icons/fa";

const Service = () => {
  return (
        <>
    <div className='grid grid-cols-1 py-10'>
            <p className='text-sm text-orange-500 py-3'>WELCOME TO REGISTERKARO.IN</p>
            <h2 className='text-3xl font-bold'>Explore Our Services</h2>
        </div>
    <div className='p-10  grid  grid-cols-3'>
            <div className='col-4   text-center border-3 border-indigo-200 border-r-indigo-500'>
                <div className='text-center p-7 border-3 border-indigo-200 border-r-indigo-500 '>
                    <img className='m-auto py-5' src={Image1} alt="" />
                    <h2 className='text-xl font-bold py-2'>Company Formation</h2>
                    <p className='text-lg py-3 text-gray-500'>Build web-based solutions that
                    enhance customer experience.</p>
                    <button className='flex py-3 m-auto justify-center items-center gap-2'>Learn more<FaArrowCircleRight /></button>
                </div>
            </div>
            <div className='col-4  text-center border-3 border-indigo-200 border-r-indigo-500'>
                <div className='text-center p-7 border-3 border-indigo-200 border-r-indigo-500 '>
                    <img className='m-auto py-5' src={Image2} alt="" />
                    <h2 className='text-xl font-bold py-2'>Company Formation</h2>
                    <p className='text-lg py-3 text-gray-500'>Build web-based solutions that
                    enhance customer experience.</p>
                    <button className='flex py-3 m-auto justify-center items-center gap-2'>Learn more<FaArrowCircleRight /></button>
                </div>
            </div>
            <div className='col-4   text-center border-3 border-indigo-200 border-r-indigo-500'>
                <div className='text-center p-7 border-3 border-indigo-200 border-r-indigo-500 '>
                    <img className='m-auto py-5' src={Image3} alt="" />
                    <h2 className='text-xl font-bold py-2'>Company Formation</h2>
                    <p className='text-lg py-3 text-gray-500'>Build web-based solutions that
                    enhance customer experience.</p>
                    <button className='flex py-3 m-auto justify-center items-center gap-2'>Learn more<FaArrowCircleRight /></button>
                </div>
            </div>
            <div className='col-4   text-center border-3 border-indigo-200 border-r-indigo-500'>
                <div className='text-center p-7 border-3 border-indigo-200 border-r-indigo-500 '>
                    <img className='m-auto py-5' src={Image4} alt="" />
                    <h2 className='text-xl font-bold py-2'>Company Formation</h2>
                    <p className='text-lg py-3 text-gray-500'>Build web-based solutions that
                    enhance customer experience.</p>
                    <button className='flex py-3 m-auto justify-center items-center gap-2'>Learn more<FaArrowCircleRight /></button>
                </div>
            </div>
            <div className='col-4   text-center border-3 border-indigo-200 border-r-indigo-500'>
                <div className='text-center p-7 border-3 border-indigo-200 border-r-indigo-500 '>
                    <img className='m-auto py-5' src={Image5} alt="" />
                    <h2 className='text-xl font-bold py-2'>Company Formation</h2>
                    <p className='text-lg py-3 text-gray-500'>Build web-based solutions that
                    enhance customer experience.</p>
                    <button className='flex py-3 m-auto justify-center items-center gap-2'>Learn more<FaArrowCircleRight /></button>
                </div>
            </div>
            <div className='col-4   text-center border-3 border-indigo-200 border-r-indigo-500'>
                <div className='text-center p-7 border-3 border-indigo-200 border-r-indigo-500 '>
                    <img className='m-auto py-5' src={Image6} alt="" />
                    <h2 className='text-xl font-bold py-2'>Company Formation</h2>
                    <p className='text-lg py-3 text-gray-500'>Build web-based solutions that
                    enhance customer experience.</p>
                    <button className='flex py-3 m-auto justify-center items-center gap-2'>Learn more<FaArrowCircleRight /></button>
                </div>
            </div>
    </div>
    <div className='px-10'>
                <button className='bg-blue-950 px-6 flex justify-center items-center m-auto gap-3 py-3 rounded-lg text-slate-100 '>See All Services</button>
             </div>
    </>
  )
}

export default Service