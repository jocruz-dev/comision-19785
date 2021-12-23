import React, {useEffect, useState, useContext} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import Common from './components/Common';
import Item from './components/Item'
import cartContext from './context/cartContext';
import CustomContext from './components/CustomContext';



function App() {
  
  const [state, setState] = useState("dark")

  window.addEventListener('evento', (e)=> console.log(e))

  return (
    <>
      <CustomContext>
        <ItemListContainer></ItemListContainer>
      </CustomContext>  
    </>
  );
}

export default App;
