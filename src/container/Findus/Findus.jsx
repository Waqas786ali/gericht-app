import React from 'react'
import './Findus'
import { images } from '../../constents'
import { SubHeading } from '../../components'

function Findus() {
  return (
    <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title="Contact" />
      <h1 className='headtext__cormorant mb-12'>Find Us</h1>
      <div className='app__wrapper_content'>
        <p className='p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <p className='p__cormorant text-[#DCCA87] my-8'>Opening Hours</p>
        <p className='p__opensans'>Mon - Fri: 10:00 am - 02:00 am</p>
        <p className='p__opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button type='button' className='custom__button mt-8'><a href='#'>Visit Us</a></button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt='findus img' />
    </div>
    </div>
  )
}

export default Findus