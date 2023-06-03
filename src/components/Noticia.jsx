import React from "react";
import { Card, Col, Button } from "react-bootstrap";

const Noticia = () => {
  return (
    <Col sm={12} md={6} lg={4}>
      <Card>
        <Card.Img variant="top" src="https://images.pagina12.com.ar/styles/focal_3_2_960x640/public/2023-06/732609-captura-20de-20pantalla-202023-06-03-20150158.jpg?h=06f6671c&itok=hFGw1vwl" />
        <Card.Body>
          <h6 className="pb-2">Diario Z</h6>
          <Card.Title>Titulo noticia</Card.Title>
          <Card.Text className="text-secondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, quisquam ea sed iste, nemo aliquid eveniet incidunt cupiditate nostrum expedita veniam tenetur aut id, adipisci cumque magni aspernatur ipsa nulla.
          </Card.Text>
          <hr />
          <Button variant="primary" className='w-100 py-2'>Ver noticias completas</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Noticia;
