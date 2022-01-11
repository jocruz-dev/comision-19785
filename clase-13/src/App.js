import React, {useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import Item from './components/Item'
import GloblalContext from './contexts/globalContext';


export const ThemeContext = React.createContext()

function App() {

  window.addEventListener('burbujas',()=>{
    console.log("BURBUJAS!!")
  })


  const [state, setState]= useState({nombre: "television", price:13})
  
  return (
    <GloblalContext.Provider value={state}>
      <BrowserRouter>
          <NavBarComponent />
            <Routes>
              <Route exact path="/" element={<ItemListContainer></ItemListContainer>}></Route>
              <Route exact path="/item/:name" element={<Item></Item>}></Route>
              <Route exact path="/category/:name" element={<ItemListContainer></ItemListContainer>}></Route>
              <Route></Route>
            </Routes>
      </BrowserRouter>
    </GloblalContext.Provider>
  );
}

export default App;
