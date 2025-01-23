import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from '../src/assets/comma.png'
import Image2 from './assets/star.png'
import Image3 from './assets/row.png'

const Swipe = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    // <div className='flex w-full gap-5 p-5'>
    //     <Slider {...settings}>
    //     <div className='w-4/12 h-fit p-6 bg-red-500 text-justify rounded-lg'>
    //     <div className='flex relative py-3'> 
    //         <div><img src={Image} alt="" /></div>
    //     <div className='absolute right-0'> <img src={Image2} alt="" /></div>
    //     </div>
    //     <p className='py-3 text-gray-500'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident </p>
    //      <img className='py-3' src={Image3} alt="" />
    //     </div>
    //     <div className='w-4/12 h-fit p-6 bg-red-500 text-justify rounded-lg'>
    //     <div className='flex relative py-3'> 
    //         <div><img src={Image} alt="" /></div>
    //     <div className='absolute right-0'> <img src={Image2} alt="" /></div>
    //     </div>
    //     <p className='py-3 text-gray-500'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident </p>
    //      <img className='py-3' src={Image3} alt="" />
    //     </div>
    //     <div className='w-4/12 h-fit p-6 bg-red-500 text-justify rounded-lg'>
    //     <div className='flex relative py-3'> 
    //         <div><img src={Image} alt="" /></div>
    //     <div className='absolute right-0'> <img src={Image2} alt="" /></div>
    //     </div>
    //     <p className='py-3 text-gray-500'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident </p>
    //      <img className='py-3' src={Image3} alt="" />
    //     </div>
    //     </Slider>
    // </div>
    <div className="slider-container ">
    <Slider {...settings}>
      <div className='h-[100px]'>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
      <div>
        <h3>7</h3>
      </div>
      <div>
        <h3>8</h3>
      </div>
    </Slider>
  </div>
  )
}

export default Swipe