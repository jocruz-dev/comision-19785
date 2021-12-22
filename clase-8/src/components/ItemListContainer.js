import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import {useParams, NavLink} from 'react-router-dom'
import '../styles/NavBarStyles.css'

function ItemListContainer(props){
    
    const {name} = useParams()

    const [state, setState] = useState([{name:"test"}])

    const timer = new Promise((resolve, reject)=>{
        setTimeout(() => {
        resolve([{name:"test"},{name:"test2"}])
        }, 2000)})
        
    const getAPI = async ()=>{
        let API, res;
        switch (name) {
            case "Star":  
                API = await fetch("https://www.swapi.tech/api/people/")
                res = await API.json()
                res = res.results
                break;
            case "Rick":
                API = await fetch("https://rickandmortyapi.com/api/character")
                res = await API.json()
                res = res.results
                break;
            case "disney":
                API = await fetch("http://api.disneyapi.dev/characters")
                res = await API.json()
                res = res.data
                break;
        
            default:
                API = await fetch("https://rickandmortyapi.com/api/character")
                res = await API.json()
                res = res.results
                break;
        }
    // const API = await fetch("http://localhost:3002/")
    return res
  }

    useEffect(()=>{
        getAPI(name).then((res)=>setState(res))
        return getAPI(name).then((res)=>setState(res))
    },[name])

    return (
    <>
     <Container>
         {state.map((value)=>{
             return <div><NavLink to={`/item/${value.name}`}>{value.name}</NavLink></div>
         })}
     </Container>
    </>
    )
}

export default ItemListContainer;