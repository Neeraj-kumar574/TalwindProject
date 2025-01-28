import React from 'react'
import Accordion from './Accordion'

const Faq = () => {
  return (
    <>
    <div className='p-4 bg-gray-300 max-sm:text-xs rounded-lg max-sm:my-1 my-5 font-bold'>
        <Accordion className="my-5"
        title="Can I recover deleted files from desktop with this software?"
        answer="Please specify the software, and I can confirm if it supports file recovery."/>
  
    </div>
    <div className='p-4 bg-gray-300 max-sm:text-xs rounded-lg my-5 font-bold'>
        <Accordion className="my-5"
        title="Can I recover deleted files from desktop with this software?"
        answer="Please specify the software, and I can confirm if it supports file recovery."/>
  
    </div>
    <div className='p-4 bg-gray-300 max-sm:text-xs rounded-lg my-5 font-bold'>
        <Accordion className="my-5"
        title="Can I recover deleted files from desktop with this software?"
        answer="Please specify the software, and I can confirm if it supports file recovery."/>
  
    </div>
    <div className='p-4 bg-gray-300 max-sm:text-xs rounded-lg my-5 font-bold'>
        <Accordion className="my-5"
        title="Can I recover deleted files from desktop with this software?"
        answer="Please specify the software, and I can confirm if it supports file recovery."/>
  
    </div>
    <div className='p-4 bg-gray-300 max-sm:text-xs rounded-lg my-5 font-bold'>
        <Accordion className="my-5 font-bold"
        title="Can I recover deleted files from desktop with this software?"
        answer="Please specify the software, and I can confirm if it supports file recovery."/>
  
    </div>
    </>
  )
}

export default Faq