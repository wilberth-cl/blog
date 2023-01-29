import './App.css';
import React from 'react';
/* import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import MyRoutes from './components/MyRoutes'; */

import { BrowserRouter, Routes, Route, Outlet, NavLink  } from "react-router-dom";

const App = () => {
  const Home = () => <h1>Home</h1>;
  const Pets = () => <h1>Pet List</h1>;
  const Layout = () => {
    let activeStyle = {
    textDecoration: "underline",
  };

    return (
      <>
        <nav style={{ display: "flex", justifyContent: "space-around" }}>
          <NavLink  to="/home" style={({ isActive }) => isActive ? activeStyle : undefined }>Home</NavLink >
          <NavLink  to="/pets" style={({ isActive }) => isActive ? activeStyle : undefined }>Pets</NavLink >
        </nav>
        <Outlet />
      </>
    );
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />}></Route>
            <Route path="pets" element={<Pets />}></Route>
            <Route path="*" element={<h1>404</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
