import React from 'react'
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Img from '../src/assets/pp.png'


const  Phone=()=> {
    return (
        <div className='flex w-12/12 p-10 pb-0 text-justify bg-blue-600'>
            <div className='w-6/12'>
                <h2 className='text-3xl w-5/6 font-bold text-slate-300'>Manage Your Services by your
                    Mobile Phone</h2>
                <p className='w-5/6 text-gray-800 py-10'>Download our app to manage and track your services. Our app enables you to stay in touch with our experts and aids you in tracking your progress. </p>
             
             <div>
                <p className='text-lg font-bold py-3 text-slate-100'>Get the App</p>
                <div className='flex gap-3'>
                    <button  className='flex justify-center items-center gap-2 bg-slate-100 py-2 px-5'>
                    <div><FaApple className='text-4xl text-lime-500'/></div>
                    <div className='text-justify'><p className='text-sm'>Get it on</p>
                    <h4 className='text-lg font-bold'>App Store</h4></div>
                        </button>
                    <button className='flex justify-center items-center gap-2 bg-slate-100 py-2 px-5'>
                         <div> <IoLogoGooglePlaystore className='text-4xl text-lime-500'/> </div>
                         <div className='text-justify'><p className='text-sm'>Get it on</p>
                         <h4 className='text-lg font-bold'>Play Store</h4></div>
                        </button>
                </div>
             </div>

            </div>
            <div className='back'>
               <img className='w-9/12 m-auto' src={Img} alt="" />

            </div>

        </div>
    )
}

export default Phone