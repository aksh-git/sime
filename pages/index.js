import React from "react"
import ChooseImage from '../components/ChooseImage'

export default function Home() {

  return (
    <div className='h-full py-5'> 
      <div className='w-full flex items-center justify-center'>
        <ChooseImage />
      </div>
    </div>
  )
}
