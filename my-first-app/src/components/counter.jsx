import { useState } from "react";
function Counter({initval}) {

    const [count, setCount] =useState(initval)
/*
    if(count>10){
        return <div>counter reached the max value</div>
    }
    */
    return (
      <div className="App">
     <h2> counter {count}</h2>
     {count<200 && (
     <div>
    <button onClick={()=>setCount(count+1)}>Plus</button>
    <button onClick={()=>setCount(count-1)}>Minus</button>
  
    <button onClick={()=>setCount(count*2)}>Double</button>
  
    <div>Counter is {count%2===0?"Even":"Odd"}</div>
    </div>
    )}
           </div>
    );
  }
  
  export default Counter;
  