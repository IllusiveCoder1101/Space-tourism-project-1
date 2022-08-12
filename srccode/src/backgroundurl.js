

const Url=(ctr,width,shift="")=>{
    if (shift){
        if (shift==="home"){
            if(width>0 && width<=768){
                return "Home-mobile"
            }
            if(width>768 && width<=1080){
                return "Home-tablet"
            }
            if(width>1080 && width<=1440){
                return "Home-desktop"
            }
        }
        if (shift==="destination"){
            if(width>0 && width<=768){
                return "Destination-mobile"
            }
            if(width>768 && width<=1080){
                return "Destination-tablet"
            }
            if(width>1080 && width<=1440){
                return "Destination-desktop"
            }
        }
        if (shift==="crew"){
            if(width>0 && width<=768){
                return "Crew-mobile"
            }
            if(width>768 && width<=1080){
                return "Crew-tablet"
            }
            if(width>1080 && width<=1440){
                return "Crew-desktop"
            }
        }
        if (shift==="technology"){
            if(width>0 && width<=768){
                return "Technology-mobile"
            }
            if(width>768 && width<=1080){
                return "Technology-tablet"
            }
            if(width>1080 && width<=1440){
                return "Technology-desktop"
            }
        }
    }
    else{
        if (ctr===0){
            if(width>0 && width<=768){
                return "Home-mobile"
            }
            if(width>768 && width<=1080){
                return "Home-tablet"
            }
            if(width>1080 && width<=1440){
                return "Home-desktop"
            }
        }
        if (ctr===1){
            if(width>0 && width<=768){
                return "Destination-mobile"
            }
            if(width>768 && width<=1080){
                return "Destination-tablet"
            }
            if(width>1080 && width<=1440){
                return "Destination-desktop"
            }
        }
        if (ctr===2){
            if(width>0 && width<=768){
                return "Crew-mobile"
            }
            if(width>768 && width<=1080){
                return "Crew-tablet"
            }
            if(width>1080 && width<=1440){
                return "Crew-desktop"
            }
        }
        if (ctr===3){
            if(width>0 && width<=768){
                return "Technology-mobile"
            }
            if(width>768 && width<=1080){
                return "Technology-tablet"
            }
            if(width>1080 && width<=1440){
                return "Technology-desktop"
            }
        }
    }
}
export default Url