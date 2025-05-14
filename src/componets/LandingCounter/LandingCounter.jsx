import React, { useEffect, useState } from "react";

export default function LandingCounter({count}) {

     const [Counter , setCounter] = useState(0); 
      useEffect(() => {
        let interval = setInterval(() => {
          setCounter(pre => pre + 1)
        }, 10);
    
        if(Counter === count){
            clearInterval(interval)
        }
    
        return () => {clearInterval(interval)}
      },[Counter])
    
  return (
    <span className="landing-status__count">{Counter}</span>

  )
}
