
import { PiNoteFill } from "react-icons/pi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { PiCowboyHatFill } from "react-icons/pi";
import { AiFillMail } from "react-icons/ai";
function Options() {
  return (
    <div className='flex text-base font-bold gap-5 py-10 m-auto w-11/12'>
        <div className='flex justify-center items-center gap-2'>
        <div className='bg-red-500 p-3 rounded-full'><PiNoteFill  className='text-white text-3xl '/></div>
         <p>Fill up Application Form</p>
        </div>
        <div className='flex justify-center items-center gap-2'>
        <div className='bg-red-500 p-3 rounded-full'><RiSecurePaymentFill className='text-white text-3xl'/></div>
           <p>Make Online Payment</p>
        </div>
        <div className='flex justify-center items-center gap-2'>
        <div className='bg-red-500 p-3 rounded-full'><PiCowboyHatFill className='text-white text-3xl' /></div>
           <p>Executive will Process Application</p>
        </div>
        <div className='flex justify-center items-center gap-2'>
        <div className='bg-red-500 p-3 rounded-full'><AiFillMail className='text-white text-3xl' /></div>
            <p>Get Confirm Mail</p>
        </div>
    </div>
  )
}

export default Options