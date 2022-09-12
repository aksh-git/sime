import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "./_app";
import { rawImageData } from "./_app";

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
  
  return (
    <>
      {!state.editing &&
        <div align="center" className="text-white"><h1>Hello editor!!</h1><br/><h3>We've to get an image to work on it.</h3></div>
      }
      {mounted && <div>
        <img src={imageURL} />
      </div>}
    </>
  )
}

export default editor