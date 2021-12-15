import React, {Component} from "react";
import Common from "./Common";
import '../styles/ShellStyles.css'

class Shell extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name:"Joshua"
        }
        this.auxText = "Prueba"
        

    }

    
    handleClick = (params)=>{
        this.setState({click:2})
        console.log(this.state)
        console.log(this.auxText);
    }
    
    render (){
        
        return(
            <>
                <Common.TitleLabel text={this.state.click} estilo="color-texto-nav-azul"></Common.TitleLabel>
                <Common.TitleLabel text={this.state.name} estilo="color-texto-nav-rojo"></Common.TitleLabel>
                <Common.TitleLabel text="ADIOS" estilo="color-texto-nav-verde"></Common.TitleLabel>
                <Common.ButtonSubmit click={this.handleClick}></Common.ButtonSubmit>
                
            </>
        )
    }
}

export default Shell