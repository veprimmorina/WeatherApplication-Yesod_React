import React from 'react'
import './App.css';
import MainScreen from './components/screens/MainScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardComments from './components/comments/DashboardComments';


const App=() =>{
  
  return(
  <BrowserRouter>
    <Routes>
      <Route path='/weather/:location' element={<MainScreen />}></Route>
      <Route path='/dashboard/comments' element={<DashboardComments />}></Route>
    </Routes>
  </BrowserRouter>
  )
  
}

export default App;
