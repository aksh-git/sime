import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../pages/_app";

function RangeSlider({action, min, max, label, name, def, unit}) {

  const { state, dispatch } = useContext(StateContext);
  const [rvalue, setrvalue] = useState(def);

  function handleChange(e){
    let v = parseInt(e.target.value)
    setrvalue(v<min||v>max?rvalue:v)
  }

  const update=()=>{
    dispatch({
      type:action,
      payload:{
        title:name,
        value:{
          name:name,
          action:action,
          min:min,
          max:max,
          curr:rvalue,
          unit:unit
        }
      }
    })
  }

  useEffect(()=>{
    update()
  },[rvalue])


  return (
    <div className="w-full py-1 px-2">
        <label htmlFor={name} className="font-bold text-gray-600">{label}</label>
        <div className="w-full flex items-center gap-3 pad-1">
            <input type="number" onInput={handleChange} className='w-16 text-white text-xl rounded-xl bg-transp pad-1 text-center' value={rvalue}/>
            <input type="range" onChange={handleChange} value={rvalue} min={min}name={name} max={max} className="range range-xs range-accent dark:range-dark" /> 
        </div>
    </div>
  )
}

export default RangeSlider