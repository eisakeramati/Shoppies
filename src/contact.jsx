import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import StarIcon from "@material-ui/icons/Star";
import logo from "./linkedin.png";

function Contact() {
    return(<div id="contact">
        <Container>
            <Row>
                <Col md={{span: 6}}>
                    <a href="https://www.linkedin.com/in/eisa-keramatinejad/"><Image className="linkedin" src={logo} /></a>
                </Col>
                <Col md={{span: 6}} className="contact">
                    <h1>Who am I?</h1>
                    <p>My name is Eisa and I'm a fourth year Computer Science student at Ryerson University.</p>
                    <p>I'm interested in software development and applications of Artificial intelligence.</p>
                    <p>I'm also a huge nerd and a sucker for trivia games and soccer.</p>
                    <p>Please feel free to contact me!</p>
                </Col>
            </Row>
        </Container>
    </div>);
}

export default Contact;