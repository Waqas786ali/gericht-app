import React from 'react' 
import './FooterOverlay.css'

function FooterOverlay() {
  return (
    <div className='app__footerOverlay w-[100%] h-[100%] z-[100] flex flex-col absolute'>
      <div className='app__footerOverlay-black h-[25%] bg-[var(--color-black)]'></div>
      <div className='app__footerOverlay-img h-[75%] app__bg'></div>

    </div>
  )
}

export default FooterOverlay