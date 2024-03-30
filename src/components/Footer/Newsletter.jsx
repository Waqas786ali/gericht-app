import React from 'react'
import './Newsletter.css'
import SubHeading from '../SubHeading/SubHeading'

function Newsletter() {
  return (
    <div className='app__newsletter py-8 px-16 border border-[var(--color-golden)] bg-[var(--color-black)] z-[200]'>
      <div className='app__newsletter-heading flex flex-col justify-center items-center text-center'>
        <SubHeading title="Newsletter" />
        <h1 className='headtext__cormorant'>Subscribe to Our Newsletter</h1>
        <p className='p__opensans'>And never miss latest Updates!</p>      
      </div>
      <div className='app__newsletter-input flex-row px-4 sm:px-0 mt-12 flex__center'>
        <input className='text-white  mr-8 py-3 px-4 bg-[var(--color-black)] w-[620px] border border-[var(--color-golden)] rounded-[5px] text-[1rem]' type='email' placeholder='Enter Your Email' />
        <button type='button' className=' w-max custom__button'>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter