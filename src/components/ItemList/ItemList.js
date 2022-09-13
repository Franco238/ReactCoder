import Item from "../Item/Item"


const ItemList = ( {productos = []} ) => {

    return (
        <div className="container my-5">
            <h2>Productos</h2>
            <hr/>
            <section className="listaProductos">
            { productos.map((prod) => <Item producto={prod} key={prod.id}/>)}
            </section>
            
        </div>
    )
}

export default ItemList