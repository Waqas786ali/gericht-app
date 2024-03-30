import React,{useState} from 'react'
import "./Intro.css"
import {BsFillPlayFill, BsPauseFill} from "react-icons/bs"
import { meal } from '../../constents'
function Intro() {
  const [playVideo, setPlayVideo] = useState(false)
  const vidRef = React.useRef()
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)

    if(playVideo){
      vidRef.current.pause();
    }else{
      vidRef.current.play();
    }
  }

  return (
    <div className='app__video h-[100vh] relative'>
      <video className='w-[100%] h-[100%] object-cover' src={meal} ref={vidRef} type="video/mp4" loop controls={false} muted />
      <div className='app__video-overlay inset-0 absolute bg-[rgba(0,0,0,0.65)] flex__center'>
        <div 
        className='app__video-overlay_circal w-[100px] h-[100px] rounded-full border border-[var(--color-golden)] cursor-pointer  justify-center flex items-center text flex__Center'
        onClick={handleVideo}
        >
          {playVideo ? <BsPauseFill color='#fff'  fontSize={30} /> : <BsFillPlayFill color='#fff'  fontSize={30} />}
        </div>
      </div>
    </div>
  )
}

export default Intro