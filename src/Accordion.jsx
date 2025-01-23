import React from 'react'
import { useState } from 'react';
// import {motion,AnimatePresense} from "framer-motion"
import { MdArrowForwardIos ,MdKeyboardArrowDown} from "react-icons/md";


const Accordion = ({title, answer}) => {
  
    const [aacordionOpen,setAcordionOpen] =useState(false);
   
  return (
    <div className="py-2">
             <button onClick={()=> setAcordionOpen(!aacordionOpen)} className='flex justify-between w-full'>
              <span>{title}</span>
              {aacordionOpen ? <span><MdKeyboardArrowDown/></span> : <span><MdArrowForwardIos/></span>}

             </button>
             <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
              aacordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
             }`}>
              <div className='overflow-hidden text-justify'>{answer}</div>

             </div>
</div>
  )
}

export default Accordion