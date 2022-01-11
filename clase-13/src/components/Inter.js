import {useState, useEffect} from 'react'
import React from 'react'

function Inter({type}) {

    const handleClick = (e)=>{
        e.preventDefault()
        console.log("Funcionalidad")
    }

    const Test = ()=>{
        return(
            <select onClick={handleClick}>
                <option>HOLA</option>
                <option>ADIOS</option>
            </select>
        )
    }

    const Test2 = ()=>{
        return(
            <form>
                <input type="email"></input>
                <button onClick={handleClick}>TEST2</button>
            </form>
        )
    }


    return(
        <>
        {(type === "carro") ? 
        <Test/>:
        <Test2></Test2>}
        </>
    )
}

export default Inter