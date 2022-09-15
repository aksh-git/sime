import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../pages/_app";
// import { rawImageData } from "./_app";
import styles from '../styles/Editor.module.css';
import RangeSlider from "../components/RangeSlider";

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
  
  useEffect(() => {
    console.log(imageURL)
  },[imageURL])
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
            <img src={imageURL} />
          </div>
          <div className={styles.controls}>
            <div className={styles.options}>
              <RangeSlider min={0} max={10} name='contrast' />
            </div>
            <div className={styles.tabs}>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default editor