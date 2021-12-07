const Common = {
    ButtonSubmit : (props)=>(<button onClick={props.click}>SUBMIT</button>),
    TitleLabel : ({text, estilo})=>(<p className={estilo}>{text}</p>)
}


export default Common;