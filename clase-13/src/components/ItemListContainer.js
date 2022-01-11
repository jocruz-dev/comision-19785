import React, {useState, useEffect, useContext} from 'react'
import Container from 'react-bootstrap/Container'
import {useParams, NavLink} from 'react-router-dom'
import '../styles/NavBarStyles.css'
import GloblalContext from '../contexts/globalContext'
import Inter from './Inter'
import {Form, Button} from 'react-bootstrap'
import { deleteDoc, writeBatch, updateDoc, addDoc, collection, getDocs, doc, getFirestore, getDoc, where, query } from 'firebase/firestore';

function ItemListContainer(props){

    
    const {name} = useParams()
    
    const [state, setState] = useState([{name:"test"}])
    const [stateData, setStateData] = useState([])
    const [newData, setNewData] = useState()

    
    const variableGlobal = useContext(GloblalContext)



    console.log(`%c${variableGlobal}`, 'background: #222; color:#bada55')
    console.dir(variableGlobal)
    const db = getFirestore();

    const batch = writeBatch(db)

    let order = {
        buyer:{name:"joshua", phone:55555555, email: "test@test.com"},
        items: [{id:1,title: "patineta", price: 100},{id:2,title: "patineta", price: 20}],
        total: 30
    }

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
        //SINGLE
        // const data = doc(db, "items", "7DZKNwfTNVnFkaafVrYL")
        // getDoc(data).then((snapshot)=>{
        //     console.log(snapshot.data())
        //     setStateData([snapshot.data()])
        // })

        //COLLECTION
        const data = collection(db, "items")
        getDocs(data).then((res)=>{
            console.log(res.docs)
            console.log(res.docs.map((doc)=>({id: doc.id, ...doc.data()})))
            setStateData(res.docs.map((doc)=>({id: doc.id, ...doc.data()})))
        })


        //QUERY
        // const q = query(collection(db, "items"), where("precio", ">", 1000))
        // getDocs(q).then((res)=>{
        //     console.log(res.docs.map((doc)=>({id: doc.id, ...doc.data()})))
        //     setStateData(res.docs.map((doc)=>({id: doc.id, ...doc.data()})))
        // })
        // getAPI(name).then((res)=>setState(res))
        // return getAPI(name).then((res)=>setState(res))

    },[name, newData])



    const handleSubmit = (e)=>{
        e.preventDefault()
        const newItem = {nombre:e.target[0].value,precio:e.target[1].value}
        const data = collection(db, "items")
        addDoc(data,newItem).then((res)=>{
            console.log(res.id)
            setNewData(res.id)
        })
        console.log(newData)
    }

    const handleClick = ()=>{
        const data = doc(db, "items", "01QnhW6JeUNg0Cr4dAWB")
        deleteDoc(data)

        // getDoc(data).then((snapshot)=>{
        //     console.log(snapshot.data())
        //     updateDoc(data, {precio: (parseInt(snapshot.data().precio) * 2)})
        //     console.log(snapshot.id)
        //     setNewData("cambio")
        // })
        // batch.set(data, {campoNuevo: "test"})
        // batch.update(data, {campoNuevo: 1234})
        // batch.commit()
    }

    return (
    <>
     <Container>
         {/* {state.map((value, id)=>{
             return (
                    <div key={id} onClick={handleClick}><NavLink to={`/item/${value.name}`}>{value.name}</NavLink></div>
             )
         })} */}

        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingresa el nombre" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Precio</Form.Label>
            <Form.Control type="number" placeholder="Ingresa el precio" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Ingresar
        </Button>
        <Button variant="primary" onClick={handleClick}>
            Multiplicar
        </Button>
        </Form>
         {
             stateData.map((value, id)=> <p key={id}>NOMBRE:{value.nombre} PRECIO: {value.precio}</p>)
         }
        {/* <h1><Inter type="input"></Inter></h1>
         <form onSubmit={handleSubmit}>
             <input type="text" onKeyPress={handlePress}></input>
             <button type="submit" >CLICK</button>
         </form> */}
     </Container>
    </>
    )
}

export default ItemListContainer;