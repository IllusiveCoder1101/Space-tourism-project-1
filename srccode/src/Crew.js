import React, { useEffect } from 'react'
import {useState} from 'react'
import './Crew.css'
import Record from './data.json'
import {useGlobalContext} from './flow'
const Crew = () => {
  const {move}=useGlobalContext()
  const [ctr,setCtr]=useState(0);
  const [width,setWidth]=useState(window.innerWidth);
  const resize=()=>{
    setWidth(window.innerWidth);
  }
  useEffect(()=>{
    window.addEventListener('resize',resize);
    return()=>{
      window.removeEventListener('resize',resize);
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
      <h5 className="head"><em>02</em>  MEET YOUR CREW</h5>
      <div className="crew" >
        
      <div className="imgcont">
        
        <img src={`image-${Record.crew[ctr].first}-${Record.crew[ctr].second}.png`}  alt="" className="imgcrew"/>
        <hr style={(width>480)?{display:"none"}:{display:"flex"}}/>
      </div>

        <div className="crewdesc">
        <div className="btns">
        <button type="button" disabled={(move)?true:false} onClick={()=>{setCtr(0)}} className={(ctr===0)?"slider0 act":"slider0"}></button>
        <button type="button" disabled={(move)?true:false} onClick={()=>{setCtr(1)}} className={(ctr===1)?"slider1 act":"slider1"}></button>
        <button type="button" disabled={(move)?true:false} onClick={()=>{setCtr(2)}} className={(ctr===2)?"slider2 act":"slider2"}></button>
        <button type="button" disabled={(move)?true:false} onClick={()=>{setCtr(3)}} className={(ctr===3)?"slider3 act":"slider3"}></button>
        </div>
        
        <div className="text1">
        <h2 className="post">{Record.crew[ctr].role}</h2>
        <h1 className="name">{`${Record.crew[ctr].first} ${Record.crew[ctr].second}`}</h1>
        <p className="desc">{Record.crew[ctr].bio}</p>
        </div>
        </div>
        
  
        
    </div></>
  )
}

export default Crew