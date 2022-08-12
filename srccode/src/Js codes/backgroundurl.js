import backgroundwidth from "./backgroundwidth"

const Url=(ctr,width,shift="")=>{

        if (shift==="home" || ctr===0){
            backgroundwidth("Home",width)
        }
        if (shift==="destination" || ctr===1){
            backgroundwidth('Destination',width)
        }
        if (shift==="crew" || ctr===2){
            backgroundwidth('Crew',width)
        }
        if (shift==="technology" || ctr===3){
            backgroundwidth('Technology',width)
        }
   
}
export default Url