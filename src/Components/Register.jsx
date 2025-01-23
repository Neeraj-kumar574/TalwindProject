
import Image1 from '../assets/Symbol.png'
import Image2 from '../assets/Symbol (1).png'
import Image3 from '../assets/Symbol (2).png'
import Image4 from '../assets/Symbol (3).png'
import "../Components/Register.css"
function Register() {
  return (
    <div className='parent-div1  text-justify p-10 flex grid grid-cols-2 gap-4 m-auto'>
        <div className='parent-child-1 relative columns-1 mt-7'>
             <div className='w-10/12'>
                <p className='text-lg text-orange-500 py-3'>WHY REGISTERKARO.IN</p>
                <h3 className='text-2xl font-bold py-3'>Why Choose Register Karo</h3>
                <p className='text-lg py-3'>It is with consistent services and results that build trust with the people and that in
                turn help us to serve the business better.</p>
             </div>
            
             <div className=' bg-blue-300/25 rounded-2xl p-5 w-1/2 absolute right-0 mt-9 text-center'>
             
             <img className='m-auto py-2' src={Image4} alt="" />
            
           <h3 className='text-lg font-bold py-2'>Guaranteed Satisfaction</h3>
           <p className='text-base text-gray-500 py-2'>We ensure that you stay 100%
           satisfied with our offered services</p>
        </div> 
             
        </div>
        <div className='parent-child-2 grid grid-cols-2 pt-8 gap-4 '>
        <div className=' bg-orange-300/25 rounded-2xl  p-5   text-center'>
             
             <img className='m-auto py-2' src={Image1} alt="" />
            
           <h3 className='text-lg font-bold py-2'>Confidential & Safe</h3>
           <p className='text-base text-gray-500 py-2'>All your private information is safe</p>
        </div>
        <div className=' bg-green-300/25 rounded-2xl p-5   text-center'>
             
             <img className='m-auto py-2' src={Image3} alt="" />
            
           <h3 className='text-lg font-bold py-2'>No Hidden Fee</h3>
           <p className='text-base text-gray-500 py-2'>Everything is put before you with
           no hidden charges or conditions</p>
        </div> 
        <div className=' bg-pink-300/25 rounded-2xl p-5   text-center'>
             
             <img className='m-auto py-2' src={Image2} alt="" />
            
           <h3 className='text-lg font-bold py-2'>Expert CA/CS Assistance</h3>
           <p className='text-base text-gray-500 py-2'>Prompt support from our in-house
           expert professionals</p>
        </div>
        <div className=' bg-green-100/25 rounded-2xl p-5   text-center'>
             
             <img className='m-auto py-2' src={Image1} alt="" />
            
           <h3 className='text-lg font-bold py-2'>Confidential & Safe</h3>
           <p className='text-base text-gray-500 py-2'>All your private information is safe
           with us</p>
        </div> 
        
        </div>
    </div>
  )
}

export default Register