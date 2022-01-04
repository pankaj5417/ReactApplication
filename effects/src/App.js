import logo from './logo.svg';
import './App.css';
import { Form } from './components/Form';
import { Todo } from './components/Todo';
import { Timer } from './components/Timer';
import { useState } from 'react';
import Button from '@mui/material/Button';

function App() {
  const [show, setShow]=useState(true)
  return (
    <div className="App">
     
     <Todo />
      {show ? <Timer initialtime={1} endtime={20} />:null}
      <button onClick={()=>setShow(!show)}> {show ? "Hide":" Show"}</button>
      <Button variant="contained">Hello World</Button>;
    </div>
  );
}

export default App;
