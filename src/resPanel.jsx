import React, {useState} from 'react';
import Image from "react-bootstrap/Image"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StarIcon from '@material-ui/icons/Star';
import Button from "react-bootstrap/Button";

function ResPanel(props) {

    function sendNom() {
        props.pressed(props.title);
    }

    return (
        <div className="panel">
            <Container>
                <Row>
                    <Col md={{span: 4}} >
                        <Image className="image" src={props.image} alt={props.title} rounded/>
                        <br/>
                        { props.dis ?
                            <Button style={{"margin-top": "10px"}} variant="warning"
                                    onClick={sendNom} disabled><StarIcon/></Button> :
                            <Button style={{"margin-top": "10px"}} variant="warning"
                                    onClick={sendNom}><StarIcon/></Button>
                        }
                    </Col>
                    <Col md={{span: 8}} className="single-left">
                        <h4><b>{props.title}</b></h4>
                        <p>{props.director}</p>
                        <p>{props.genre}</p>
                        <p>{props.date}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );

}

export default ResPanel;