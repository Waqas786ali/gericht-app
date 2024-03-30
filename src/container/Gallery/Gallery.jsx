import React from 'react'
import './Gallery.css'
import { images } from '../../constents'
import { SubHeading } from '../../components'
import {BsInstagram,BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs"

const galleryImages = [images.gallery01 , images.gallery02 , images.gallery03 , images.gallery04]

function Gallery() {
  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
    const {current} = scrollRef;

    if(direction === "left"){
      current.scrollLeft -= 300;
    }else{
      current.scrollLeft += 300;
    }

  }

  return (
    <div className='app__gallery flex flex-row bg-[var(--color-black)] py-16 pl-24 flex__center'>
      <div className='app__gallery-content flex flex-1 justify-center items-start flex-col min-w-[500px] pr-8'>
        <SubHeading title="Instagram" />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensnas text-[#AAA] mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type='button' className='custom__button mt-4'><a href='#'>View More</a></button>
      </div>

      <div className='app__gallery-images flex-1 flex fex-row max-w-[50%] relative'>
        <div className='app__gallery-images_container flex flex-row w-max overflow-x-scroll' ref={scrollRef}>
        {galleryImages.map((image,index)=>(
          <div className='app__gallery-images_card relative min-w-[301px] h-[447px] mr-8 flex__center' key={`gallery_image-${index + 1}`}>
            <img className='w-[100%] h-[100%] object-cover opacity-100' src={image} alt='gallery image' />
            <BsInstagram className='gallery__image-icon cursor-pointer absolute text-[#fff] text-[2rem] opacity-50' />
          </div>
        ))}

        </div>
        <div className='app__gallery-images_arrow w-[100%] flex justify-between items-center px-4 absolute bottom-[5%]'>
          <BsArrowLeftShort className='gallery__arrow-icon text-[2rem] text-[var(--color-golden)] cursor-pointer bg-[var(--color-black)] rounded-[5px] hover:text-[var(--color-white)]' onClick={() => scroll("left")} />
          <BsArrowRightShort className='gallery__arrow-icon text-[2rem] text-[var(--color-golden)] cursor-pointer bg-[var(--color-black)] rounded-[5px] hover:text-[var(--color-white)]' onClick={() => scroll("right")} />
        </div>
      </div>
    </div>
  )
}

export default Gallery