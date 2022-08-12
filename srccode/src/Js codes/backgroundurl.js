import backgroundwidth from "./backgroundwidth"

const Url=(ctr,width,shift=null)=>{

   
        if (shift==="home" || ctr===0){
            return backgroundwidth("Home",width)
        }
        else if (shift==="destination" || ctr===1){
            return backgroundwidth('Destination',width)
        }
        else if (shift==="crew" || ctr===2){
            return backgroundwidth('Crew',width)
        }
        else if (shift==="technology" ||  ctr===3){
            return backgroundwidth('Technology',width)
        }
    

}
export default Url