import React,{useState,useEffect} from 'react'

import Url from './backgroundurl'
import Home from './Home';
import Technology from './Technology';
import Crew from './Crew';
import Destination from './Destination';
import {useGlobalContext} from './flow';

 const App = () => {

  const {shift,move,shifting}=useGlobalContext();
  const [width,setWidth]=useState(window.innerWidth);
  const [ctr,setCtr]=useState(0);
  const [visibility,setVisibility]=useState(false);

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
    document.documentElement.className=Url(ctr,width,shift);
    localStorage.setItem('background',Url(ctr,width));
  })

  return(
    <main >

      <div className="main0">
        <svg className="logo" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
          <g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/>
          <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/>
          </g>
        </svg>

          {(width>768)?
            <div className="navbar0">
              <ul className="nav">
                <li>
                  <button type="button" disabled={(move)?true:false} className={(shift)?(shift==='home')?"btn0 active":"btn0":(ctr===0)?"btn0 active":"btn0"} onClick={()=>{setCtr(0);shifting('home')}}>
                  00 HOME
                  </button>
                </li>
                <li>
                  <button type="button" disabled={(move)?true:false} className={(shift)?(shift==='destination')?"btn1 active":"btn1":(ctr===1)?"btn1 active":"btn1"} onClick={()=>{setCtr(1);shifting('destination')}}>
                  01 DESTINATION
                  </button>
                </li>
                <li>
                  <button type="button" disabled={(move)?true:false} className={(shift)?(shift==='crew')?"btn2 active":"btn2":(ctr===2)?"btn2 active":"btn2"} onClick={()=>{setCtr(2);shifting('crew')}}>
                    02 CREW
                  </button>
                </li>
                <li>
                  <button type="button" disabled={(move)?true:false} className={(shift)?(shift==='technology')?"btn3 active":"btn3":(ctr===3)?"btn3 active":"btn3"} onClick={()=>{setCtr(3);shifting('technology')}}>
                  03 TECHNOLOGY
                  </button>
                </li>
              </ul>
            </div>:
            <div className="navbar2">

              <button type='button' className="menu" onClick={()=>setVisibility(true)}>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
                <g fill="#D0D6F9" fill-rule="evenodd">
                <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>

              </button>

            </div>
          }
      </div>
      { 
        <aside className={(visibility)?"sidebar show-sidebar":"sidebar close-sidebar "}>

          <button type="button" className="close" onClick={()=>setVisibility(false)}>

            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
            <g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/>
            <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>

          </button>
          <ul className="navbar1">

            <li>

              <button type="button" disabled={(move)?true:false}  
              className={(shift)?(shift==='home')?"btn00 active1":"btn00":(ctr===0)?"btn00 active1":"btn00"} 
              onClick={()=>{setCtr(0);shifting('home')}}>
                HOME
              </button>
              
            </li>

            <li>

              <button type="button" disabled={(move)?true:false} 
              className={(shift)?(shift==='destination')?"btn01 active1":"btn01":(ctr===1)?"btn01 active1":"btn01"} 
              onClick={()=>{setCtr(1);shifting('destination')}}>
                DESTINATION
              </button>

            </li>

            <li>

              <button type="button" disabled={(move)?true:false} 
              className={(shift)?(shift==='crew')?"btn02 active1":"btn02":(ctr===2)?"btn02 active1":"btn02"} 
              onClick={()=>{setCtr(2);shifting('crew')}}>
                CREW
              </button>

            </li>

            <li>

              <button type="button" disabled={(move)?true:false} 
              className={(shift)?(shift==='technology')?"btn03 active1":"btn03":(ctr===3)?"btn03 active1":"btn03"} 
              onClick={()=>{setCtr(3);shifting('technology')}}>
              TECHNOLOGY
              </button>

            </li>

         </ul>

        </aside>
      }

      {page(ctr,shift)}
    </main>
  )

}


const page=(ctr,nxt="")=>{
    
  if (ctr===0 && nxt==="home"){
    return <Home/>
  }
  else if (ctr===1 || nxt==="destination" ){
    return <Destination/>
  }
  else if (ctr===2 || nxt==="crew"){
    return <Crew/>
  }
  else if (ctr===3 || nxt==="technology"){
    return <Technology/>
  }

}

export default App