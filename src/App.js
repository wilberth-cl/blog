import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import MyRoutes from './components/MyRoutes';

function App() {
  
  return (

    <BrowserRouter>
      <div className="mx-auto overflow-hidden">
 
        <Navbar /> 
        <MyRoutes />
       
      </div>
    </BrowserRouter>

  );

}

export default App;
