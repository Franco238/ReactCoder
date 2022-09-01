import React from "react";
import ItemCount from "./ItemCount";
import Card from 'react-bootstrap/Card';

const ItemCard = (props) => {

    const {nombre, description, img, price, stock} = props;



  return (
    <Card className="tarjetaProduct" style={{ width: '18rem'}}>
      <Card.Img className="fotoCard" variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
            $ {price}
        </Card.Text>
        <ItemCount stock={stock}/>
      </Card.Body>
    </Card>
  );
}


    //     <div className="card" style="width: 18rem;">
    //         <img src={img} className="card-img-top" alt="..."/>
    //             <div className="card-body">
    //                 <h5 className="card-title">{nombre}</h5>
    //                 <p className="card-text">{description}</p>
    //                 <p>${price}</p>
    //                 <ItemCount stock={stock}/>
    //             </div>
    //     </div>


export default ItemCard