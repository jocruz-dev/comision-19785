import React, {Component} from "react";
import Common from "./Common";
import '../styles/ShellStyles.css'

class Shell extends Component {

    
    render (){
        
        return(
            <>
                <Common.TitleLabel estilo="color-texto-nav-azul"></Common.TitleLabel>
                <Common.TitleLabel estilo="color-texto-nav-rojo"></Common.TitleLabel>
                <Common.TitleLabel text="ADIOS" estilo="color-texto-nav-verde"></Common.TitleLabel>
                <Common.ButtonSubmit click={this.handleClick}></Common.ButtonSubmit>
                
            </>
        )
    }
}

export default Shell