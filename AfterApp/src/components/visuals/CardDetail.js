import { useState, useContext } from "react"
import changeContext from "../../context/changeContext"

const CardDetail = ()=>{

    const [cambio, setCambio] = useState()
    const contexto = useContext(changeContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(e.target.innerHTML)
    }

    const handleChange = (e)=>{
        console.log(e.target.value)
        console.log(contexto)
        setCambio(e.target.value)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" placeholder="Ingresa tu producto"></input>
            <button type="submit">CLICK</button>
        </form>
    )
}

export default CardDetail;