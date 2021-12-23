import {useParams} from 'react-router-dom'

export default function Item (){

    const {name} = useParams()


    return(
        <div>
            DETALLE:{name}
        </div>
    )
}