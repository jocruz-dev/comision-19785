import React from "react"
// import { collection, getDocs, doc, getFirestore, getDoc, where, query } from 'firebase/firestore';


let result = "Test"
fetch("https://rickandmortyapi.com/api/character").then((res)=>{
    return res.json()
}).then((res)=>{
    result = res
})
const changeContext = React.createContext(result)
// const db = getFirestore();
// const data = doc(db, "items", "7DZKNwfTNVnFkaafVrYL")
// getDoc(data).then((snapshot)=>{
//     console.log(snapshot.data())
//     changeContext = React.createContext(snapshot.data())
// })

export default changeContext;