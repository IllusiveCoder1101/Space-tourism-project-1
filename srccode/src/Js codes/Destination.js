import React, { useEffect } from 'react'
import {useState} from 'react'
import './destinations.css'
import Record from './data.json'
import {useGlobalContext} from './flow'
const Destination = () => {
  const {move}=useGlobalContext()
  const [ctr,setCtr]=useState(0)
  useEffect(()=>{
    if(move){
      setTimeout(()=>{
        setCtr(ctr+1)
      },5000)
    }
    
  })
  return (
   <>
    <h5 className="head"><em>01</em>   PICK YOUR DESTINATION</h5>
      <div className="allobj" >
        
        <div>
        
          <img src={`image-${Record.destinations[ctr].name}.png`} className="planet" alt="" />
        </div>
        <div className="cont">
          <section className="btns">
          <button type="button" disabled={(move)?true:false} className={(ctr===0)?"button0 active":"button0"} onClick={()=>{setCtr(0)}}>MOON</button>
          <button type="button" disabled={(move)?true:false} className={(ctr===1)?"button1 active":"button1"}  onClick={()=>{setCtr(1)}}>MARS</button>
          <button type="button" disabled={(move)?true:false} className={(ctr===2)?"button2 active":"button2"}  onClick={()=>{setCtr(2)}}>EUROPA</button>
          <button type="button" disabled={(move)?true:false} className={(ctr===3)?"button3 active":"button3"} onClick={()=>{setCtr(3)}}>TITAN</button>
          </section>
          <section>
          <h1 className="topic1">{Record.destinations[ctr].name}</h1>
          <p className="para">{Record.destinations[ctr].description}</p>
          <hr className="line"/>
          </section>
          <div className="extra">
            
            <div className="extra1">
            <h5 className="heading">AVG. DISTANCE</h5>
            <h2 className="topic">{Record.destinations[ctr].distance}</h2>
            </div>
            <div className="extra2">
            <h5 className="heading">EST. TRAVEL TIME</h5>
            <h2 className="topic">{Record.destinations[ctr].travel}</h2>
            </div>
          </div>
        </div>
        
      </div></>
  )
}

export default Destination