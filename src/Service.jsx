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
            <div className='grid grid-cols-1  py-10'>
                <p className='max-sm:text-xs text-sm text-orange-500 py-3'>WELCOME TO REGISTERKARO.IN</p>
                <h2 className='max-sm:text-2xl text-3xl  font-bold'>Explore Our Services</h2>
            </div>
            <div className='p-10 gap-10 grid grid-cols-3 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1'>
                <div className='shadow-lg outline outline-black/5 rounded-lg hover:animate-bounce   text-center border-3 border-indigo-200 border-r-indigo-500'>
                    <div className='text-center max-sm:p-3 p-7 border-3 border-indigo-200 border-r-indigo-500 '>
                        <img className='m-auto py-5' src={Image1} alt="" />
                        <h2 className='max-sm:text-lg text-xl font-bold py-2'>Company Formation</h2>
                        <p className='max-sm:text-base text-lg py-3 text-gray-500'>Build web-based solutions that
                            enhance customer experience.</p>
                        <button className='flex py-3 m-auto justify-center items-center gap-2'>Learn more<FaArrowCircleRight /></button>
                    </div>
                </div>
                <div className='shadow-lg outline outline-black/5 rounded-lg hover:animate-bounce  text-center border-3 border-indigo-200 border-r-indigo-500'>
                    <div className=' text-center max-sm:p-3 p-7 border-3 border-indigo-200 border-r-indigo-500 '>
                        <img className='m-auto py-5' src={Image2} alt="" />
                        <h2 className='max-sm:text-lg text-xl font-bold py-2'>Company Secretarial Services</h2>
                        <p className='max-sm:text-base text-lg py-3 text-gray-500'>Make data-driven decisions and
                            utilize technology to reach
                            business goals</p>
                        <button className='flex py-3 m-auto justify-center items-center gap-2'>Learn more<FaArrowCircleRight /></button>
                    </div>
                </div>
                <div className='shadow-lg outline outline-black/5 rounded-lg hover:animate-bounce   text-center border-3 border-indigo-200 border-r-indigo-500'>
                    <div className='text-center max-sm:p-3 p-7 border-3 border-indigo-200 border-r-indigo-500 '>
                        <img className='m-auto py-5' src={Image3} alt="" />
                        <h2 className='max-sm:text-lg text-xl font-bold py-2'>Virtual Office Address</h2>
                        <p className='max-sm:text-base text-lg py-3 text-gray-500'>Foster customer relationships by
                        effectively serving your market.</p>
                        <button className='flex py-3 m-auto justify-center items-center gap-2'>Learn more<FaArrowCircleRight /></button>
                    </div>
                </div>
                <div className='shadow-lg outline outline-black/5 rounded-lg hover:animate-bounce   text-center border-3 border-indigo-200 border-r-indigo-500'>
                    <div className='text-center max-sm:p-3 p-7 border-3 border-indigo-200 border-r-indigo-500 '>
                        <img className='m-auto py-5' src={Image4} alt="" />
                        <h2 className='max-sm:text-lg text-xl font-bold py-2'>Annual Compliance Services</h2>
                        <p className='max-sm:text-base text-lg py-3 text-gray-500'>Turn your ideas into modern
                        products with our design experts.</p>
                        <button className='flex py-3 m-auto justify-center items-center gap-2'>Learn more<FaArrowCircleRight /></button>
                    </div>
                </div>
                <div className='shadow-lg outline outline-black/5 rounded-lg hover:animate-bounce  text-center border-3 border-indigo-200 border-r-indigo-500'>
                    <div className='text-center max-sm:p-3 p-7 border-3 border-indigo-200 border-r-indigo-500 '>
                        <img className='m-auto py-5' src={Image5} alt="" />
                        <h2 className='max-sm:text-lg text-xl font-bold py-2'>Payroll Services</h2>
                        <p className='max-sm:text-base text-lg py-3 text-gray-500'>Expand your business across the
                        globe with minimal effort.</p>
                        <button className='flex py-3 m-auto justify-center items-center gap-2'>Learn more<FaArrowCircleRight /></button>
                    </div>
                </div>
                <div className='shadow-lg outline outline-black/5 rounded-lg hover:animate-bounce   text-center border-3 border-indigo-200 border-r-indigo-500'>
                    <div className='text-center max-sm:p-3 p-7 border-3 border-indigo-200 border-r-indigo-500 '>
                        <img className='m-auto py-5' src={Image6} alt="" />
                        <h2 className='max-sm:text-lg text-xl font-bold py-2'>Bookkeeping Services</h2>
                        <p className='max-sm:text-base text-lg py-3 text-gray-500'>Steering user behaviours with
creative design, data insights &
technology.</p>
                        <button className='flex py-3  m-auto justify-center items-center gap-2'>Learn more<FaArrowCircleRight /></button>
                    </div>
                </div>
            </div>
            <div className='px-10'>
                <button className='bg-blue-950 max-sm:text-sm px-6 flex justify-center items-center m-auto gap-3 py-3 rounded-lg text-slate-100 '>See All Services</button>
            </div>
        </>
    )
}

export default Service