import './App.css';
import Counter from './components/counter';
import { useState } from 'react';
function App() {

  const [count, setCount] =useState(0)
  return (
    <div className="App">
      <Counter initval={0}/>
  {/*
   <h2> counter {count}</h2>
  <button onClick={()=>setCount(count+1)}>Plus</button>
  <button onClick={()=>setCount(count-1)}>Minus</button>

  <button onClick={()=>setCount(count-1)}>Double</button>

  <div>Counter is {count%2===0?"Even":"Odd"}</div>
  */}

         </div>
  );
}

export default App;
