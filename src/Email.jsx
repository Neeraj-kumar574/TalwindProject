
import { FaCircleCheck } from "react-icons/fa6";

function Email() {
  return (
    <div className='flex flex-col bg-gradient-to-r py-10 text-center text-violet-100 from-amber-800 to-indigo-800 m-auto'>
        <div>
            <p className='text-sm py-2'>1% OF THE INDUSTRY</p>
            <h2 className='text-2xl py-2 font-bold'>Welcome to your new digital reality. Now.</h2>
        </div>
        <div className='py-3'>
            <form action="">
                <input className='p-3 rounded-l-lg w-3/12' type="email" placeholder='Enter Your Email '/>
                <button className='p-3 rounded-r-lg bg-yellow-500'>Submit</button>
            </form>
        </div>
        <div className='flex py-3 gap-4 m-auto'>
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