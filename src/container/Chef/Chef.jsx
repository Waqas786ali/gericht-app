import React from 'react'
import './Chef.css'
import { images } from '../../constents'
import { SubHeading } from '../../components'

function Chef() {
  return (
    <div className='text-white app__bg app__wrapper section__padding'>
      <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.chef} alt='chef' />
      </div>

      <div className='app__wrapper_info'>
        <SubHeading title="Chef’s Word" />
        <h1 className='headtext__cormorant'>What we believe in</h1>

        <div className='app__Chef-content flex flex-col w-[100%] mt-20'>
          <div className='app__chef-content_quote flex justify-start items-end'>
            <img className='w-[47px] h-[40px] mr-4 mb-4' src={images.quote} alt='quote' />
            <p className='p__opensnas'>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
          </div>
          <p className='p__opensnas'>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
        </div>


        <div className='app__chef-sign w-[100%] mt-12'>
          <p className='text-[var(--color-golden)] p1 font-normal text-[32px] leading-[41px] capitalize'>Kevin Luo</p>
          <p className='p__opensans'>Chef & Founder</p>
          <img  className='w-[80%] sm:w-[250px] mt-12' src={images.sign} alt='sign'/>
        </div>
      </div>
    </div>
  )
}

export default Chef