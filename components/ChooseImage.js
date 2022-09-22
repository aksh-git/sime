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
        <div className='flex w-full h-8 justify-center items-center bg-transp dark:bg-dark-800 border-opacity-5 p-6 rounded-b-xl gap-2'>
          <span className=' text-base text-dark-400 dark:text-light-400'>made with &#10084;&#65039; by</span>
          <a target='_blank' rel="noreferrer" className='cursor-pointer' href='https://akash-web.netlify.app'><img src='https://raw.githubusercontent.com/aksh-git/assets/main/logo-dark.svg' width='70' height='28'/></a>
        </div>
      </div>
    </div>
  )
}

export default ChooseImage