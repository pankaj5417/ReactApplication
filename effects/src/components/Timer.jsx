import { useEffect, useState } from "react"

export const Timer=({initialtime,endtime})=>{
    const [counter, setCounter]=useState(initialtime)

    useEffect(()=>{
      let id=  setInterval(()=>{
            setCounter((p)=>{
                if(p===20){
                    clearInterval(id)
                    return 20
                }
                else
                return p+1
            })
            
        },1000)
      
        return ()=>{
            clearInterval(id)
        }
    },[])

    return (
        <div>count is:{counter}</div>
    )
}