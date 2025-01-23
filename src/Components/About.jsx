
import { FaArrowRightLong } from "react-icons/fa6";
import Image from '../assets/Group 1261153016.png'

const About = () => {
    return (

        <div className="parent-div2   flex w-11/12 m-auto  py-16 ">
            <div className="parent-child w-6/12 gap-16 text-justify">
                <p className='pb-3 text-sm font-bold'>WELCOME TO REGISTERKARO.IN</p>
                <h2 className='py-3 text-4xl font-bold'>About <span className='text-amber-500'>Register Karo</span></h2>
                <p className='flex gap-10  py-5'>We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years and I’m extremely pleased with
                    their performance, ability to execute, and willingness to adapt in our ever changing environment. Perry is an outstanding leader who is fanatical about
                    customer satisfaction. He has built a solid team which has consistently delivered on projects thereby exceeding everyone’s expectations.
                    </p>
                    <p className=' py-4'>I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.</p>
                    <button className='flex justify-center py-3 px-4 rounded-lg mt-4 items-center gap-1 bg-blue-600'>Learn More<FaArrowRightLong className=' mt-1'/></button>
            </div>
            <div className="parent-child2  w-6/12">
                <img className='w-11/12 h-full m-auto px-10' src={Image} alt="" />
            </div>
        </div>

    )
}

export default About