import React, {useState, useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListContainer from "./components/containers/ListContainer"
import changeContext from './context/changeContext';
import { collection, getDocs, doc, getFirestore, getDoc, where, query } from 'firebase/firestore';
import Detail from './components/containers/Detail';
import NavBar from './components/containers/NavBar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"



function App() {

  const [dataContext, setDataContext] = useState([])

  // const [dataContext, setDataContext] = useState()
  // const db = getFirestore();
  // const data = doc(db, "items", "7DZKNwfTNVnFkaafVrYL")
  // getDoc(data).then((snapshot)=>{
  //     console.log(snapshot.data())
  //     setDataContext(snapshot.data())
  // })
  const db = getFirestore();

  useEffect(()=>{
    fetch("https://rickandmortyapi.com/api/character").then((res)=>{
      return res.json()
  }).then((res)=>{
      console.log(res)
      //setDataContext(res.results)
  })




        //SINGLE
        const data = collection(db, "items")
        getDocs(data).then((snapshot)=>{
            console.log(snapshot.docs.map((snapshot)=>({...snapshot.data()})))
            setDataContext(snapshot.docs.map((snapshot)=>({...snapshot.data()})))
        })

  },[])

  return (
    <React.Fragment>
      <NavBar></NavBar>
        <changeContext.Provider value={dataContext}>
      <Router>
        <Routes>
        <Route exact path="/" element={<h1>HOME</h1>}/>
          <Route exact path="/detail" element={<Detail></Detail>}/>
        </Routes>
      </Router>
        </changeContext.Provider>
    </React.Fragment>
  );
}

export default App;
