
import Image1 from '../assets/Group (1).png'
import Image2 from '../assets/Group (2).png'
import Image3 from '../assets/Group (3).png'
import Image4 from '../assets/Group (4).png'
import Image5 from '../assets/Group (5).png'
const Second = () => {
  return (
    <div className='flex flex-col gap-8 justify-center items-center  py-10'>
        <div className="heading">
              <h4 className='text-2xl max-sm:text-sm font-bold'>Trusted By Over 100+ Startups and freelance business.</h4>
        </div>
        <div className="company-logo flex justify-center items-center flex-wrap m-auto p-10 gap-10 ">
            <img src={Image1} alt="" />
            <img src={Image2} alt="" />
            <img src={Image2} alt="" />
            <img src={Image3} alt="" />
            <img src={Image4} alt="" />
            <img src={Image5} alt="" />
        </div>
    </div>
  )
}

export default Second