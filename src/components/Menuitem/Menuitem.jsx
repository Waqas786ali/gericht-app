import React from 'react'
import './Menuitem.css'

function Menuitem({title,price,tags}) {
  return (
    <div className='app__menuitems w-[100%] my-4 flex flex-col'>
      <div className='app__menuitem-head flex justify-between items-center'>
        <div className='app__menuitems-name flex-1'>
          <p className='p__cormorant text-[#DCCA87]'>{title}</p>
        </div>

        <div className='app_menuitem_dash w-[90px] h-[1px] mx-4 bg-[var(--color-golden)]' />

        <div className='app__menuitems-price flex justify-end items-end'>
          <p className='p__cormorant'>{price}</p>
        </div>
      </div>

      <div className='app__menuitem-sub w-[100%] mt-[0.2rem]'>
        <p className='p__opensans text-[#AAA]'>{tags}</p>
      </div>
    </div>
  )
}

export default Menuitem