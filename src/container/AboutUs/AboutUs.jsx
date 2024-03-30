import React from 'react'
import './AboutUs.css'
import { images } from '../../constents'

function AboutUs() {
  return (
    <div className='app__aboutus relative app__bg flex__center section__padding' id='about'>
      <div className='app__aboutus-overlay absolute inset-0 flex__center'>
        <img className='w-[80%] h-[320px] sm:w-[391px] sm:h-[415px] z-0' src={images.G} alt='G Letter' />
      </div>
      <div className='app__aboutus-content w-[100%] z-[2] flex-row flex__center'>
        <div className='app__about-content_about flex-1 flex justify-end items-end flex-col text-right'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt='about__spoon' />
          <p className='p__opensans my-8 text-[var(--color-gray)]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <button type='button' className='bg-[var(--color-golden)] custom__button'><a href='#'>Know More</a></button>
        </div>

        <div className='app__aboutus-content_knife my-16 mx-0 lg:my-8 lg:mx-16 flex__center'>
          <img className='h-[610px] sm:h-[910]' src={images.knife} alt='knife'/>
        </div>

        <div className='app__about-content_history flex-1 flex justify-start items-start flex-col text-left'>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt='about__spoon' />
          <p className='p__opensans my-8 text-[var(--color-gray)]'>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
          <button type='button' className='bg-[var(--color-golden)] custom__button'><a href='#'>Know More</a></button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs