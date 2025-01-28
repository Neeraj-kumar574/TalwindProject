
import { FaCircleCheck } from "react-icons/fa6";

function Email() {
  return (
    <div className='flex flex-col w-full bg-gradient-to-r p-10 text-center text-violet-100 from-amber-800 to-indigo-800 m-auto'>
        <div className="w-full">
            <p className='text-sm py-2'>1% OF THE INDUSTRY</p>
            <h2 className='max-sm:text-lg text-2xl py-2 font-bold'>Welcome to your new digital reality. Now.</h2>
        
            <form action="" className="max-md:w-2/3 md:w-2/4 lg:w-1/3 m-auto py-5 max-sm:w-9/12 flex">
                <input className='max-md:p-2 p-3 rounded-l-lg w-full' type="email" placeholder='Enter Your Email '/>
                <button className='max-md:p-2 p-3 rounded-r-lg bg-yellow-500'>Submit</button>
            </form>
        </div>
        <div className='flex flex-wrap  py-3 gap-4 m-auto'>
            <div className='flex justify-center items-center gap-2'>
            <FaCircleCheck /><p>Instant results</p></div>
            <div className='flex justify-center items-center gap-2'>
            <FaCircleCheck /><p>User-friendly interface</p></div>
            <div className='flex justify-center items-center gap-2'>
            <FaCircleCheck /><p>Personalized customization</p></div>
        </div>
    </div>
  )
}

export default Email