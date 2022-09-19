import React from 'react'
import RangeSlider from '../RangeSlider'

function EditGeneral() {
  return (
    <>
      <RangeSlider min={0} def={100} max={200} name='Contrast' action='edit-filter' label='Contrast' unit='%' />
      <RangeSlider min={0} def={100} max={300} name='Brightness' action='edit-filter' label='Brightness' unit='%' />
      <RangeSlider min={0} def={100} max={100} name='opacity' action='edit-filter' label='Opacity' unit='%' /> 
    </>
  )
}

export default EditGeneral