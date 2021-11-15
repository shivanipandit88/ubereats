import { API, Auth } from 'aws-amplify';
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";


export default function Restaurant() {

    return (
        <div className='main restaurant'>
            <Container>
                <h1>Restaurants</h1>
                <div>
                    <Row className="align-items-center">
                        <Col md={4} sm={6} xs={12} style={{ fontSize: "18px" }}>
                            <a href="/menu" className="indiRes">
                                <Image src={require('../assets/food1.jpg')} alt="Restaurant 1" />
                                <p>Restaurant Name 1</p>
                            </a>
                        </Col>
                        <Col md={4} sm={6} xs={12} style={{ fontSize: "18px" }}>
                            <a href="/menu" className="indiRes">
                                <Image src={require('../assets/food1.jpg')} alt="Restaurant 2" />
                                <p>Restaurant Name 2</p>
                            </a>
                        </Col>
                        <Col md={4} sm={6} xs={12} style={{ fontSize: "18px" }}>
                            <a href="/menu" className="indiRes">
                                <Image src={require('../assets/food1.jpg')} alt="Restaurant 3" />
                                <p>Restaurant Name 3</p>
                            </a>
                        </Col>
                        <Col md={4} sm={6} xs={12} style={{ fontSize: "18px" }}>
                            <a href="/menu" className="indiRes">
                                <Image src={require('../assets/food1.jpg')} alt="Restaurant 4" />
                                <p>Restaurant Name 4</p>
                            </a>
                        </Col>
                        <Col md={4} sm={6} xs={12} style={{ fontSize: "18px" }}>
                            <a href="/menu" className="indiRes">
                                <Image src={require('../assets/food1.jpg')} alt="Restaurant 1" />
                                <p>Restaurant Name 1</p>
                            </a>
                        </Col>
                        <Col md={4} sm={6} xs={12} style={{ fontSize: "18px" }}>
                            <a href="/menu" className="indiRes">
                                <Image src={require('../assets/food1.jpg')} alt="Restaurant 2" />
                                <p>Restaurant Name 2</p>
                            </a>
                        </Col>
                        <Col md={4} sm={6} xs={12} style={{ fontSize: "18px" }}>
                            <a href="/menu" className="indiRes">
                                <Image src={require('../assets/food1.jpg')} alt="Restaurant 3" />
                                <p>Restaurant Name 3</p>
                            </a>
                        </Col>
                        <Col md={4} sm={6} xs={12} style={{ fontSize: "18px" }}>
                            <a href="/menu" className="indiRes">
                                <Image src={require('../assets/food1.jpg')} alt="Restaurant 4" />
                                <p>Restaurant Name 4</p>
                            </a>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}
