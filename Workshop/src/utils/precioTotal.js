function total(params) {
    try {
        const acumulador = params.map((value)=>(value.precio))
    } catch (error) {
        console.log(error)
        new Array(params)
    }
    return acumulador.reduce((prev, newValue)=>( prev + newValue))
}