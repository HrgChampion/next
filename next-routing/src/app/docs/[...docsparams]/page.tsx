import React from 'react'

const Docs = ({params}:any) => {
    console.log("params",params.docsparams)
    if(params.docsparams.length===2){
        return(
        <div>Viewinfg docs for feature{params.docsparams[0]} and concept {params.docsparams[1]}</div>
        )
    }else if (params.docsparams.length===1){
        return(
            <div>Viewinfg docs for feature{params.docsparams[0]}</div>
            )   
    }else{ 
  return (
    <div> Welcome to Docs : {params.docsparams.length}</div>
  )
    }
}

export default Docs