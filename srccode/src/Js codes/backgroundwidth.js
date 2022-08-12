const backgroundwidth = (page,width) => {
    if(width>0 && width<=768){
        return `${page}-mobile`
    }
    else if(width>768 && width<=1080){
        return `${page}-tablet`
    }
    else{
        return `${page}-desktop`
    }
}

export default backgroundwidth