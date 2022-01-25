import React from "react";
import './index.css'
import { Main } from './views/Main';
import { Counter } from './views/Counter';
import { Route, Routes, Navigate } from 'react-router-dom';
import { NavBar } from './components/NavBar';

export default () => (
  <>
   <NavBar/>
   <Routes>
	 <Route path="/" element={ <Main/> } />
	 <Route path="counter" element={ <Counter/> } />
  </Routes>

  </>
);
