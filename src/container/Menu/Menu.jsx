import React from 'react'
import './Menu.css'

import { images, data } from '../../constents'
import { SubHeading, MenuItem } from '../../components'
function Menu() {
  return (
    <div className='app__menu fex-col bg-[var(--color-black)] flex__center section__padding' id='menu'>
      <div className='app__menu-title mb-8 text-center'>
        <SubHeading title="Menu that fits you palatte" />
        <h1 className='headtext__cormorant'>Today’s Special</h1>
      </div>
      <div className='app__menu-menu w-[100%] my-8 flex justify-center items-start flex-row'>
        <div className='app__menu-menu_wine flex-1 flex-col w-[100%] flex_center'>
          <p className='app__menu-menu_heading text-[var(--color-white)] font-semibold text-[35px] sm:text-[45px] leading-[48.5px] sm:leading-[58.5px]'>Wine & Beer</p>
          <div className='app__menu-menu_items flex flex-col my-8 w-[100%]'>
            {data.wines.map((wine, index) => (
              <MenuItem key={wine.title + index } title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
          </div>
        </div>

        <div className='app__menu-menu_img w-[90%] sm:w-[410px] mx-8'>
          <img className='w-[100%] h-auto' src={images.menu} alt='menu img' />
        </div>

        <div className='app__menu-menu_cocktails flex-1 flex-col w-[100%] flex_center'>
          <p className='app__menu-menu_heading  text-[var(--color-white)] font-semibold text-[35px] sm:text-[45px] leading-[48.5px] sm:leading-[58.5px]'>Cocktails</p>
          <div className='app__menu-menu_items flex flex-col my-8 w-[100%]'>
            {data.cocktails.map((cocktail, index) => (
              <MenuItem key={cocktail.title + index } title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />

            ))}
          </div>
        </div>
      </div>
      <div className='mt-[15px]'>
        <button type='button' className='custom__button'><a href='#'>View More</a></button>
      </div>
    </div>
  )
}

export default Menu