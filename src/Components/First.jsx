
import Image1 from '../assets/Group 1261153026.png'
import Image2 from '../assets/Group 1261152993.png'
import { FaPlayCircle } from "react-icons/fa";
import '../Components/First.css'

const First = () => {
  return (
    <div className='parent-div  text-justify px-10 py-10  gap-4 flex  w-12/12 m-auto'>
        <div className='parent-child mt-10 w-6/12'>
<img src={Image1} alt="" />
      <h2 className='text-4xl font-bold mt-4'>Your trusted partner<br />for compliance business needs</h2>
      <p className='mt-4 text-lg'>An online business compliance platform that helps entrepreneurs and other individuals with various, registrations, tax filings, and other legal matters.</p>
      <img className='mt-3 w-3/4' src={Image2} alt="" />
      <div className='mt-5 flex '>
        <button className='bg-blue-600 py-3 px-5 font-bold text-slate-200' >Talk An Expert</button>
      <button className='flex justify-center font-bold items-center gap-1 bg-slate-100 py-3 px-5'><FaPlayCircle className='text-red-500' />See how it work</button>
      </div>
        </div>
        <div className='parent-child2  w-6/12'>

        </div>
    </div>
  )
}

export default First