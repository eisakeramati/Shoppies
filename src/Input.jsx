import React, {useState, useEffect} from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import SearchIcon from "@material-ui/icons/Search";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ResPanel from "./resPanel";
import NomPanel from "./nomPanel";
import Alert from "react-bootstrap/Alert";

const http = require('http');

function Input(props) {
    const [inp, changeInp] = useState([]);
    const [jsonData, putData] = useState([]);
    const [nomList, setNomList] = useState(localStorage.getItem('nomList')=== null ? [] : JSON.parse(localStorage.getItem('nomList')));

    useEffect(function () {
        localStorage.setItem('nomList', JSON.stringify(nomList));
    }, [nomList]);

    function findMovies(event) {
        putData(prev => {
            return [];
        });
        var mdata;
        var finData = [];
        var url = "https://www.omdbapi.com/?apikey=a5c22484&s=" + inp;
        http.get(url,function (response) {
            response.on('data', function (data) {
                mdata = JSON.parse(data);
                if (mdata.Search != undefined) {
                    var i;
                    for (i = 0; i < 3; i++) {
                        url = "https://www.omdbapi.com/?apikey=a5c22484&t=" + mdata.Search[i].Title;
                        http.get(url, function (response) {
                            response.on('data', function (data) {
                                var temp = JSON.parse(data);
                                if (temp.Title != undefined) {
                                    finData.push(temp);
                                    putData(prev => {
                                        return [...prev, temp];
                                    });
                                }
                            });
                        });
                    }
                }
            });
        });
    }

    function handleChange(event) {
        changeInp(prevState => {
            return event.target.value;
        });
    }

    function handleButton(inp) {
        if (!nomList.includes(inp) && nomList.length < 5) {
            setNomList(prev => {
                return [...prev, inp];
            });
        }
    }

    function delNom(inp) {
        if (nomList.includes(inp)) {
            setNomList(prev => {
                return prev.filter(nom => nom != inp);
            });
        }
    }

    function handleEnter(event) {
        if(event.key === 'Enter'){
            findMovies(event);
        }
    }

    return (<div style={{"margin-bottom":"40px"}}>
            <InputGroup className="mb-3 w-50 search-input">
                <FormControl
                    placeholder="Search for your movie"
                    aria-label="Search for your movie"
                    aria-describedby="basic-addon2"
                    onChange={handleChange}
                    onKeyUp={handleEnter}
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={findMovies} ><SearchIcon/></Button>
                </InputGroup.Append>
            </InputGroup>
        {nomList.length === 5 ? <Alert variant="success">You have sleceted the 5 maximum movies!</Alert> : null}
        <div className="main-container">
            <Container>
                <Row>
                    <Col md={{span: 7}} className="panel-main">
                        <h4 style={{"text-align": "left", "padding": "20px"}}>Results for your query:</h4>
                        {jsonData.length > 0 ?
                            jsonData.map(movieItem => {
                                return <ResPanel title={movieItem.Title} director={movieItem.Director}
                                                 pressed={handleButton}
                                                 image={movieItem.Poster} date={movieItem.Released}
                                                 genre={movieItem.Genre}
                                                 dis={nomList.includes(movieItem.Title) ? true : false}
                                ></ResPanel>
                            }) :
                            <div><h6 style={{"text-align": "left", "padding": "20px"}}>Choose your nominees by clicking
                                on the star.</h6></div>}
                    </Col>
                    <Col md={{span: 4, offset: 1}} className="panel-main height-fix">
                        <h4 style={{"text-align": "left", "padding": "20px"}}>Your nominees:</h4>
                        {nomList.length > 0 ?
                            nomList.map(nomItem => {
                                return <NomPanel title={nomItem} del={delNom}></NomPanel>
                            }) :
                            <div><h6 style={{"text-align": "left", "padding": "20px"}}>Choose your nominees by clicking
                                on the star.</h6></div>}
                    </Col>
                </Row>
            </Container>
        </div>
    </div>);
}

export default Input;