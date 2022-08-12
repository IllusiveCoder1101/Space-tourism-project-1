import backgroundwidth from "./backgroundwidth"

const Url=(ctr,width,shift=null)=>{

    if(shift){
        if (shift==="home" ){
            return backgroundwidth("Home",width)
        }
        else if (shift==="destination" ){
            return backgroundwidth('Destination',width)
        }
        else if (shift==="crew" ){
            return backgroundwidth('Crew',width)
        }
        else if (shift==="technology" ){
            return backgroundwidth('Technology',width)
        }
    }
    else{
        if ( ctr===0){
            return backgroundwidth("Home",width)
        }
        else if ( ctr===1){
            return backgroundwidth('Destination',width)
        }
        else if ( ctr===2){
            return backgroundwidth('Crew',width)
        }
        else if (  ctr===3){
            return backgroundwidth('Technology',width)
        }
    }
    

}
export default Url