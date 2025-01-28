
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className='w-full bg-blue-950 p-10'>
        <div className='w-full grid grid-cols-5 md:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-1 lg:grid-cols-5 text-justify gap-5'>
            <div className='col-3'><p className=' text-gray-400'>Design outstanding interfaces with advanced Figma features in a matter of minutes.</p>
            <div className='flex gap-5 py-5'><a href=""><FaFacebook className='text-2xl text-slate-100'/></a>
            <a href=""><FaGoogle className='text-2xl text-slate-100'/></a>
            <a href=""><FaApple className='text-2xl text-slate-100'/></a>
            <a href=""><FaInstagram className='text-2xl text-slate-100'/></a>
            </div>
            </div>
           
            <div className='col-2'>
           <h3 className='text-base font-bold text-orange-500'>START A BUSINESS</h3>
            <ul className='py-5'>
                <li className='py-1 text-gray-400'><a href="">Features</a></li>
                <li className='py-1 text-gray-400'><a href="">Solutions</a></li>
                <li className='py-1 text-gray-400'><a href="">Integrations</a></li>
                <li className='py-1 text-gray-400'><a href="">Enterprise</a></li>
                <li className='py-1 text-gray-400'><a href="">Solutions</a></li>
            </ul>
            </div>
            <div className='col-3'>
            <h3 className='text-base font-bold text-orange-500'>GOVERNMENT REGISTRATION</h3>
            <ul className='py-5'>
                <li className='py-1 text-gray-400'><a href="">Partners</a></li>
                <li className='py-1 text-gray-400'><a href="">Community</a></li>
                <li className='py-1 text-gray-400'><a href="">Developers</a></li>
                <li className='py-1 text-gray-400'><a href="">App</a></li>
                <li className='py-1 text-gray-400'><a href="">Blog</a></li>
            </ul>
            </div>
            <div className='col-2'>
                <h3 className='text-base font-bold text-orange-500'>COMPLIANCE & TAX</h3>
                <ul className='py-5'>
                <li className='py-1 text-gray-400'><a href="">Channels</a></li>
                <li className='py-1 text-gray-400'><a href="">Scale</a></li>
                <li className='py-1 text-gray-400'><a href="">Watch the Demo</a></li>
                <li className='py-1 text-gray-400'><a href="">Our Competition</a></li>
            </ul>
            </div>
            <div className='col-2'>
                <h3 className='text-base font-bold text-orange-500'>BIS & CDSCO</h3>
                <ul className='py-5'>
                <li className='py-1 text-gray-400'><a href="">About Us</a></li>
                <li className='py-1 text-gray-400'><a href="">News</a></li>
                <li className='py-1 text-gray-400'><a href="">Leadership</a></li>
                <li className='py-1 text-gray-400'><a href="">Media Kit</a></li>
            </ul>
            </div>
            
        </div>
        <div>
            <div className='py-5'><div className='bg-orange-500 w-[70px] px-3 pointer py-4 rounded-full m-auto'><a href="/"><FaArrowUp className='text-4xl m-auto text-slate-100'/></a></div>
            </div>
             <footer className='text-slate-100 text-sm py-5'>&copy; 2024 Registerkaro. All Rights Reserved.</footer>
        </div>
    </div>
  )
}

export default Contact