import React from 'react'
import './App.css';
import MainScreen from './components/screens/MainScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App=() =>{
  
  return(
  <BrowserRouter>
    <Routes>
      <Route path='/weather/:location' element={<MainScreen />}></Route>
    </Routes>
  </BrowserRouter>
  )
  
}

export default App;
