import React, {useEffect, useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBar'
import Shell from './components/Shell';


function App() {

  const [state, setState] = useState([])

  const getAPI = async ()=>{

    // const API = await fetch("http://localhost:3002/")
    const API = await fetch("https://rickandmortyapi.com/api/character")
    const res = await API.json()
    return res
  }


  useEffect(()=>{
    getAPI().then((res)=>setState(res.results))
  },[])

  
  return (
    <React.Fragment>
        <NavBarComponent >
        </NavBarComponent>
        {state.map((value)=>{
          return <div>{value.name}</div>
        })}
        <Shell>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </Shell>
    </React.Fragment>
  );
}

export default App;
