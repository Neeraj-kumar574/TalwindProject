
import Image1 from '../src/assets/Company logo.png'
import Image2 from '../src/assets/Company logo (1).png'
import Image3 from '../src/assets/Company logo (2).png'
import Image4 from '../src/assets/Company logo (3).png'
import Image5 from '../src/assets/Company logo (4).png'
import Image6 from '../src/assets/Company logo (5).png'

function Logo() {
  return (
   <div className="company-logo justify-center items-center flex flex-wrap p-10 m-auto gap-10 ">
              <img src={Image1} alt="" />
              <img src={Image2} alt="" />
              <img src={Image3} alt="" />
              <img src={Image4} alt="" />
              <img src={Image5} alt="" />
              <img src={Image6} alt="" />
          </div>
  )
}

export default Logo