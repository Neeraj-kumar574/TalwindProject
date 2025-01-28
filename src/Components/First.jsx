
import Image3 from '../assets/poster.png'

import { FaPlayCircle } from "react-icons/fa";
import '../Components/First.css'


const First = () => {
  return (<>

<div className='relative '>
<div className='absolute bottom-2 px-10 left-4 max-sm:left-1 max-sm:bottom-2 md:bottom-12 md:left-6 flex space-x-2 md:space-x-4 animate-bounce'>
        <button className='bg-blue-300 text-white py-1 px-1.5 md:py-2 md:px-4 rounded-md shadow-md hover:bg-blue-400 transition ease-in-out duration-300 text-xs md:text-base min-w-[70px] md:min-w-[100px]' >Talk An Expert</button>
      <button className='bg-orange-300 gap-1 text-black flex items-center justify-center space-x-0.5 md:space-x-2 py-1 px-1.5 md:py-2 md:px-4 rounded-lg shadow-md hover:bg-orange-400 transition ease-in-out duration-300 text-xs md:text-base min-w-[90px] md:min-w-[120px]'  ><FaPlayCircle />See how it work</button>
 </div>
 <img src={Image3} alt="" />
</div>
</>
  )
}

export default First