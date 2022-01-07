import React, {useState, useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListContainer from "./components/containers/ListContainer"
import changeContext from './context/changeContext';
import { collection, getDocs, doc, getFirestore, getDoc, where, query } from 'firebase/firestore';



function App() {

  const [dataContext, setDataContext] = useState({})

  // const [dataContext, setDataContext] = useState()
  // const db = getFirestore();
  // const data = doc(db, "items", "7DZKNwfTNVnFkaafVrYL")
  // getDoc(data).then((snapshot)=>{
  //     console.log(snapshot.data())
  //     setDataContext(snapshot.data())
  // })

  useEffect(()=>{
  //   console.log("Effect")
  //   fetch("https://rickandmortyapi.com/api/character").then((res)=>{
  //     return res.json()
  // }).then((res)=>{
  //     console.log(res)
  //     setDataContext(res.results)
  // })

  const db = getFirestore();
        //SINGLE
        const data = doc(db, "items", "7DZKNwfTNVnFkaafVrYL")
        getDoc(data).then((snapshot)=>{
            console.log(snapshot.data())
            setDataContext([snapshot.data()])
        })

  },[])

  return (
    <React.Fragment className="App">
        <div>Tu Código de React</div>
        <changeContext.Provider value={dataContext}>
          <ListContainer></ListContainer>
        </changeContext.Provider>
    </React.Fragment>
  );
}

export default App;
