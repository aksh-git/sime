import React, { useContext, useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { StateContext } from "../pages/_app";
import styles from '../styles/Editor.module.css';
import EditGeneral from "../components/layouts/EditGeneral";
import EditFilters from "../components/layouts/EditFilters";
import EditOthers from "../components/layouts/EditOthers";

function editor() {
  
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [editorOptions, seteditorOptions] = useState('filters');
  const [imageURL, setImageURL] = useState('');
  
  const { state, dispatch } = useContext(StateContext);

  const preCheck =()=>{
    if(state.editing){
      setImageURL(state.imageURL)
    }
  }

  function createFilterString(){
    let options = state.filters
    let filterString = ''
    options.map((opt)=>{
      //filterString += ` ${opt.name}(${opt.data.unit==='%'?getPercentage(opt.data.curr,opt.data.max):opt.data.curr}${opt.data.unit})`
      filterString += ` ${opt.name}(${opt.data.curr}${opt.data.unit})`
    })
    return filterString
  }

  const getPercentage=(vcurr,vmax)=>{
    return Math.ceil((vcurr/vmax)*100)
  }

  useEffect(() => {
    preCheck()
    setMounted(true)
  }, [])

  useEffect(()=>{
    if (!mounted) {
      return
    }  
    else{
      let fs = createFilterString()
      applyEdit(fs)
    }
  },[state])

  const applyEdit=(filterString) =>{
    var image = document.getElementById('sourceImage');
    var canvas = document.getElementById('canvas');
    canvas.crossOrigin = "anonymous";
    canvas.height=image.height
    canvas.width=image.width
    var context = canvas.getContext('2d');
    context.filter = filterString;
    // Draw the edited image to canvas
    context.drawImage(image, 0, 0);
  }

  function saveImage(){
    let linkElement = document.getElementById('saveLink');
    linkElement.setAttribute(
      'download', 'sime_edited_image.png'
    );
    var canvas = document.getElementById('canvas');
    let canvasData = canvas.toDataURL("image/png")
    canvasData.replace(
      "image/png", "image/octet-stream"
    )
    linkElement.setAttribute('href', canvasData);
    linkElement.click();
  }

  return (
    <>
      {!state.editing &&
        <div align="center" className="text-white"><h1>Hello editor!!</h1><br/><h3>We've to get an image to work on it.</h3><br/><br/><button onClick={()=>router.push('/')} className='btn bg-brand'>Choose Image</button></div>
      }
      <a style={{opactity:'0'}} id="saveLink"></a>
       {/* <!-- Hidden image that will be used for holding the source image --> */}
      <img src={imageURL} className={styles.sourceImage} id="sourceImage" crossOrigin="anonymous"></img>
      {state.editing && <div className={styles.editor}>
        <div className={styles.ewrap}>
          <div className={`bg-transp ${styles.output}`}>
            <div className={`${styles.wrapper}`}>
              {/* <img id="editingImage" src={imageURL} /> */}
              <canvas className={styles.canvas} id="canvas" height="0"></canvas>
              {/* <img id="editingImage" src='https://asia.olympus-imaging.com/content/000107507.jpg'/> */}
            </div>
          </div>
          <div className={styles.controls}>
            <div className={`${styles.wrapper}`}>
              <div className={`w-full ${styles.tabs}`}>
              <div className="btn-group btn-group-vertical gap-1 lg:btn-group-horizontal w-full flex justify-center">
                <button onClick={()=>seteditorOptions('filters')}  className={`btn ${editorOptions==='filters'?'bg-brand':''}`}>Filters</button>
                <button onClick={()=>seteditorOptions('general')} className={`btn ${editorOptions==='general'?'bg-brand':''}`}>General</button>
                <button onClick={()=>seteditorOptions('others')}  className={`btn ${editorOptions==='others'?'bg-brand':''}`}>Others</button>
              </div>
              </div>
              <div className={styles.options}>
                {editorOptions==='filters' && <EditFilters />} 
                {editorOptions==='general' && <EditGeneral />} 
                {editorOptions==='others' && <EditOthers />} 
              </div>
            </div>
          </div>
         <div className={`${styles.savbtn}`}>
          <button onClick={()=>saveImage()} className='btn bg-brand'>Save image</button>
         </div>
        </div>
        
      </div>}
    </>
  )
}

export default editor