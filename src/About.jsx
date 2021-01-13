import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import logo from "./me.png";

function About() {
    return(<div  className="about" id="about">
        <Container>
            <Row >
                <Col md={{span: 6}} >
                    <h1>What's <span className="shoppies">Shoppies?</span></h1>
                    <p>Shoppies is an imaginary movie award project designed for the Shopify Summer 2021</p>
                    <p>Frontend development internship position. In this website you can search for movies and nominate</p>
                    <p>your favorites for a Shoppie! you can nominate up to 5 movies and if you changed your mind you can</p>
                    <p>remove them from your list.</p>
                </Col>
                <Col md={{span: 6}} style={{"text-align":"center"}}>
                    <a href="https://github.com/eisakeramati"><Image className="me" src={logo} roundedCircle/></a>
                </Col>
            </Row>
        </Container>
    </div>);
}

export default About;