import React, {useState,useEffect} from 'react'


import '../css styles/Technology.css'
import Record from '../data.json'
import {useGlobalContext} from './flow'


const Crew = () => {

  const {move}=useGlobalContext()
  const [width,setWidth]=useState(window.innerWidth);
  const [ctr,setCtr]=useState(0)

  const tech=["launch-vehicle","spaceport","space-capsule"]

  const resize=()=>{
    setWidth(window.innerWidth);
  }
  
  useEffect(()=>{
    window.addEventListener('resize',resize)
    return()=>{
      window.removeEventListener('resize',resize)
    }
  })

  useEffect(()=>{
    if(move){
      setTimeout(()=>{
        setCtr(ctr+1)
      },5000)
    }
  })

  return (
    <>

      <h5 className="head"><em>03</em>  SPACE LAUNCH 101</h5>
      <div className="tech">
          
        <div className="techimgcont">
          
          {(width>1080)?

            <img src={`image-${tech[ctr]}-portrait.jpg`} className="imgtech" alt={`${tech[ctr]}`} /> 
            :<img src={`image-${tech[ctr]}-landscape.jpg`} className="imgtech" alt={`${tech[ctr]}`} />

          }
        </div>

        <div className="techdesc">

          <div className="btnes">

            <button type="button" disabled={(move)?true:false} 
            onClick={()=>{setCtr(0)}} 
            className={(ctr===0)?"slide0 bright":"slide0"}>1</button>

            <button type="button" disabled={(move)?true:false}  
            onClick={()=>{setCtr(1)}} 
            className={(ctr===1)?"slide1 bright":"slide1"}>2</button>

            <button type="button" disabled={(move)?true:false} 
            onClick={()=>{setCtr(2)}} 
            className={(ctr===2)?"slide2 bright":"slide2"}>3</button>

          </div>
          
          
          <div className="abtmach">

            <h2 className="term">THE TERMINOLOGY ...</h2>
            <h1 className="techname">{` ${Record.technology[ctr].name}`}</h1>
            <p className="abttech">{Record.technology[ctr].description}</p>

          </div>

        </div>
          
      </div>

    </>

  )
}

export default Crew