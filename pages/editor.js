import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../pages/_app";
// import { rawImageData } from "./_app";
import styles from '../styles/Editor.module.css';
import RangeSlider from "../components/RangeSlider";
import OptionsButton from "../components/buttons/OptionsButton";

function editor() {

  const [mounted, setMounted] = useState(false);
  const [imageURL, setImageURL] = useState('');
  const { state, dispatch } = useContext(StateContext);

  const preCheck =()=>{
    if(state.editing){
      setImageURL(state.imageURL)
    }
  }

  useEffect(() => {
    preCheck()
    setMounted(true)
  }, [])
  
  // useEffect(() => {
  //   console.log(imageURL)
  // },[imageURL])

  useEffect(()=>{
    if (mounted) updateImageFilters()
  },[state])


  const applyEdit=(value) =>{
    document.getElementById('editingImage').style.filter=value
  }
  const updateImageFilters=() =>{
    let options = state.filters
    let filterString = ''
    options.map((opt)=>{
      filterString += ` ${opt.name}(${opt.unit==='%'?getPercentage(opt.curr,opt.max):opt.curr}${opt.unit})`
    })
    applyEdit(filterString)
  }

  const getPercentage=(vcurr,vmax)=>{
    return Math.ceil((vcurr/vmax)*100)
  }

  return (
    <>
      {/* {!state.editing &&
        <div align="center" className="text-white"><h1>Hello editor!!</h1><br/><h3>We've to get an image to work on it.</h3></div>
      }
      {mounted && <div>
        <img src={imageURL} />
      </div>} */}
      <div className={styles.editor}>
        <div className={styles.ewrap}>
          <div className={`bg-transp ${styles.output}`}>
            <div className={`${styles.wrapper}`}>
              {/* <img src={imageURL} /> */}
              <img id="editingImage" src='https://asia.olympus-imaging.com/content/000107507.jpg'/>
            </div>
          </div>
          <div className={styles.controls}>
            <div className={`${styles.wrapper}`}>
              <div className={`w-full ${styles.tabs}`}>
              <div class="btn-group btn-group-vertical gap-1 lg:btn-group-horizontal w-full flex justify-center">
                <button class="btn bg-brand">General</button>
                <button class="btn">Filters</button>
                <button class="btn">Button</button>
              </div>
              </div>
              <div className={styles.options}>
                <RangeSlider min={0} def={100} max={100} name='Contrast' action='edit-filter' label='Contrast' unit='%' />
                <RangeSlider min={0} def={100} max={100} name='Brightness' action='edit-filter' label='Brightness' unit='%' />
                <RangeSlider min={0} def={0} max={100} name='grayscale' action='edit-filter' label='Grayscale' unit='%' />
                <RangeSlider min={0} def={0} max={10} name='blur' action='edit-filter' label='Blur' unit='px' />
                <RangeSlider min={0} def={100} max={100} name='opacity' action='edit-filter' label='Opacity' unit='%' />
                <RangeSlider min={0} def={100} max={100} name='saturate' action='edit-filter' label='Saturate' unit='%' />
              </div>
              {/* <div className={`scrollbar ${styles.tabs}`}>
                <OptionsButton title='General' />
                <OptionsButton title='Filters' />
                <OptionsButton title='Filters' />
                <OptionsButton title='Filters' />
              </div> */}
             
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default editor