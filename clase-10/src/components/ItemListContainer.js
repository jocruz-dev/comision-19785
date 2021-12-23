import React, {useState, useEffect, useContext} from 'react'
import Container from 'react-bootstrap/Container'
import {useParams, NavLink} from 'react-router-dom'
import '../styles/NavBarStyles.css'
import cartContext from '../context/cartContext'

function ItemListContainer(props){
    

    const [state, setState] = useState([{name:"test"}])

    const value = useContext(cartContext)

    console.log(value.eventHelper())
        
    const getAPI = async (name)=>{
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
        getAPI("Star").then((res)=>setState(res))
        return getAPI("Star").then((res)=>setState(res))
    },[])


    return (
    <>
     <Container>
         {state.map((value)=>{
             return <div>{value.name}</div>
         })}
         <p className={value}>THEME</p>
     </Container>
    </>
    )
}

export default ItemListContainer;