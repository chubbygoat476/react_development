import React,  { useState } from "react";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import { Col } from "react-bootstrap";


/**
 * 
 * @param {
 * } param0 
 * @returns 
 * 
 * Cart state cariables - total price and all the items, return a list
 * add a clear button?
 * turn items into buttons to remove or add? yeah that makes more sense
 */
export default function Faves({name, price, items, removeItemFromFaves}) { 

    /**
    items.map((item, index) => <li>{item}</li> <Button onClick={remove()}> Remove </Button>)
     * 
     * 
     */
    return (
        <div>
            <Container>
                <Col>
                    <h1>Favorites</h1>
                    {items.map((item, index) => <><li>{item}</li> <Button variant="danger" onClick={() => removeItemFromFaves(item)}> Remove </Button></>)}
                    <h3>Total: ${price}</h3>
                </Col>
            </Container>
        </div>
    )    
}