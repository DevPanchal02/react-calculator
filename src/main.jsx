import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Version1 from './components/Version1';
import Version2 from './components/Version2';
import Version3 from './components/Version3';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
    <Route path='/' exact element={<Version1 />}></Route>
    <Route path='/Ver2' exact element={<Version2 />}></Route>
    <Route path='/Ver3' exact element={<Version3 />}></Route>
    </Routes>
  </BrowserRouter>
)
