
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Image from '../src/assets/comma.png'
import Image1 from './assets/star.png'
import Image3 from './assets/row.png'


const Swipe = () => {

  const options = {
    items: 1,
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    animateOut: 'slideOutUp',
    nav: true,
    dots: true,
    margin: 5,
    responsive: {
      1100: {
        items: 3,
      },
      724: {
        items: 2,
      },
      500: {
        items: 1,
      },
      370: {
        items: 1,
        innerWidth: "100%",
        outerWidth: "100%"
      },
    },
  }

  return (
    <div className='backk bg-blue-950 py-5'>
      
      <h2 className='text-2xl text-justify text-gray-200 font-bold px-5 py-5'>What peoples says about us </h2>
      <OwlCarousel className='owl-theme ' {...options}>
        <div className='item  p-5'>
          <div className='p-5 bg-gray-100 text-justify  rounded-lg'>
            <div className='flex justify-between items-center '>
              <div><img className='' src={Image} alt="" /></div>
            <div>  <img src={Image1} alt="" /></div>
            </div>
            <p className='py-2 text-sm text-gray-800'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident </p>
             <img className='py-2' src={Image3} alt="" />
          </div>
        </div>
        <div className='item  p-5'>
        <div className='p-5 bg-gray-100 text-justify  rounded-lg'>
            <div className='flex justify-between items-center '>
              <div><img className='' src={Image} alt="" /></div>
            <div>  <img src={Image1} alt="" /></div>
            </div>
            <p className='py-2 text-sm text-gray-800'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident </p>
             <img className='py-2' src={Image3} alt="" />
          </div>
        </div>
        <div className='item  p-5'>
        <div className='p-5 bg-gray-100 text-justify  rounded-lg'>
            <div className='flex justify-between items-center '>
              <div><img className='' src={Image} alt="" /></div>
            <div>  <img src={Image1} alt="" /></div>
            </div>
            <p className='py-2 text-sm text-gray-800'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident </p>
             <img className='py-2' src={Image3} alt="" />
          </div>
        </div>
        <div className='item  p-5'>
        <div className='p-5 bg-gray-100 text-justify  rounded-lg'>
            <div className='flex justify-between items-center '>
              <div><img className='' src={Image} alt="" /></div>
            <div>  <img src={Image1} alt="" /></div>
            </div>
            <p className='py-2 text-sm text-gray-800'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident </p>
             <img className='py-2' src={Image3} alt="" />
          </div>
        </div>
        <div className='item  p-5'>
        <div className='p-5 bg-gray-100 text-justify  rounded-lg'>
            <div className='flex justify-between items-center '>
              <div><img className='' src={Image} alt="" /></div>
            <div>  <img src={Image1} alt="" /></div>
            </div>
            <p className='py-2 text-sm text-gray-800'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident </p>
             <img className='py-2' src={Image3} alt="" />
          </div>
        </div>
        <div className='item  p-5'>
        <div className='p-5 bg-gray-100 text-justify  rounded-lg'>
            <div className='flex justify-between items-center '>
              <div><img className='' src={Image} alt="" /></div>
            <div>  <img src={Image1} alt="" /></div>
            </div>
            <p className='py-2 text-sm text-gray-800'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident </p>
             <img className='py-2' src={Image3} alt="" />
          </div>
        </div>
      </OwlCarousel>
    </div>)
}

export default Swipe