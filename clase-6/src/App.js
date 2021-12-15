import React, {useState, useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBar'


function App() {

  const [state, setState] = useState([])

  const getData = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve([1,2,3,4])
    }, 3000);
  })

  useEffect(()=>{
    getData.then((res)=>setState(res))
  },[])

  return (
    <React.Fragment className="App">
        <NavBarComponent >
        </NavBarComponent>
        {state.map((value)=>{
            return <div>{value}</div>
          })}
    </React.Fragment>
  );
}

export default App;
