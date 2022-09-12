import React from 'react'
import Logo from './Logo'
import UploadButton from './buttons/UploadButton'

function ChooseImage() {

  return (
    <div className='component w-full md:w-84 rounded-xl font-body'>
      <div className='flex w-full h-full flex-col justify-between items-center'>
        <div className='flex w-full h-full flex-col justify-center items-center gap-4 px-4 pt-6 pb-4'>
          <Logo spin={true} size={1.3} opacity={0.7} />
          <UploadButton action='add-new-image' />
        </div>
        <div className='flex w-full h-8 justify-center items-center bg-transp  dark:bg-dark-800 border-opacity-5 p-6 rounded-b-xl gap-1'>
          <span> Paste image URL <code className='py-1 px-2 rounded-md bg-light-800 dark:bg-dark-400 text-light-300'>Ctrl + v</code></span>
        </div>
      </div>
    </div>
  )
}

export default ChooseImage