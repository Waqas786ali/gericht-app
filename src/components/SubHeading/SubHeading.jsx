import React from 'react'
import {images} from '../../constents'

function SubHeading({title}) {
  return (
    <div className='text-1 m-4'>
    <p className='p__cormorant'>{title}</p>
    <img src={images.spoon} alt='spoon' className='spoon__img' />
    </div>
  )
}

export default SubHeading