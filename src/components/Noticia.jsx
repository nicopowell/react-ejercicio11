import React from "react";
import { Card, Col } from "react-bootstrap";

const Noticia = ({noticia}) => {
  return (
    <Col sm={12} md={6} lg={4}>
      <Card className="cardContainer">
        <Card.Img variant="top" src={noticia.image_url} />
        <Card.Body>
          <h6 className="pb-2">{noticia.source_id}</h6>
          <Card.Title>{noticia.title}</Card.Title>
          <Card.Text className="text-secondary">
            {noticia.description}
          </Card.Text>
          <hr />
          <a className='btn btn-primary w-100 py-2' href={noticia.link}>Ver noticias completas</a>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Noticia;
