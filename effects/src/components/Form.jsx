import { useEffect, useState } from "react"

export const Form=()=>{
    const [counter, setCounter]=useState(0)

    const [age, setAge]=useState(10)

    console.log("before UseEffect")

    useEffect(()=>{
        console.log("first effect")
    },[])

    useEffect(()=>{
        console.log("Second effect")
    },[counter])

    return (
        <div>
            <h3>counter:{counter+1}</h3>
            <button onClick={()=>{
                setCounter(counter+1)
            }}>Add</button>
        </div>
    )
}