import stock from "../Stock/Stock"
const PedirDatos = () => {
    return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(stock)
            }, 1000)
        } )
}

export default PedirDatos
