
import Image1 from '../assets/Logo.png'
import { IoSearch } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Navbar = () => {
  return (

<>
<div>
  <div className='bg-blue-800 p-2 text-white flex justify-end items-center space-x-4'>
    <div className='flex items-center space-x-2'>
      <p className=''><a className='hover:underline flex gap-2 justify-center items-center' href="mailto:www.registerkaro.in"><MdOutlineEmail/>www.registerkaro.in</a></p>
      <p><a className='flex gap-2 justify-center items-center' href="tel:+918447746183"><FaPhoneAlt/>+918447746183</a></p>
      <div className='flex justify-center items-center gap-4'>
        <a href=""><FaInstagram/></a>
        <a href=""><FaFacebook/></a>
        <a href=""><FaTwitter/></a>
        <a href=""><FaPinterest/></a>
      </div>
    </div>

  </div>
  <div className="bg-white px-10 py-5 flex justify-between items-center shadow-md">
    <div className="flex items-center space-x-4">
        <img className='h-10 w-auto object-contain' src={Image1} alt="" />
    </div>
    <div className='hidden md:flex items-center space-x-6'>
      <ul className='flex space-x-6 text-gray-800 font-bold'>
        <li className='hover:text-gray-900'><a href="">Home</a></li>
        <li className='hover:text-gray-900'><a href="">Our Services</a></li>
        <li className='hover:text-gray-900'><a href="">Blog</a></li>
        <li className='hover:text-gray-900'><a href="">Contact Us</a></li>
        <li className='hover:text-gray-900'><a href="">About Us</a></li>
        <li className='hover:text-gray-900 flex justify-center items-center'><a className='text-2xl' href=""><IoSearch/></a></li>
        <li className='hover:text-gray-900'><a className='bg-orange-500 text-gray-100 p-4 rounded-lg' href="">Talk an Expert</a></li>
      </ul>
    </div>

<div className='md:hidden flex items-center'>
  <button>
    <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 448 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
    </svg>
  </button>
</div>
  

  </div>
</div>
</>

  )
}

export default Navbar