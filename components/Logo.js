import React from 'react'

function Logo({spin, size, opacity}) {
  return (
    <div style={{transform:`scale(${size})`,opacity:opacity}} className="flex items-end font-bold text-brand">
        <span className='text-2xl'>S</span>
        <span className='flex flex-col items-center w-1'>
          <span className='relative flex justify-evenly items-center'>
            <span className={`${spin?'rotate':''} h-2 w-2 bg-brand`}></span>
          </span>
          <span className={`text-lg`}>I</span>
        </span>
        <span className='text-lg'>M</span>
        <span className='text-lg'>E</span>
    </div>
  )
}

export default Logo