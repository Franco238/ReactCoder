import Card from 'react-bootstrap/Card';

const Banner = () => {
  return (
    <Card className=" bannerCard text-white">
      <Card.Img className="fotoBanner" src="https://media.a24.com/p/173cc37b9a2a32bb5b6ef994c7489778/adjuntos/296/imagenes/009/041/0009041865/1200x675/smart/camisetaseleccionargalternativajpg.jpg" alt="Card image" />
      <Card.ImgOverlay>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Banner