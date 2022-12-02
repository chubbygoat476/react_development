import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import { Card, Col, ListGroup } from "react-bootstrap";




const DrinkItem = ({ name, price, img, t1, t2, filtered1, filtered2, addFaveClicked }) => {
    if (!filtered1 && !filtered2) {
        return (
            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src={img} style={{width: '14rem', height:'6'}}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{t1}</ListGroup.Item>
                    <ListGroup.Item>{t2}</ListGroup.Item>
                    <ListGroup.Item>${price}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Button variant="outline-primary" onClick={() => addFaveClicked(name, price)}> Add to Favorites </Button>
                </Card.Body>
            </Card>
        )
    }
    return (
        <div></div>
    )

}

export default DrinkItem;