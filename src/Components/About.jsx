
import { FaArrowRightLong } from "react-icons/fa6";
import Image from '../assets/Group 1261153016.png'

const About = () => {
    return (

        <div className="parent-div2 grid grid-cols-2 max-lg:grid-cols-1 w-full m-auto gap-10 p-10 ">
            <div className="parent-child col-6 gap-16 text-justify">
                <p className='pb-2 max-sm:text-xs text-sm font-bold'>WELCOME TO REGISTERKARO.IN</p>
                <h2 className='max-sm:text-2xl max-md:text-3xl  py-3 text-4xl font-bold'>About <span className='text-amber-500'>Register Karo</span></h2>
                <p className='max-sm:text-base flex gap-10  py-5'>We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years and I’m extremely pleased with
                    their performance, ability to execute, and willingness to adapt in our ever changing environment. Perry is an outstanding leader who is fanatical about
                    customer satisfaction. He has built a solid team which has consistently delivered on projects thereby exceeding everyone’s expectations.
                    </p>
                    <p className='max-sm:text-base '>I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.</p>
                    <button className='flex justify-center text-gray-200 py-3 px-4 rounded-lg mt-4 items-center gap-1 bg-blue-600'>Learn More<FaArrowRightLong className=' mt-1'/></button>
            </div>
            <div className="parent-child2  col-6">
                <img className=' w-full m-auto px-10' src={Image} alt="" />
            </div>
        </div>

    )
}

export default About