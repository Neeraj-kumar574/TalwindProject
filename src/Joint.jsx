import React from 'react'
import Faq from './Faq'
import { IoArrowForward } from "react-icons/io5";
export const Joint = () => {
  return (
    <div className='w-full p-10 '>
        <p className='text-lg text-orange-500 py-3'>FAQ</p>
        <h2 className='text-2xl font-bold py-3'>Frequent Ask Questions </h2>
        <div className='p-10'>
        <Faq/>
        </div>
        <button className='flex justify-center items-center gap-3 bg-blue-950 p-4 text-gray-200 m-auto rounded-lg'>Show more<IoArrowForward /></button>
    </div>
  )
}
