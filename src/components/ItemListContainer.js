import { Component, useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import ItemCount from "./ItemCount";


const products = [

    {
        id: 1,
        nombre: "Camiseta titular 2022",
        description: "Camiseta oficial de la seleccion argentina para el mundial Qatar 2022",
        img: "https://images.ole.com.ar/2022/07/08/9PFcoCxF3_720x0__1.jpg",
        price: "15.000",
        stock: 200,
    },

    {
        id: 2,
        nombre: "Camiseta suplente 2022",
        description: "Camiseta violeta de la seleccion argentina para el mundial en Qatar 2022",
        img: "https://statics.forbesargentina.com/2022/08/crop/630d03db83c6b__822x822.webp",
        price: "14.000",
        stock: 300,
    },

    {
        id: 3,
        nombre: "Campera oficial 2022",
        description: "Campera oficial de la seleccion argentina 2022",
        img: "https://http2.mlstatic.com/D_NQ_NP_704509-MLA50262294520_062022-W.jpg",
        price: "22000",
        stock: 80,
    },

    {
        id: 4,
        nombre: "Buzo de entrenamiento AFA 2022",
        description: "Buzo de entrenamiento celeste oficial de la seleccion argentina 2022",
        img: "https://media.tycsports.com/files/2022/08/11/463954/el-nuevo-buzo-de-entrenamiento-de-la-seleccion-argentina-para-qatar-2022_416x555.webp",
        price: "15000",
        stock: 120,
    }

]



const ItemListContainer = () => {

    const [info, setInfo] = useState([])
    
    const getInfo = () => {
        const error = false;
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                if (!error ) {
                    resolve(products)
                } else {
                    reject("Hubo un error")
                }
            }, 2000)
        })
    }

    useEffect(() => {
        getInfo()
        .then (res => setInfo(res))
        .catch (error => console.log(error)) 
    }, [])

    return(
        <div className="row">
            
            {
            info.map(product => (
                <section className="col-3">
                <ItemCard key={product.id} nombre={product.nombre} description= {product.description} img= {product.img} price= {product.price} stock={product.stock}/>
                </section>
            ))
            }

        </div>

    )
}

export default ItemListContainer