import React from 'react'
import "./Laurels.css"
import { images, data } from '../../constents'
import { SubHeading } from '../../components'

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className='app__laurels_awards-cards flex-1 flex justify-start items-start min-w-[100%] sm:min-w-[230px] m-4'>
    <img className='w-[50px] h-[50px]' src={imgUrl} alt='awards' />
    <div className='app__laurels_awards-cards_content flex flex-col ml-4'>
      <p className='p__cormorant text-[#DCCA87]'>{title}</p>
      <p className='p__cormorant'>{subtitle}</p>
    </div>
  </div>
)

function Laurels() {
  return (
    <div className='app__bg app__wrapper section__padding' id='awards'>
      <div className='app__wrapper_info'>
        <SubHeading title="Awards & recognition" />
        <h1 className='headtext__cormorant'>Our Laurels</h1>

        <div className='app__laurels_awards flex-wrap flex justify-start items-center mt-12'>
          {data.awards.map((award) => <AwardCard award={award} key={award.title} />
          )}
        </div>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.laurels} alt='laurels' />
      </div>
    </div>
  )
}

export default Laurels