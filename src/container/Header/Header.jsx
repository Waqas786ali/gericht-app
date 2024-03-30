import React from 'react'
import './Header.css'
import images from '../../constents/images'
import { SubHeading } from '../../components'

function Header() {
  return (
    <div className='app__header bg-[var(--color-black)] app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <SubHeading title="Chase the new Flavour"/>
        <h1 className='text-[var(--color-golden)] uppercase leading-[70px] md:leading-[117px] text-[60px] md:text-[90px] app__header-h1'>The Key To Fine Dining </h1>
        <p className=' p__opensans my-8'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
        <button href='#' type='button' className='bg-[var(--color-golden)] custom__button'><a href='#'>Explore Menu</a></button>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.welcome} alt='header img' className='w-[80%]' />
      </div>
    </div>
  )
}

export default Header