import {NavLink} from 'react-router-dom'

const Common = {
    ButtonSubmit : (props)=>(<button onClick={props.click}>SUBMIT</button>),
    TitleLabel : ({text, estilo})=>(<p className={estilo}> <NavLink to="/category/Rick">{text}</NavLink> </p>)
}


export default Common;