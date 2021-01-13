import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import DeleteIcon from '@material-ui/icons/Delete';
function NomPanel(props) {
    function sendNom() {
        props.del(props.title);
    }
    
    return (
        <div className="panel">
            <Container>
                <Row>
                    <Col md={{span: 8}} >
                        <h4 style={{"margin-top":"5px"}}><b>{props.title}</b></h4>
                    </Col>
                    <Col md={{span: 4}} className="single-left">
                            <Button variant="secondary" onClick={sendNom}><DeleteIcon/></Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default NomPanel;