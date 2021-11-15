import { API, Auth } from 'aws-amplify';
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Table, Image, Button } from "react-bootstrap";
import food1 from '../assets/food1.jpg';
import food2 from '../assets/food2.jpg';
import food3 from '../assets/food3.jpg';
import food4 from '../assets/food4.jpg';

export default function Menu() {

    return (
        <div className='main menu'>
            <Container>
                <h1>Cart</h1>
                <Table striped bordered hover responsive="sm">
                    <tbody>
                        <tr>
                            <td>x1</td>
                            <td>House Pizza <span>Capsicum, Onions, Tomatoes, Corn, Cheese</span></td>
                            <td>$ 11.00</td>
                        </tr>
                        <tr>
                            <td>x2</td>
                            <td>Margherita Pizza <span>Capsicum, Onions, Tomatoes, Corn, Cheese</span></td>
                            <td>$ 11.00</td>
                        </tr>
                        <tr>
                            <td>x4</td>
                            <td>4 Cheese Pizza <span>Capsicum, Onions, Tomatoes, Corn, Cheese</span></td>
                            <td>$ 11.00</td>
                        </tr>
                        <tr>
                            <td>x1</td>
                            <td>Garden Pizza <span>Capsicum, Onions, Tomatoes, Corn, Cheese</span></td>
                            <td>$ 11.00</td>
                        </tr>
                        <tr>
                            <td colSpan="2">Total</td>
                            <td>$ 1111.00</td>
                        </tr>
                    </tbody>
                </Table>
                <Row>
                    <div className="btn">
                        <Button href="/cart" variant="warning">Place Order</Button>
                    </div>
                </Row>
            </Container>
        </div>
    );
}