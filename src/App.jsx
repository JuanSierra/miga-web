import React from "react";
import './index.css'
import { Main } from './views/Main';
import { Counter } from './views/Counter';
import { Route, Routes, Navigate } from 'react-router-dom';

export default () => (
  <>
   <Routes>
	 <Route path="/" element={ <Main/> } />
	 <Route path="counter" element={ <Counter/> } />
  </Routes>

  </>
);
