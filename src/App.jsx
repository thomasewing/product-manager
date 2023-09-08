import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';

function App(){
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/api/products" />
          <Route element={<Detail/>}path="/api/products/:id"/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

