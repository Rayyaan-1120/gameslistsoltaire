import React from "react";

export const Loader = ({className}) => {
    return(
        <div className={className} style={{display: 'flex', alignItems:'center',justifyContent: 'center',minHeight:'100vh',background:'#000'}}>
           <div className="load-man">

           </div>
        </div>
    )
}