import React from 'react'
import RangeSlider from '../RangeSlider'

function EditFilters() {
  return (
    <>
      <RangeSlider min={0} def={0} max={100} name='grayscale' action='edit-filter' label='Grayscale' unit='%' />
      <RangeSlider min={0} def={0} max={10} name='blur' action='edit-filter' label='Blur' unit='px' />
      <RangeSlider min={0} def={100} max={300} name='saturate' action='edit-filter' label='Saturate' unit='%' />
      <RangeSlider min={0} def={0} max={200} name='sepia' action='edit-filter' label='Sepia' unit='%' />
      <RangeSlider min={0} def={0} max={360} name='hue-rotate' action='edit-filter' label='Hue-rotate' unit='deg' />
    </>
  )
}

export default EditFilters