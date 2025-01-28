
import { FaArrowRight } from "react-icons/fa";
import Image1 from '../src/assets/Pagination.png'
function Introduction() {
    return (
        <div>
            <div className='text-center w-8/12 m-auto py-8 gap-10'>
                <h2 className='max-sm:text-lg text-2xl font-bold py-2'>Our Happy Clients</h2>
                <p className='max-sm:text-base text-slate-400'>Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
            </div>
            <div className='text-center'>
                 <img src={Image1} alt="" />
                 <button className='flex max-sm:text-sm text-xl text-fuchsia-950 m-auto justify-center items-center gap-2'>Show more <FaArrowRight className='mt-1'/></button>
                
            </div>
        </div>
    )
}

export default Introduction