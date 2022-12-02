import React,  { useState } from "react";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import { Col, Form, Navbar } from "react-bootstrap";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

export default function Toolbar({filterClicked1, filterClicked2, sort}) {
  return (
    <Form>
      <Row>

      <Col>
        <Form.Check
          inline
          label="Sparkling"
          name="type"
          type="radio"
          onClick={() => filterClicked1("sparkling")}
        />
        <Form.Check
          inline
          label="Alcohol"
          name="type"
          type="radio"
          onClick={() => filterClicked1("alcohol")}
        />
        <Form.Check
          inline
          label="Sugar Free"
          name="type"
          type="radio"
          onClick={() => filterClicked1("sugarfree")}
        />
        <Form.Check
          inline
          label="All"
          name="type"
          type="radio"
          onClick={() => filterClicked1("all")}
        />
      </Col>

      <Col>
      <Form.Check
          inline
          label="Sort by Price"
          name="type1"
          type="radio"
          onClick={() => sort("price")}
        />
      </Col>
      <Col>
      <Form.Check
          inline
          label="Default"
          name="type1"
          type="radio"
          onClick={() => sort("default")}
        />
      </Col>

      <Col>
      <Form.Check
          inline
          label="$2 or Less"
          name="type0"
          type="radio"
          onClick={() => filterClicked2("L2")}
        />
        <Form.Check
          inline
          label="More than $2"
          name="type0"
          type="radio"
          onClick={() => filterClicked2("G2")}
        />
        <Form.Check
          inline
          label="All"
          name="type0"
          type="radio"
          onClick={() => filterClicked2("all")}
        />
      </Col>

      </Row>
    </Form>
  

    );
}