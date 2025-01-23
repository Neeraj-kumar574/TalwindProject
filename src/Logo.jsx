import React from 'react'
import Image1 from '../src/assets/Company logo.png'
import Image2 from '../src/assets/Vector.png'
import Image3 from '../src/assets/Company logo (1).png'
import Image4 from '../src/assets/Company logo (2).png'
import Image5 from '../src/assets/Company logo (4).png'
import Image6 from '../src/assets/Company logo (6).png'

function Logo() {
  return (
    <div className='flex gap-10 justify-center items-center py-10 m-auto'>
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