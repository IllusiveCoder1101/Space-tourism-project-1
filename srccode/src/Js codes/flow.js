import React from 'react';
import {useState,useContext} from 'react';

const AppContext=React.createContext();

const AppProvider=({children})=>{
   
    const [shift,setShift]=useState(null);
    const [move,setMove]=useState(false);

    const click=()=>{
        setShift('destination');
        setMove(true);
        setTimeout(()=>{
            click2()
        },20000)
    }

    const click2=()=>{
        
     
        setShift('crew')
        setTimeout(()=>{
            click3()
        },20000)
  
        
    }

    const click3=()=>{
     
        setShift('technology')
        setTimeout(()=>{
            click4()
        },15000)
   
    }
    
    const click4=()=>{
        setShift('home');
        setMove(false);
    }
    const shifting=(value)=>{
        setShift(value);
    }
    
    return(
        <AppContext.Provider
        value={{shift,click,move,shifting}}>{children}
        </AppContext.Provider>
    )
}
export const useGlobalContext=()=>{
    return useContext(AppContext);
}
export {AppContext,AppProvider};