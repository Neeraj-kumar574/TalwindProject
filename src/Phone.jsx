import React from 'react'
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Img from '../src/assets/pp.png'


const  Phone=()=> {
    return (
        <div className= 'grid grid-cols-2 max-lg:grid-cols-1  gap-10 m-auto   p-10  pb-0 text-justify bg-blue-900'>
            <div className='col-6 '>
                <h2 className='max-md:text-2xl max-sm:text-xl max text-3xl w-5/6 font-bold text-slate-300'>Manage Your Services by your
                    Mobile Phone</h2>
                <p className='w-5/6 text-gray-300 py-5'>Download our app to manage and track your services. Our app enables you to stay in touch with our experts and aids you in tracking your progress. </p>
             
             <div>
                <p className='max-sm:text-base text-lg font-bold py-3 text-slate-100'>Get the App</p>
                <div className='flex flex-wrap gap-3'>
                    <button  className='flex justify-center items-center gap-2 bg-slate-100 py-2 px-5'>
                    <div><FaApple className='text-4xl text-lime-500'/></div>
                    <div className='text-justify'><p className='max-sm:text-xs text-sm'>Get it on</p>
                    <h4 className='max-sm:text-sm text-lg font-bold'>App Store</h4></div>
                        </button>
                    <button className='flex justify-center items-center gap-2 bg-slate-100 py-2 px-5'>
                         <div> <IoLogoGooglePlaystore className='text-4xl text-lime-500'/> </div>
                         <div className='text-justify'><p className='max-sm:text-xs text-sm'>Get it on</p>
                         <h4 className='max-sm:text-sm text-lg font-bold'>Play Store</h4></div>
                        </button>
                </div>
             </div>

            </div>
            <div className='back col-6  '>
               <img className='max-sm:w-11/12 w-10/12 m-auto pb-0' src={Img} alt="" />

            </div>

        </div>
    )
}

export default Phone