import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import Home from '../pages/Home';
import Algo from '../pages/Algo';
import Otro from '../pages/Otro';
import Page404 from '../pages/Page404';

const MyRoutes = () => (
       <Routes>
        
          <Route 
            path='/'
            element={<Home/>}
          />

          <Route 
            path='/blog-cra'
            element = {<Welcome/>} 
            />

          <Route 
            path='/otro'
            element={<Otro/>}
            />

          <Route 
            path='/algo'
            element={<Algo/>}
            />

           <Route
            path='*'
            element={<Page404/>}
            />

        </Routes>
)

export default MyRoutes;
