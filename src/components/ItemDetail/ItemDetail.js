import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from '../ItemCount';


const ItemDetail = ({item}) => {


    return (

        <div className='cardDetail'>
            <Card  style={{ width: '18rem' }}>
              <Card.Img variant="top" src='{item.img}' />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  {item.description}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Precio: ${item.price}</ListGroup.Item>
                <ListGroup.Item>{item.category}</ListGroup.Item>
                <ListGroup.Item>stock: {item.stock}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <ItemCount/>
              </Card.Body>
            </Card>
        </div>
            
          );
        }
        
        // <div className="prodDescription">
        //     <img src={item.img}/>
        //     <h3>{item.nombre}</h3>
        //     <p>{item.description}</p>
        //     <p>{item.category}</p>
        //     <h4>{item.price}</h4>
        //     <hr/>
            

        // </div>


export default ItemDetail