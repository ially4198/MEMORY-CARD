import React from 'react'
import download from '../IMAGES/download.jpeg'

const GameHeader = ({point, setPoint, time}) => {
  return (
    <div className='flex justify-around p-3 items-center gap-5 sm:gap-20 text-amber-200 '>
        <div className=' bg-amber-900 w-[40px] sm:w-[60px] h-[40px] sm:h-[60px] rounded-[50%] flex justify-center items-center'>
          <img src={download} alt="AVATAR" className='w-[40px] sm:w-[60px]  h-[40px] sm:h-[60px] rounded-[50%]' />
        </div>
        <div className='w-[60px] sm:w-[80px]  h-[40px] sm:h-[60px]  bg-amber-700 rounded-xs  text-sm sm:text-lg ' >
               <p className='text-center flex flex-col'><span className=''>POINTS</span> <span>{point}</span></p>
        </div>
         <div className='w-[60px] sm:w-[80px]  h-[40px] sm:h-[60px]  bg-amber-700 rounded-xs  text-sm sm:text-lg ' >
            <p className='text-center flex flex-col '><span className=''>TIME</span>  <span>{time}</span></p>
         </div>
    </div>
  )
}

export default GameHeader