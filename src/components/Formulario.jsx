import React from "react";
import { Form, Col, Row } from "react-bootstrap";

const Formulario = () => {
  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Buscar por categoria
        </Form.Label>
        <Col sm="10">
          <Form.Select aria-label="Default select example">
            <option>Opciones</option>
            <option value="science">Ciencia</option>
            <option value="food">Comida</option>
            <option value="sports">Deportes</option>
            <option value="entertainment">Entretenimiento</option>
            <option value="environment">Medio ambiente</option>
            <option value="world">Mundo</option>
            <option value="business">Negocios</option>
            <option value="top">Noticias destacadas</option>
            <option value="politics">Política</option>
            <option value="health">Salud</option>
            <option value="technology">Tecnología</option>
            <option value="tourism">Turismo</option>
          </Form.Select>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default Formulario;
