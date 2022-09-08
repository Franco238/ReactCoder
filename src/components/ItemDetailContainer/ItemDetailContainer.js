import { useEffect, useState } from "react"
import PedirDatos from "../pedirDatos/pedirDatos"
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)

        PedirDatos()
            .then((res) => {
                setItem( res.find((prod) => prod.id === Number(itemId)) )
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            })
        // setear el estado con un único producto

    }, [])

    return (
        <div>
            {
                loading
                ? <h2>Loading...</h2>
                : <ItemDetail item={item} />
            }
            

        </div>
    )
}

export default ItemDetailContainer