
import { Component, useEffect, useState } from "react";
import ItemCount from "../ItemCount";
import {useParams} from 'react-router-dom';
import Banner from "../Banner";
import ItemList from "../ItemList/ItemList";
import PedirDatos from "../pedirDatos/pedirDatos";
import Spinner from 'react-bootstrap/Spinner';




const ItemListContainer = () => {
   
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    

    useEffect(() => {
        setLoading(true)

        PedirDatos()
            .then( (res) => {
                if (!categoryId) {
                    setProductos(res)
                } else {
                    setProductos( res.filter((prod) => prod.category === categoryId) )
                }
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])


    return (
        <div>
            {
                loading 
                ? <section className="spinner">
                    <Spinner animation="grow" />
                    </section>
                : <div>
                    <Banner/>
                    <ItemList productos={productos}/>
                    </div> 
            }
        </div>
    )
}

export default ItemListContainer

