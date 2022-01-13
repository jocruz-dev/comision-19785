import Title from "../visuals/Title";
import Image from "../visuals/Image";
import Text from "../visuals/Text";
import AddButton from "../visuals/AddButton";
import styled from "styled-components"
import changeContext from "../../context/changeContext";
import { useContext } from "react";
import logo from "../../assets/logo.jpg"



const Detail = ()=>{

    const data = useContext(changeContext)
    console.log(data)

    return(
        <div>
            {data.map((value, id)=>{
                return(
                    <div key={id}>
                        <Title text={value.nombre}></Title>
                        <Image source={logo}></Image>
                        <p>{value.precio}</p>
                        <AddButton></AddButton>
                    </div>
                )
            })}
        </div>
    )
}

export default Detail;