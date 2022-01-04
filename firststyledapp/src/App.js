import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import {  Div } from './components/styledComponents/Button';
import { useState } from 'react';
import Button from '@mui/material/Button';
function App() {

  const [theme, setTheme]=useState("light")
  return (
    <div className="App">
      <Button >clickme</Button>
      <Button variant="contained">Hello World</Button>;
     
      <Div>
        <p>hello</p>
      </Div>
    </div>
  );
}

export default App;
