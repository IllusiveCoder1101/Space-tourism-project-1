import React from 'react'


import '../css styles/home.css'
import {useGlobalContext} from './flow'

const Home = () => {

  const {click}=useGlobalContext()

  return (
    <div className="content2">

      <div className="text">

        <h5 className="heading">SO,YOU WANT TO TRAVEL TO</h5>
        <h1 className="topic2">SPACE</h1>
        <p className="para2">Let’s face it; if you want to go to space, 
        you might as well genuinely go to outer space and not hover 
        kind of on the edge of it. Well sit back, and relax because 
        we’ll give you a truly out of this world experience!</p>

      </div>
      
      <button type="button" className="main" onClick={()=>click()} >EXPLORE</button>

    </div>

  )
}
export default Home

