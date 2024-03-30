import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import images from "../../constents/images"
import './Navbar.css'

function Navbar() {
const [toggleMenu,setToggleMenu] = useState(false)

  return (
    <div className='app__navbar w-[100%] flex justify-between items-center bg-[var(--color-black)] p-4 sm:px-8 sm:py-4'>
      <div className='app__navbar-logo flex justify-start items-center'>
        <img className='w-[110px] sm:w-[150px]' src={images.gericht} alt='app Logo' />
      </div>
      <ul className='app__navbar-links hidden lg:flex flex-1 justify-center items-center'>
        <li className='mx-4 hover:text-[var(--color-gray)] p__opensans'><a href='#home'>Home</a></li>
        <li className='mx-4 hover:text-[var(--color-gray)] p__opensans'><a href='#about'>About</a></li>
        <li className='mx-4 hover:text-[var(--color-gray)] p__opensans'><a href='#menu'>Menu</a></li>
        <li className='mx-4 hover:text-[var(--color-gray)] p__opensans'><a href='#awards'>Awards</a></li>
        <li className='mx-4 hover:text-[var(--color-gray)] p__opensans'><a href='#contact'>Contact</a></li>
      </ul>
      <div className='app__navbar-login hidden sm:flex justify-end items-center'>
        <a className="hover:border-b border-[var(--color-golden)] mx-4  p__opensans" href='#login'>Log In / Register</a>
        <div className='w-[1px] h-[30px] bg-[var(--color-gray)]' />
        <a className="hover:border-b border-[var(--color-golden)] mx-4  p__opensans" href='/'>Book Table</a>
      </div>
      <div className='app__navbar-smallscreen flex lg:hidden'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu &&(
        <div className='app__navbar-smallscreen_overlay z-[5] fixed top-0 left-0 w-[100%] h-[100vh] bg-[var(--color-black)] flex-col flex__center slide-bottom'>
          <MdOutlineRestaurantMenu fontSize={27} className='text-[27px] text-[var(--color-golden)] cursor-pointer absolute top-[20px] right-[20px] overlay__close' onClick={() => setToggleMenu(false)} />
          <ul className='app__navbar-smallscreen-links flex flex-col flex-1 justify-center items-center'>
            <li className='m-4 hover:text-white text-[var(--color-golden)] text-[2rem] p__opensans'><a href='#home'>Home</a></li>
            <li className='m-4 hover:text-white text-[var(--color-golden)] text-[2rem] p__opensans'><a href='#about'>About</a></li>
            <li className='m-4 hover:text-white text-[var(--color-golden)] text-[2rem] p__opensans'><a href='#mune'>Mune</a></li>
            <li className='m-4 hover:text-white text-[var(--color-golden)] text-[2rem] p__opensans'><a href='#awarda'>Awarda</a></li>
            <li className='m-4 hover:text-white text-[var(--color-golden)] text-[2rem] p__opensans'><a href='#contact'>Contact</a></li>
          </ul>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar