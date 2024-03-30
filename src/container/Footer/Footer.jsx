import React from 'react'
import './Footer.css'

import { FooterOverlay, Newsletter } from '../../components'
import { images } from '../../constents'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

function Footer() {
  return (
    <div className='app__footer w-[100%] relative z-[800] flex justify-start items-center bg-[var(--color-black)] pt-0 flex-col section__padding'>
      <FooterOverlay />
      <Newsletter />

      <div className='app__footer-links w-[100%] z-[100] flex flex-row justify-between items-start mt-20 px-8'>
        <div className='app__footer-links_contact flex-1 text-center m-4'>
          <h1 className='app__footer-headtext text-[var(--color-white)] font-normal capitalize text-[32px] leading-[41.6px] mb-4'>Contact Us</h1>
          <p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
          <p className='p__opensans'>+1 212-344-1230</p>
          <p className='p__opensans'>+1 212-555-1230</p>

        </div>
        <div className='app__footer-links_logo flex-1 flex flex-col items-center justify-center text-center m-4'>
          <img className='w-[210px] mb-3 text-center' src={images.gericht} alt='footer logo' />
          <p className='p__opensans px-2 sm:px-0'>"The best way to find yourself is to lose yourself in the service of others.”</p>
          <img src={images.spoon} alt='spoon' className='spoon__img mt-[15px]' />
          <div className='app__footer-links_icons flex mt-2 text-white'>
            <FiFacebook  className='m-2 cursor-pointer text-[24px] hover:text-[var(--color-golden)]'/>
            <FiTwitter className='m-2 cursor-pointer text-[24px] hover:text-[var(--color-golden)]' />
            <FiInstagram  className='m-2 cursor-pointer text-[24px] hover:text-[var(--color-golden)]'/>
          </div>
        </div>
        <div className='app___foote-links_work flex-1 text-center m-4'>
          <h1 className='app__footer-headtext text-[var(--color-white)] font-normal capitalize text-[32px] leading-[41.6px] mb-4'>Working Hours</h1>
          <p className='p__opensans'>Monday-Friday:</p>
          <p className='p__opensans mb-4'>08:00 am -12:00 am</p>
          <p className='p__opensans'>Saturday-Sunday:</p>
          <p className='p__opensans'>07:00am -11:00 pm</p>
        </div>
      </div>
      <div className='footer__copyright z-[100] mt-12'>
        <p className='p__opensans'>2021 Gerícht. All Rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer