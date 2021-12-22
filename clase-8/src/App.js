import React, {useEffect, useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import Common from './components/Common';
import Item from './components/Item'


function App() {

  
  return (
    <BrowserRouter>
        <NavBarComponent />
          <Routes>
            <Route exact path="/" element={<ItemListContainer></ItemListContainer>}></Route>
            <Route exact path="/item/:name" element={<Item></Item>}></Route>
            <Route exact path="/category/:name" element={<ItemListContainer></ItemListContainer>}></Route>
            <Route></Route>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
